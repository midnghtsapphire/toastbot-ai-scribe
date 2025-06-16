
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Save, Zap } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface ToastOutputProps {
  generatedToast: string;
  onToastChange: (toast: string) => void;
  user: any;
  selectedRole: string;
  selectedTone: string;
  coupleName1: string;
  coupleName2: string;
  onShowAuthModal: () => void;
}

const ToastOutput = ({
  generatedToast,
  onToastChange,
  user,
  selectedRole,
  selectedTone,
  coupleName1,
  coupleName2,
  onShowAuthModal,
}: ToastOutputProps) => {
  const { toast } = useToast();

  const saveToast = () => {
    if (!user) {
      onShowAuthModal();
      return;
    }

    if (!generatedToast) {
      toast({
        title: "No toast to save",
        description: "Generate a toast first before saving.",
        variant: "destructive",
      });
      return;
    }

    const savedToast = {
      id: Date.now().toString(),
      title: `${selectedRole} toast for ${coupleName1} & ${coupleName2}`,
      content: generatedToast,
      role: selectedRole,
      tone: selectedTone,
      createdAt: new Date().toISOString(),
      isFavorite: false
    };

    const existing = localStorage.getItem(`toasts_${user.id}`);
    const savedToasts = existing ? JSON.parse(existing) : [];
    savedToasts.unshift(savedToast);
    localStorage.setItem(`toasts_${user.id}`, JSON.stringify(savedToasts));

    toast({
      title: "Toast saved!",
      description: "Your toast has been saved to your library.",
    });
  };

  return (
    <Card className="shadow-lg border-amber-100">
      <CardHeader className="bg-gradient-to-r from-amber-50 to-amber-100">
        <CardTitle>Your Generated Toast</CardTitle>
        <CardDescription>
          AI-powered with speech analytics and practice tools
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        {generatedToast ? (
          <div className="space-y-4">
            <Textarea
              value={generatedToast}
              onChange={(e) => onToastChange(e.target.value)}
              className="min-h-[300px] font-serif text-base leading-relaxed"
              placeholder="Your generated toast will appear here..."
            />
            
            <div className="flex gap-2 flex-wrap">
              <Button onClick={saveToast} variant="outline" size="sm">
                <Save className="h-4 w-4 mr-2" />
                {user ? 'Save Toast' : 'Sign in to Save'}
              </Button>
            </div>
          </div>
        ) : (
          <div className="min-h-[300px] flex items-center justify-center text-gray-500">
            <div className="text-center">
              <Zap className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p>Fill out the form and click "Generate AI Toast" to see your personalized speech with analytics!</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ToastOutput;
