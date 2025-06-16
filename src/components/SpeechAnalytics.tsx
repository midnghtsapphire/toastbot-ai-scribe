
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart3, Clock, FileText, TrendingUp, Target } from 'lucide-react';

interface SpeechAnalyticsProps {
  toast: string;
}

const SpeechAnalytics = ({ toast }: SpeechAnalyticsProps) => {
  if (!toast.trim()) return null;

  const words = toast.trim().split(/\s+/).length;
  const characters = toast.length;
  const paragraphs = toast.split('\n\n').filter(p => p.trim()).length;
  const sentences = toast.split(/[.!?]+/).filter(s => s.trim()).length;
  
  // Reading time calculations
  const readingTime = Math.ceil(words / 150); // 150 WPM average speaking speed
  const fastReading = Math.ceil(words / 180);
  const slowReading = Math.ceil(words / 120);
  
  // Complexity analysis
  const avgWordsPerSentence = Math.round(words / sentences);
  const longWords = toast.split(/\s+/).filter(word => word.length > 6).length;
  const complexityScore = Math.min(100, (avgWordsPerSentence * 2 + (longWords / words * 100)));
  
  // Length assessment
  const getOptimalLength = () => {
    if (words < 150) return { status: 'short', color: 'text-orange-600', message: 'Consider adding more personal details' };
    if (words > 500) return { status: 'long', color: 'text-red-600', message: 'Consider shortening for better impact' };
    return { status: 'perfect', color: 'text-green-600', message: 'Optimal length for wedding toast' };
  };

  const lengthAssessment = getOptimalLength();

  const getComplexityLevel = () => {
    if (complexityScore < 30) return { level: 'Simple', color: 'bg-green-100 text-green-800', description: 'Easy to follow and deliver' };
    if (complexityScore < 60) return { level: 'Moderate', color: 'bg-yellow-100 text-yellow-800', description: 'Good balance of sophistication' };
    return { level: 'Complex', color: 'bg-red-100 text-red-800', description: 'May need practice for smooth delivery' };
  };

  const complexity = getComplexityLevel();

  return (
    <Card className="shadow-lg border-amber-100">
      <CardHeader className="bg-gradient-to-r from-amber-50 to-amber-100">
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-amber-600" />
          Speech Analytics
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">{words}</div>
            <div className="text-sm text-blue-700">Words</div>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">{readingTime}m</div>
            <div className="text-sm text-green-700">Read Time</div>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">{sentences}</div>
            <div className="text-sm text-purple-700">Sentences</div>
          </div>
          <div className="text-center p-3 bg-orange-50 rounded-lg">
            <div className="text-2xl font-bold text-orange-600">{paragraphs}</div>
            <div className="text-sm text-orange-700">Paragraphs</div>
          </div>
        </div>

        {/* Length Assessment */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-medium">Length Assessment</span>
            <Badge className={lengthAssessment.color}>
              {lengthAssessment.status.toUpperCase()}
            </Badge>
          </div>
          <Progress value={Math.min((words / 350) * 100, 100)} className="h-2" />
          <p className="text-sm text-gray-600">{lengthAssessment.message}</p>
        </div>

        {/* Reading Time Range */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-amber-600" />
            <span className="font-medium">Speaking Time Range</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Slow: {slowReading}min</span>
            <span className="font-medium">Normal: {readingTime}min</span>
            <span>Fast: {fastReading}min</span>
          </div>
        </div>

        {/* Complexity Analysis */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-medium">Complexity Level</span>
            <Badge className={complexity.color}>
              {complexity.level}
            </Badge>
          </div>
          <Progress value={complexityScore} className="h-2" />
          <p className="text-sm text-gray-600">{complexity.description}</p>
        </div>

        {/* Delivery Tips */}
        <div className="grid md:grid-cols-2 gap-4 pt-4 border-t">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-green-600" />
              <span className="font-medium text-green-600">Strengths</span>
            </div>
            <ul className="text-sm space-y-1 text-gray-600">
              {words >= 150 && words <= 500 && <li>• Perfect length for engagement</li>}
              {sentences >= 8 && <li>• Good sentence variety</li>}
              {paragraphs >= 3 && <li>• Well-structured content</li>}
              {complexityScore < 50 && <li>• Easy to deliver confidently</li>}
            </ul>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-blue-600" />
              <span className="font-medium text-blue-600">Tips</span>
            </div>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• Practice with the teleprompter</li>
              <li>• Pause between paragraphs</li>
              <li>• Make eye contact during key moments</li>
              <li>• Speak from the heart</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SpeechAnalytics;
