
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Smartphone, X } from 'lucide-react';

interface MobileToastViewProps {
  toast: string;
  onClose: () => void;
}

const MobileToastView = ({ toast, onClose }: MobileToastViewProps) => {
  const [currentCard, setCurrentCard] = useState(0);
  
  // Split toast into cards (by paragraphs)
  const cards = toast.split('\n\n').filter(p => p.trim());
  
  const nextCard = () => {
    setCurrentCard(prev => Math.min(prev + 1, cards.length - 1));
  };
  
  const prevCard = () => {
    setCurrentCard(prev => Math.max(prev - 1, 0));
  };

  return (
    <div className="fixed inset-0 bg-gray-100 z-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b p-4 flex items-center justify-between">
        <Button onClick={onClose} variant="outline" size="sm">
          <X className="h-4 w-4 mr-2" />
          Close
        </Button>
        <div className="flex items-center gap-2">
          <Smartphone className="h-4 w-4 text-amber-600" />
          <span className="font-medium">Mobile Toast View</span>
        </div>
        <div className="text-sm text-gray-600">
          {currentCard + 1} / {cards.length}
        </div>
      </div>

      {/* Mobile Frame */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          {/* Phone Frame */}
          <div className="bg-black p-6 rounded-3xl shadow-2xl">
            <div className="bg-white rounded-2xl h-[600px] flex flex-col">
              {/* Status Bar */}
              <div className="bg-gray-900 text-white text-xs p-2 rounded-t-2xl flex justify-between">
                <span>9:41</span>
                <span>ToastBot</span>
                <span>100%</span>
              </div>
              
              {/* Toast Card */}
              <div className="flex-1 p-6 flex flex-col">
                <Card className="flex-1 border-amber-200">
                  <CardHeader className="text-center pb-3">
                    <CardTitle className="text-lg text-amber-700">
                      Toast Card {currentCard + 1}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-center">
                    <div className="text-base leading-relaxed font-serif text-center">
                      {cards[currentCard]}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Navigation */}
                <div className="flex justify-between items-center mt-4 px-2">
                  <Button
                    onClick={prevCard}
                    disabled={currentCard === 0}
                    variant="outline"
                    size="sm"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  
                  <div className="flex gap-1">
                    {cards.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                          index === currentCard ? 'bg-amber-600' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <Button
                    onClick={nextCard}
                    disabled={currentCard === cards.length - 1}
                    variant="outline"
                    size="sm"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-white border-t p-4 text-center text-sm text-gray-600">
        <p>💡 <strong>Pro Tip:</strong> Swipe through cards during your speech for easy reading on mobile!</p>
      </div>
    </div>
  );
};

export default MobileToastView;
