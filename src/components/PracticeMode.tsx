
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Play, Pause, RotateCcw, Eye, Clock, Volume2 } from 'lucide-react';

interface PracticeModeProps {
  toast: string;
  onClose: () => void;
}

const PracticeMode = ({ toast, onClose }: PracticeModeProps) => {
  const [isRunning, setIsRunning] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [mode, setMode] = useState<'normal' | 'teleprompter'>('normal');
  
  const paragraphs = toast.split('\n\n').filter(p => p.trim());
  const wordsPerMinute = 150; // Average speaking speed
  const totalWords = toast.split(' ').length;
  const estimatedTime = Math.ceil(totalWords / wordsPerMinute * 60); // in seconds
  
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getSpeedFeedback = () => {
    if (timeElapsed === 0) return null;
    const currentWpm = Math.round((totalWords / timeElapsed) * 60);
    if (currentWpm < 130) return { text: 'Too Slow', color: 'text-orange-600' };
    if (currentWpm > 170) return { text: 'Too Fast', color: 'text-red-600' };
    return { text: 'Perfect Pace', color: 'text-green-600' };
  };

  const speedFeedback = getSpeedFeedback();

  if (mode === 'teleprompter') {
    return (
      <div className="fixed inset-0 bg-black text-white z-50 flex flex-col">
        <div className="p-4 bg-gray-900 flex items-center justify-between">
          <Button onClick={() => setMode('normal')} variant="outline" size="sm">
            <Eye className="h-4 w-4 mr-2" />
            Exit Teleprompter
          </Button>
          <div className="text-center">
            <span className="text-lg font-mono">{formatTime(timeElapsed)}</span>
            {speedFeedback && (
              <span className={`ml-4 text-sm ${speedFeedback.color}`}>
                {speedFeedback.text}
              </span>
            )}
          </div>
          <div className="flex gap-2">
            <Button
              onClick={() => setIsRunning(!isRunning)}
              size="sm"
              variant={isRunning ? "destructive" : "default"}
            >
              {isRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
          </div>
        </div>
        
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-2xl md:text-3xl leading-relaxed font-serif whitespace-pre-line">
              {toast}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Volume2 className="h-5 w-5 text-amber-600" />
            Practice Mode
          </span>
          <Button onClick={onClose} variant="outline" size="sm">
            Close
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Timer and Controls */}
        <div className="flex items-center justify-between p-4 bg-amber-50 rounded-lg">
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="text-2xl font-mono font-bold">{formatTime(timeElapsed)}</div>
              <div className="text-sm text-gray-600">Elapsed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-mono">{formatTime(estimatedTime)}</div>
              <div className="text-sm text-gray-600">Target</div>
            </div>
            {speedFeedback && (
              <Badge className={speedFeedback.color}>
                {speedFeedback.text}
              </Badge>
            )}
          </div>
          
          <div className="flex gap-2">
            <Button
              onClick={() => setIsRunning(!isRunning)}
              variant={isRunning ? "destructive" : "default"}
              size="sm"
            >
              {isRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              {isRunning ? 'Pause' : 'Start'}
            </Button>
            <Button
              onClick={() => {
                setTimeElapsed(0);
                setIsRunning(false);
              }}
              variant="outline"
              size="sm"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
            <Button
              onClick={() => setMode('teleprompter')}
              variant="outline"
              size="sm"
            >
              <Eye className="h-4 w-4 mr-2" />
              Teleprompter
            </Button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Progress</span>
            <span>{Math.round((timeElapsed / estimatedTime) * 100)}%</span>
          </div>
          <Progress value={Math.min((timeElapsed / estimatedTime) * 100, 100)} />
        </div>

        {/* Speech Text */}
        <div className="prose max-w-none">
          <div className="text-lg leading-relaxed font-serif whitespace-pre-line p-6 bg-white border rounded-lg shadow-sm">
            {toast}
          </div>
        </div>

        {/* Practice Tips */}
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="p-3 bg-blue-50 rounded-lg">
            <div className="font-medium text-blue-800">💡 Pacing Tip</div>
            <div className="text-blue-700">Aim for 130-170 words per minute</div>
          </div>
          <div className="p-3 bg-green-50 rounded-lg">
            <div className="font-medium text-green-800">🎯 Eye Contact</div>
            <div className="text-green-700">Look up every few sentences</div>
          </div>
          <div className="p-3 bg-purple-50 rounded-lg">
            <div className="font-medium text-purple-800">⏸️ Pauses</div>
            <div className="text-purple-700">Pause after each paragraph</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PracticeMode;
