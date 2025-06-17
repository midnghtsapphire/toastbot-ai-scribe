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
import Reviews from "@/components/Reviews";
import { useToastGeneration } from "@/hooks/useToastGeneration";

const Index = () => {
  console.log('Index component rendering - WeddingToastBot app loaded');
  
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
    console.log('Index component mounted - checking for saved user');
    const savedUser = localStorage.getItem('toastbot_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleAuthSuccess = (userData: any) => {
    console.log('Auth success:', userData);
    setUser(userData);
  };

  console.log('Current user state:', user);
  console.log('Current route should be WeddingToastBot app');

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header 
        user={user} 
        onShowAuthModal={() => setShowAuthModal(true)} 
      />

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="generator" className="w-full">
          <TabsList className={`grid w-full ${user ? 'grid-cols-5' : 'grid-cols-4'} mb-8 bg-blue-50 border-blue-200`}>
            <TabsTrigger value="generator" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">🎯 Generator</TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">📊 Analytics</TabsTrigger>
            <TabsTrigger value="quotes" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">📖 Quotes</TabsTrigger>
            <TabsTrigger value="templates" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">📝 Templates</TabsTrigger>
            {user && <TabsTrigger value="saved" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">💾 My Toasts</TabsTrigger>}
          </TabsList>

          <TabsContent value="generator" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
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
              </div>

              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
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
                </div>

                {generatedToast && (
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <SpeechActions
                      toast={generatedToast}
                      onPracticeMode={() => setShowPracticeMode(true)}
                      onMobileView={() => setShowMobileView(true)}
                    />
                  </div>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            {generatedToast ? (
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <SpeechAnalytics toast={generatedToast} />
              </div>
            ) : (
              <Card className="shadow-lg border-blue-200 bg-blue-50">
                <CardContent className="pt-12 pb-12">
                  <div className="text-center text-blue-600">
                    <BarChart3 className="h-12 w-12 mx-auto mb-4 text-blue-400" />
                    <p>Generate a toast first to see detailed speech analytics!</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="quotes" className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <QuotesTab onQuoteSelect={setSelectedQuote} />
            </div>
          </TabsContent>

          <TabsContent value="templates" className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <TemplatesTab onRoleSelect={setSelectedRole} />
            </div>
          </TabsContent>

          {user && (
            <TabsContent value="saved" className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <SavedToasts user={user} />
              </div>
            </TabsContent>
          )}
        </Tabs>
      </div>

      {/* Reviews Section */}
      <Reviews />

      <footer className="bg-gradient-to-r from-yellow-100 to-yellow-50 dark:from-yellow-800 dark:to-yellow-700 border-t border-yellow-200 dark:border-yellow-600 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-yellow-700 dark:text-yellow-200">
            <p className="text-sm">
              Made with ❤️ for unforgettable wedding moments | WeddingToastBot © 2024
            </p>
            <p className="text-xs mt-1">
              Lovingly provided by EverUnity Church | Powered by Glowstar Labs
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
