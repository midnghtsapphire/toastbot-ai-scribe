
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface QuotesTabProps {
  onQuoteSelect: (quote: string) => void;
}

const QuotesTab = ({ onQuoteSelect }: QuotesTabProps) => {
  const [quoteFilter, setQuoteFilter] = useState('all');
  const { toast } = useToast();

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

  const insertQuote = (quote: any) => {
    const formattedQuote = `${quote.text} - ${quote.author}`;
    onQuoteSelect(formattedQuote);
    toast({
      title: "Quote Selected",
      description: "Quote added to your toast generation.",
    });
  };

  return (
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
  );
};

export default QuotesTab;
