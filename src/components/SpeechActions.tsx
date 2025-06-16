
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, Download, Share2, Printer, Volume2, Smartphone } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface SpeechActionsProps {
  toast: string;
  onPracticeMode: () => void;
  onMobileView: () => void;
}

const SpeechActions = ({ toast, onPracticeMode, onMobileView }: SpeechActionsProps) => {
  const { toast: showToast } = useToast();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(toast);
    showToast({
      title: "Copied!",
      description: "Toast copied to clipboard.",
    });
  };

  const downloadAsText = () => {
    const blob = new Blob([toast], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'wedding-toast.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showToast({
      title: "Downloaded!",
      description: "Toast saved as text file.",
    });
  };

  const printToast = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Wedding Toast</title>
            <style>
              body { 
                font-family: serif; 
                font-size: 16px; 
                line-height: 1.6; 
                max-width: 600px; 
                margin: 40px auto; 
                padding: 20px;
              }
              h1 { 
                text-align: center; 
                color: #92400e; 
                margin-bottom: 30px;
              }
              .toast-content { 
                white-space: pre-line; 
                margin: 20px 0; 
              }
              .footer {
                text-align: center;
                font-size: 12px;
                color: #666;
                margin-top: 40px;
                border-top: 1px solid #ddd;
                padding-top: 20px;
              }
            </style>
          </head>
          <body>
            <h1>🥂 Wedding Toast</h1>
            <div class="toast-content">${toast}</div>
            <div class="footer">Generated with ❤️ by ToastBot</div>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  const shareToast = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Wedding Toast',
          text: toast,
        });
      } catch (error) {
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  if (!toast.trim()) return null;

  return (
    <Card className="border-amber-100">
      <CardContent className="pt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <Button onClick={copyToClipboard} variant="outline" size="sm" className="w-full">
            <Copy className="h-4 w-4 mr-2" />
            Copy
          </Button>
          
          <Button onClick={downloadAsText} variant="outline" size="sm" className="w-full">
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
          
          <Button onClick={printToast} variant="outline" size="sm" className="w-full">
            <Printer className="h-4 w-4 mr-2" />
            Print
          </Button>
          
          <Button onClick={shareToast} variant="outline" size="sm" className="w-full">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>
        
        <div className="grid grid-cols-2 gap-2 mt-3">
          <Button onClick={onPracticeMode} className="bg-amber-600 hover:bg-amber-700" size="sm">
            <Volume2 className="h-4 w-4 mr-2" />
            Practice Mode
          </Button>
          
          <Button onClick={onMobileView} variant="outline" size="sm">
            <Smartphone className="h-4 w-4 mr-2" />
            Mobile View
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SpeechActions;
