
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

export const useToastGeneration = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedTone, setSelectedTone] = useState('');
  const [coupleName1, setCoupleName1] = useState('');
  const [coupleName2, setCoupleName2] = useState('');
  const [storyHighlight, setStoryHighlight] = useState('');
  const [selectedQuote, setSelectedQuote] = useState('');
  const [targetLength, setTargetLength] = useState<'short' | 'medium' | 'long'>('medium');
  const [generatedToast, setGeneratedToast] = useState('');
  const { toast } = useToast();

  const generateToast = () => {
    if (!selectedRole || !selectedTone || !coupleName1 || !coupleName2) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields to generate your toast.",
        variant: "destructive",
      });
      return;
    }

    const roleContext = {
      'best-man': "As the best man, you've shared countless memories",
      'maid-of-honor': "As the maid of honor, you've been by their side",
      'father-bride': "As a proud father, watching your daughter grow",
      'mother-bride': "As a loving mother, seeing your child find their soulmate",
      'sibling': "As a sibling, you've witnessed their journey",
      'friend': "As a dear friend, you've been part of their story",
    };

    const toneStyle = {
      'funny': "with humor and wit, bringing smiles to everyone",
      'romantic': "with heartfelt emotion and love",
      'sentimental': "with touching memories and deep affection",
      'poetic': "with beautiful, eloquent words",
    };

    let sampleToast = `Good evening, everyone!

${roleContext[selectedRole as keyof typeof roleContext]} with ${coupleName1} and ${coupleName2}. ${storyHighlight ? `I'll never forget ${storyHighlight}.` : ''}

${selectedQuote ? `As ${selectedQuote.split(' - ')[1] || 'someone wise'} once said: "${selectedQuote.split(' - ')[0]}"` : ''}

Today, as I look at ${coupleName1} and ${coupleName2}, I see two people who truly complement each other. Their love story is one of ${toneStyle[selectedTone as keyof typeof toneStyle]}.

${coupleName1} and ${coupleName2}, may your love continue to grow stronger with each passing day. May you always find reasons to laugh together, comfort in each other's arms, and joy in the simple moments you share.

So let's raise our glasses to ${coupleName1} and ${coupleName2} - to love, laughter, and happily ever after!

Cheers! 🥂`;

    setGeneratedToast(sampleToast);
    toast({
      title: "✨ Toast Generated!",
      description: "Your personalized wedding toast is ready with analytics.",
    });
  };

  return {
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
    setSelectedQuote,
    targetLength,
    setTargetLength,
    generatedToast,
    setGeneratedToast,
    generateToast,
  };
};
