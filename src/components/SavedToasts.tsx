
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { BookOpen, Copy, Download, Trash2, Heart } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface SavedToast {
  id: string;
  title: string;
  content: string;
  role: string;
  tone: string;
  createdAt: string;
  isFavorite: boolean;
}

interface SavedToastsProps {
  user: any;
}

const SavedToasts = ({ user }: SavedToastsProps) => {
  const [savedToasts, setSavedToasts] = useState<SavedToast[]>([]);
  const [selectedToast, setSelectedToast] = useState<SavedToast | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Load saved toasts from localStorage (replace with Supabase query)
    const saved = localStorage.getItem(`toasts_${user.id}`);
    if (saved) {
      setSavedToasts(JSON.parse(saved));
    }
  }, [user.id]);

  const deleteToast = (toastId: string) => {
    const updated = savedToasts.filter(t => t.id !== toastId);
    setSavedToasts(updated);
    localStorage.setItem(`toasts_${user.id}`, JSON.stringify(updated));
    
    if (selectedToast?.id === toastId) {
      setSelectedToast(null);
    }

    toast({
      title: "Toast deleted",
      description: "Your saved toast has been removed.",
    });
  };

  const toggleFavorite = (toastId: string) => {
    const updated = savedToasts.map(t => 
      t.id === toastId ? { ...t, isFavorite: !t.isFavorite } : t
    );
    setSavedToasts(updated);
    localStorage.setItem(`toasts_${user.id}`, JSON.stringify(updated));
  };

  const copyToast = (content: string) => {
    navigator.clipboard.writeText(content);
    toast({
      title: "Copied!",
      description: "Toast copied to clipboard.",
    });
  };

  if (savedToasts.length === 0) {
    return (
      <Card className="shadow-lg border-amber-100">
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <BookOpen className="h-12 w-12 mx-auto mb-4 text-gray-300" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No saved toasts yet</h3>
            <p className="text-gray-500">Generate and save your first toast to see it here!</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Saved Toasts List */}
      <Card className="shadow-lg border-amber-100">
        <CardHeader className="bg-gradient-to-r from-amber-50 to-amber-100">
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-amber-600" />
            Your Saved Toasts ({savedToasts.length})
          </CardTitle>
          <CardDescription>
            Click on any toast to view and edit
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {savedToasts.map((savedToast) => (
              <div
                key={savedToast.id}
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  selectedToast?.id === savedToast.id
                    ? 'border-amber-300 bg-amber-50'
                    : 'border-gray-200 hover:border-amber-200'
                }`}
                onClick={() => setSelectedToast(savedToast)}
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{savedToast.title}</h4>
                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(savedToast.id);
                      }}
                    >
                      <Heart className={`h-4 w-4 ${savedToast.isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteToast(savedToast.id);
                      }}
                    >
                      <Trash2 className="h-4 w-4 text-gray-400" />
                    </Button>
                  </div>
                </div>
                <div className="flex gap-2 mb-2">
                  <Badge variant="secondary">{savedToast.role}</Badge>
                  <Badge variant="outline">{savedToast.tone}</Badge>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {savedToast.content.substring(0, 100)}...
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  {new Date(savedToast.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Toast Viewer */}
      <Card className="shadow-lg border-amber-100">
        <CardHeader className="bg-gradient-to-r from-amber-50 to-amber-100">
          <CardTitle>
            {selectedToast ? selectedToast.title : 'Select a Toast'}
          </CardTitle>
          {selectedToast && (
            <CardDescription>
              {selectedToast.role} • {selectedToast.tone} • {new Date(selectedToast.createdAt).toLocaleDateString()}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent className="pt-6">
          {selectedToast ? (
            <div className="space-y-4">
              <Textarea
                value={selectedToast.content}
                readOnly
                className="min-h-[300px] font-serif text-base leading-relaxed"
              />
              <div className="flex gap-2">
                <Button
                  onClick={() => copyToast(selectedToast.content)}
                  variant="outline"
                  size="sm"
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
          ) : (
            <div className="min-h-[300px] flex items-center justify-center text-gray-500">
              <div className="text-center">
                <BookOpen className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>Select a saved toast to view and edit it here</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SavedToasts;
