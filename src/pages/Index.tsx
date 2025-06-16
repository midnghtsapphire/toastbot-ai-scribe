
import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { BarChart3 } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import AuthModal from "@/components/auth/AuthModal";
import SavedToasts from "@/components/SavedToasts";
import PracticeMode from "@/components/PracticeMode";
import SpeechAnalytics from "@/components/SpeechAnalytics";
import SpeechActions from "@/components/SpeechActions";
import MobileToastView from "@/components/MobileToastView";
import Header from "@/components/Header";
import ToastForm from "@/components/ToastForm";
import ToastOutput from "@/components/ToastOutput";
import QuotesTab from "@/components/QuotesTab";
import TemplatesTab from "@/components/TemplatesTab";
import { useToastGeneration } from "@/hooks/useToastGeneration";

const Index = () => {
  const [user, setUser] = useState<any>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showPracticeMode, setShowPracticeMode] = useState(false);
  const [showMobileView, setShowMobileView] = useState(false);

  const {
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
  } = useToastGeneration();

  useEffect(() => {
    const savedUser = localStorage.getItem('toastbot_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleAuthSuccess = (userData: any) => {
    setUser(userData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header 
        user={user} 
        onShowAuthModal={() => setShowAuthModal(true)} 
      />

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="generator" className="w-full">
          <TabsList className={`grid w-full ${user ? 'grid-cols-5' : 'grid-cols-4'} mb-8`}>
            <TabsTrigger value="generator">🎯 Generator</TabsTrigger>
            <TabsTrigger value="analytics">📊 Analytics</TabsTrigger>
            <TabsTrigger value="quotes">📖 Quotes</TabsTrigger>
            <TabsTrigger value="templates">📝 Templates</TabsTrigger>
            {user && <TabsTrigger value="saved">💾 My Toasts</TabsTrigger>}
          </TabsList>

          <TabsContent value="generator" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-8">
              <ToastForm
                selectedRole={selectedRole}
                setSelectedRole={setSelectedRole}
                selectedTone={selectedTone}
                setSelectedTone={setSelectedTone}
                coupleName1={coupleName1}
                setCoupleName1={setCoupleName1}
                coupleName2={coupleName2}
                setCoupleName2={setCoupleName2}
                storyHighlight={storyHighlight}
                setStoryHighlight={setStoryHighlight}
                selectedQuote={selectedQuote}
                targetLength={targetLength}
                setTargetLength={setTargetLength}
                onGenerate={generateToast}
              />

              <div className="space-y-6">
                <ToastOutput
                  generatedToast={generatedToast}
                  onToastChange={setGeneratedToast}
                  user={user}
                  selectedRole={selectedRole}
                  selectedTone={selectedTone}
                  coupleName1={coupleName1}
                  coupleName2={coupleName2}
                  onShowAuthModal={() => setShowAuthModal(true)}
                />

                {generatedToast && (
                  <SpeechActions
                    toast={generatedToast}
                    onPracticeMode={() => setShowPracticeMode(true)}
                    onMobileView={() => setShowMobileView(true)}
                  />
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            {generatedToast ? (
              <SpeechAnalytics toast={generatedToast} />
            ) : (
              <Card className="shadow-lg border-amber-100">
                <CardContent className="pt-12 pb-12">
                  <div className="text-center text-gray-500">
                    <BarChart3 className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p>Generate a toast first to see detailed speech analytics!</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="quotes" className="space-y-6">
            <QuotesTab onQuoteSelect={setSelectedQuote} />
          </TabsContent>

          <TabsContent value="templates" className="space-y-6">
            <TemplatesTab onRoleSelect={setSelectedRole} />
          </TabsContent>

          {user && (
            <TabsContent value="saved" className="space-y-6">
              <SavedToasts user={user} />
            </TabsContent>
          )}
        </Tabs>
      </div>

      <footer className="bg-gradient-to-r from-amber-100 to-amber-50 dark:from-gray-800 dark:to-gray-700 border-t border-amber-200 dark:border-gray-600 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600 dark:text-gray-300">
            <p className="text-sm">
              Made with ❤️ for unforgettable wedding moments | ToastBot © 2024
            </p>
          </div>
        </div>
      </footer>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={handleAuthSuccess}
      />

      <Dialog open={showPracticeMode} onOpenChange={setShowPracticeMode}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-auto">
          {generatedToast && (
            <PracticeMode
              toast={generatedToast}
              onClose={() => setShowPracticeMode(false)}
            />
          )}
        </DialogContent>
      </Dialog>

      {showMobileView && generatedToast && (
        <MobileToastView
          toast={generatedToast}
          onClose={() => setShowMobileView(false)}
        />
      )}
    </div>
  );
};

export default Index;
