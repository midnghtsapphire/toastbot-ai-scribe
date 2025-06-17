
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, Users, User, Zap } from 'lucide-react';

interface ToastFormProps {
  selectedRole: string;
  setSelectedRole: (role: string) => void;
  selectedTone: string;
  setSelectedTone: (tone: string) => void;
  coupleName1: string;
  setCoupleName1: (name: string) => void;
  coupleName2: string;
  setCoupleName2: (name: string) => void;
  storyHighlight: string;
  setStoryHighlight: (story: string) => void;
  selectedQuote: string;
  targetLength: 'short' | 'medium' | 'long';
  setTargetLength: (length: 'short' | 'medium' | 'long') => void;
  onGenerate: () => void;
}

const ToastForm = ({
  selectedRole,
  setSelectedRole,
  selectedTone,
  setSelectedTone,
  coupleName1,
  setCoupleName1,
  coupleName2,
  setCoupleName2,
  storyHighlight,
  setStoryHighlight,
  selectedQuote,
  targetLength,
  setTargetLength,
  onGenerate,
}: ToastFormProps) => {
  const roles = [
    { value: 'best-man', label: 'Best Man', icon: User },
    { value: 'maid-of-honor', label: 'Maid of Honor', icon: Users },
    { value: 'father-bride', label: 'Father of the Bride', icon: Users },
    { value: 'mother-bride', label: 'Mother of the Bride', icon: Users },
    { value: 'sibling', label: 'Sibling', icon: Users },
    { value: 'friend', label: 'Friend', icon: User },
  ];

  const tones = [
    { value: 'funny', label: 'Funny & Light', icon: Sparkles },
    { value: 'romantic', label: 'Romantic', icon: Users },
    { value: 'sentimental', label: 'Sentimental', icon: Sparkles },
    { value: 'poetic', label: 'Poetic', icon: Sparkles },
  ];

  return (
    <Card className="shadow-lg border-amber-100">
      <CardHeader className="bg-gradient-to-r from-amber-50 to-amber-100 p-3 sm:p-6">
        <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
          <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-amber-600" />
          AI Toast Generator
        </CardTitle>
        <CardDescription className="text-sm">
          Enhanced with speech analytics and practice tools
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 sm:space-y-6 pt-3 sm:pt-6 p-3 sm:p-6">
        <div className="space-y-2">
          <Label htmlFor="role" className="text-sm sm:text-base">Your Role *</Label>
          <Select value={selectedRole} onValueChange={setSelectedRole}>
            <SelectTrigger className="h-10 sm:h-11">
              <SelectValue placeholder="Select your role" />
            </SelectTrigger>
            <SelectContent>
              {roles.map((role) => {
                const Icon = role.icon;
                return (
                  <SelectItem key={role.value} value={role.value}>
                    <div className="flex items-center gap-2">
                      <Icon className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="text-sm">{role.label}</span>
                    </div>
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3">
          <Label className="text-sm sm:text-base">Toast Tone *</Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {tones.map((tone) => {
              const Icon = tone.icon;
              return (
                <Button
                  key={tone.value}
                  variant={selectedTone === tone.value ? "default" : "outline"}
                  onClick={() => setSelectedTone(tone.value)}
                  className="justify-start h-auto p-2 sm:p-3"
                >
                  <Icon className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                  <span className="text-xs sm:text-sm">{tone.label}</span>
                </Button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name1" className="text-sm sm:text-base">First Name *</Label>
            <Input
              id="name1"
              placeholder="e.g., Sarah"
              value={coupleName1}
              onChange={(e) => setCoupleName1(e.target.value)}
              className="h-10 sm:h-11"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="name2" className="text-sm sm:text-base">Partner's Name *</Label>
            <Input
              id="name2"
              placeholder="e.g., Michael"
              value={coupleName2}
              onChange={(e) => setCoupleName2(e.target.value)}
              className="h-10 sm:h-11"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-sm sm:text-base">Target Length</Label>
          <Select value={targetLength} onValueChange={setTargetLength}>
            <SelectTrigger className="h-10 sm:h-11">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="short">Short (1-2 min)</SelectItem>
              <SelectItem value="medium">Medium (2-3 min)</SelectItem>
              <SelectItem value="long">Long (3-4 min)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="story" className="text-sm sm:text-base">Story Highlight (Optional)</Label>
          <Textarea
            id="story"
            placeholder="Share a memorable moment or story about the couple..."
            value={storyHighlight}
            onChange={(e) => setStoryHighlight(e.target.value)}
            rows={3}
            className="text-sm sm:text-base"
          />
        </div>

        {selectedQuote && (
          <div className="p-3 sm:p-4 bg-amber-50 rounded-lg border border-amber-200">
            <Label className="text-xs sm:text-sm font-medium text-amber-800">Selected Quote:</Label>
            <p className="text-xs sm:text-sm text-amber-700 mt-1 italic">"{selectedQuote}"</p>
          </div>
        )}

        <Button onClick={onGenerate} className="w-full bg-amber-600 hover:bg-amber-700 h-11 sm:h-12" size="lg">
          <Zap className="h-4 w-4 mr-2" />
          <span className="text-sm sm:text-base">Generate AI Toast</span>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ToastForm;
