
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Download, Heart, Laugh, BookOpen, Sparkles, Users, User } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [generatedToast, setGeneratedToast] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedTone, setSelectedTone] = useState('');
  const [coupleName1, setCoupleName1] = useState('');
  const [coupleName2, setCoupleName2] = useState('');
  const [storyHighlight, setStoryHighlight] = useState('');
  const [selectedQuote, setSelectedQuote] = useState('');
  const [quoteFilter, setQuoteFilter] = useState('all');
  const { toast } = useToast();

  const roles = [
    { value: 'best-man', label: 'Best Man', icon: User },
    { value: 'maid-of-honor', label: 'Maid of Honor', icon: Heart },
    { value: 'father-bride', label: 'Father of the Bride', icon: Users },
    { value: 'mother-bride', label: 'Mother of the Bride', icon: Heart },
    { value: 'sibling', label: 'Sibling', icon: Users },
    { value: 'friend', label: 'Friend', icon: User },
  ];

  const tones = [
    { value: 'funny', label: 'Funny & Light', icon: Laugh, color: 'bg-yellow-100 text-yellow-800' },
    { value: 'romantic', label: 'Romantic', icon: Heart, color: 'bg-pink-100 text-pink-800' },
    { value: 'sentimental', label: 'Sentimental', icon: BookOpen, color: 'bg-blue-100 text-blue-800' },
    { value: 'poetic', label: 'Poetic', icon: Sparkles, color: 'bg-purple-100 text-purple-800' },
  ];

  const quotes = {
    romantic: [
      { text: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.", author: "Lao Tzu" },
      { text: "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.", author: "Anonymous" },
      { text: "I have found the paradox, that if you love until it hurts, there can be no more hurt, only more love.", author: "Mother Teresa" },
    ],
    funny: [
      { text: "Marriage is a wonderful institution, but who wants to live in an institution?", author: "Groucho Marx" },
      { text: "Love is blind, but marriage is a real eye-opener.", author: "Anonymous" },
      { text: "A successful marriage requires falling in love many times, always with the same person.", author: "Mignon McLaughlin" },
    ],
    classic: [
      { text: "Doubt thou the stars are fire; Doubt that the sun doth move; Doubt truth to be a liar; But never doubt I love.", author: "William Shakespeare" },
      { text: "Whatever our souls are made of, his and mine are the same.", author: "Emily Brontë" },
      { text: "The very first moment I beheld him, my heart was irrevocably gone.", author: "Jane Austen" },
    ],
    modern: [
      { text: "You're my end and my beginning, even when I lose I'm winning.", author: "John Legend" },
      { text: "I love you without knowing how, or when, or from where.", author: "Pablo Neruda" },
      { text: "In all the world, there is no heart for me like yours.", author: "Maya Angelou" },
    ],
  };

  const getFilteredQuotes = () => {
    if (quoteFilter === 'all') {
      return Object.values(quotes).flat();
    }
    return quotes[quoteFilter as keyof typeof quotes] || [];
  };

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

    const sampleToast = `Good evening, everyone!

${roleContext[selectedRole as keyof typeof roleContext]} with ${coupleName1} and ${coupleName2}. ${storyHighlight ? `I'll never forget ${storyHighlight}.` : ''}

${selectedQuote ? `As ${selectedQuote.split(' - ')[1] || 'someone wise'} once said: "${selectedQuote.split(' - ')[0]}"` : ''}

Today, as I look at ${coupleName1} and ${coupleName2}, I see two people who truly complement each other. Their love story is one of ${toneStyle[selectedTone as keyof typeof toneStyle]}.

${coupleName1} and ${coupleName2}, may your love continue to grow stronger with each passing day. May you always find reasons to laugh together, comfort in each other's arms, and joy in the simple moments you share.

So let's raise our glasses to ${coupleName1} and ${coupleName2} - to love, laughter, and happily ever after!

Cheers! 🥂`;

    setGeneratedToast(sampleToast);
    toast({
      title: "Toast Generated!",
      description: "Your personalized wedding toast is ready.",
    });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedToast);
    toast({
      title: "Copied!",
      description: "Toast copied to clipboard.",
    });
  };

  const insertQuote = (quote: any) => {
    setSelectedQuote(`${quote.text} - ${quote.author}`);
    toast({
      title: "Quote Selected",
      description: "Quote added to your toast generation.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-100 to-amber-50 border-b border-amber-200">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-800 mb-4">
              🥂 ToastBot
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              AI-powered wedding toast generator. Craft the perfect speech with quotes, templates, and personalized touches.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="generator" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-3 mb-8">
            <TabsTrigger value="generator">Toast Generator</TabsTrigger>
            <TabsTrigger value="quotes">Quote Library</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
          </TabsList>

          {/* Toast Generator Tab */}
          <TabsContent value="generator" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Input Form */}
              <Card className="shadow-lg border-amber-100">
                <CardHeader className="bg-gradient-to-r from-amber-50 to-amber-100">
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-amber-600" />
                    Create Your Toast
                  </CardTitle>
                  <CardDescription>
                    Fill in the details to generate your personalized wedding toast
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  {/* Role Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="role">Your Role *</Label>
                    <Select value={selectedRole} onValueChange={setSelectedRole}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        {roles.map((role) => {
                          const Icon = role.icon;
                          return (
                            <SelectItem key={role.value} value={role.value}>
                              <div className="flex items-center gap-2">
                                <Icon className="h-4 w-4" />
                                {role.label}
                              </div>
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Tone Selection */}
                  <div className="space-y-3">
                    <Label>Toast Tone *</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {tones.map((tone) => {
                        const Icon = tone.icon;
                        return (
                          <Button
                            key={tone.value}
                            variant={selectedTone === tone.value ? "default" : "outline"}
                            onClick={() => setSelectedTone(tone.value)}
                            className="justify-start h-auto p-3"
                          >
                            <Icon className="h-4 w-4 mr-2" />
                            <span className="text-sm">{tone.label}</span>
                          </Button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Couple Names */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name1">First Name *</Label>
                      <Input
                        id="name1"
                        placeholder="e.g., Sarah"
                        value={coupleName1}
                        onChange={(e) => setCoupleName1(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="name2">Partner's Name *</Label>
                      <Input
                        id="name2"
                        placeholder="e.g., Michael"
                        value={coupleName2}
                        onChange={(e) => setCoupleName2(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Story Highlight */}
                  <div className="space-y-2">
                    <Label htmlFor="story">Story Highlight (Optional)</Label>
                    <Textarea
                      id="story"
                      placeholder="Share a memorable moment or story about the couple..."
                      value={storyHighlight}
                      onChange={(e) => setStoryHighlight(e.target.value)}
                      rows={3}
                    />
                  </div>

                  {/* Selected Quote Display */}
                  {selectedQuote && (
                    <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                      <Label className="text-sm font-medium text-amber-800">Selected Quote:</Label>
                      <p className="text-sm text-amber-700 mt-1 italic">"{selectedQuote}"</p>
                    </div>
                  )}

                  <Button onClick={generateToast} className="w-full bg-amber-600 hover:bg-amber-700" size="lg">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Generate My Toast
                  </Button>
                </CardContent>
              </Card>

              {/* Generated Toast Output */}
              <Card className="shadow-lg border-amber-100">
                <CardHeader className="bg-gradient-to-r from-amber-50 to-amber-100">
                  <CardTitle>Your Generated Toast</CardTitle>
                  <CardDescription>
                    Review and customize your personalized wedding toast
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  {generatedToast ? (
                    <div className="space-y-4">
                      <Textarea
                        value={generatedToast}
                        onChange={(e) => setGeneratedToast(e.target.value)}
                        className="min-h-[400px] font-serif text-base leading-relaxed"
                        placeholder="Your generated toast will appear here..."
                      />
                      <div className="flex gap-2">
                        <Button onClick={copyToClipboard} variant="outline" size="sm">
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
                    <div className="min-h-[400px] flex items-center justify-center text-gray-500">
                      <div className="text-center">
                        <Sparkles className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                        <p>Fill out the form and click "Generate My Toast" to see your personalized speech appear here!</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Quote Library Tab */}
          <TabsContent value="quotes" className="space-y-6">
            <Card className="shadow-lg border-amber-100">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-amber-100">
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-amber-600" />
                  Quote Library
                </CardTitle>
                <CardDescription>
                  Browse our curated collection of wedding quotes and one-click add them to your toast
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                {/* Quote Filters */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {['all', 'romantic', 'funny', 'classic', 'modern'].map((filter) => (
                    <Button
                      key={filter}
                      variant={quoteFilter === filter ? "default" : "outline"}
                      onClick={() => setQuoteFilter(filter)}
                      size="sm"
                      className={quoteFilter === filter ? "bg-amber-600 hover:bg-amber-700" : ""}
                    >
                      {filter.charAt(0).toUpperCase() + filter.slice(1)}
                    </Button>
                  ))}
                </div>

                {/* Quote Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  {getFilteredQuotes().map((quote, index) => (
                    <Card key={index} className="border-amber-100 hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <blockquote className="text-gray-700 italic mb-3">
                          "{quote.text}"
                        </blockquote>
                        <div className="flex items-center justify-between">
                          <cite className="text-sm text-amber-600 font-medium">
                            — {quote.author}
                          </cite>
                          <Button
                            onClick={() => insertQuote(quote)}
                            size="sm"
                            variant="outline"
                            className="hover:bg-amber-50"
                          >
                            Add to Toast
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Templates Tab */}
          <TabsContent value="templates" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roles.map((role) => {
                const Icon = role.icon;
                return (
                  <Card key={role.value} className="shadow-lg border-amber-100 hover:shadow-xl transition-shadow">
                    <CardHeader className="bg-gradient-to-r from-amber-50 to-amber-100">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Icon className="h-5 w-5 text-amber-600" />
                        {role.label}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-gray-600 text-sm mb-4">
                        Specialized template for {role.label.toLowerCase()} speeches with appropriate tone and structure.
                      </p>
                      <Button
                        onClick={() => setSelectedRole(role.value)}
                        variant="outline"
                        size="sm"
                        className="w-full hover:bg-amber-50"
                      >
                        Use This Template
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-amber-100 to-amber-50 border-t border-amber-200 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p className="text-sm">
              Made with ❤️ for unforgettable wedding moments | ToastBot © 2024
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
