
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, LogOut } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useToast } from "@/hooks/use-toast";

interface HeaderProps {
  user: any;
  onShowAuthModal: () => void;
}

const Header = ({ user, onShowAuthModal }: HeaderProps) => {
  const { toast } = useToast();

  const handleLogout = () => {
    localStorage.removeItem('toastbot_user');
    window.location.reload();
    toast({
      title: "Logged out",
      description: "You've been successfully logged out.",
    });
  };

  return (
    <div className="bg-gradient-to-r from-yellow-100 to-yellow-50 dark:from-yellow-900 dark:to-yellow-800 border-b border-yellow-200 dark:border-yellow-600">
      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="text-center flex-1 w-full">
            {/* Main header with church logo */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-3 sm:mb-4">
              <img 
                src="/lovable-uploads/3c477d25-bdb4-4b66-a8d7-f90392a5f66c.png" 
                alt="EverUnity Church Logo"
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover rounded-full shadow-lg border-2 border-yellow-400 flex-shrink-0"
              />
              <div className="text-center">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-yellow-800 dark:text-yellow-100 leading-tight">
                  WeddingToastBot
                </h1>
                <p className="text-xs sm:text-sm md:text-base text-yellow-700 dark:text-yellow-200 font-medium">
                  Lovingly provided by EverUnity Church
                </p>
                <p className="text-xs md:text-sm text-yellow-600 dark:text-yellow-300">
                  Powered by Glowstar Labs
                </p>
              </div>
            </div>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-yellow-700 dark:text-yellow-200 max-w-2xl mx-auto mb-4 sm:mb-6 px-2">
              AI-powered wedding toast generator with speech coaching, analytics, and practice tools.
            </p>

            {/* Additional inspiration images */}
            <div className="flex justify-center items-center gap-2 mb-2">
              <span className="text-xs sm:text-sm text-yellow-600 dark:text-yellow-300 font-medium">Get inspired by:</span>
            </div>
            <div className="flex justify-center items-center gap-2 sm:gap-3">
              <img 
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=200&h=200&fit=crop&crop=center" 
                alt="Marriage Toast Inspiration"
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-cover rounded-full shadow-md border border-yellow-300 hover:scale-105 transition-transform"
              />
              <img 
                src="https://images.unsplash.com/photo-1464207687429-7505649dae38?w=200&h=200&fit=crop&crop=center" 
                alt="Wedding Celebration Toast"
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-cover rounded-full shadow-md border border-yellow-300 hover:scale-105 transition-transform"
              />
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop&crop=center" 
                alt="Two Champagne Glasses Toasting"
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-cover rounded-full shadow-md border border-yellow-300 hover:scale-105 transition-transform"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4 w-full lg:w-auto justify-center lg:justify-end">
            <ThemeToggle />
            {user ? (
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-medium text-yellow-800 dark:text-yellow-100">Welcome, {user.name}!</p>
                  {user.isPremium && (
                    <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-800">Premium</Badge>
                  )}
                </div>
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  size="sm"
                  className="border-yellow-400 hover:bg-yellow-100 text-yellow-800 hover:text-yellow-900"
                >
                  <LogOut className="h-4 w-4 sm:mr-2" />
                  <span className="hidden sm:inline">Logout</span>
                </Button>
              </div>
            ) : (
              <Button
                onClick={onShowAuthModal}
                className="bg-yellow-600 hover:bg-yellow-700 text-white"
                size="sm"
              >
                <User className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Sign In</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
