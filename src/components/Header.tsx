
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
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <div className="text-center flex-1">
            {/* Main header with church logo */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <img 
                src="/lovable-uploads/3c477d25-bdb4-4b66-a8d7-f90392a5f66c.png" 
                alt="EverUnity Church Logo"
                className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-full shadow-lg border-2 border-yellow-400"
              />
              <div className="text-center">
                <h1 className="text-3xl md:text-5xl font-serif font-bold text-yellow-800 dark:text-yellow-100">
                  WeddingToastBot
                </h1>
                <p className="text-sm md:text-base text-yellow-700 dark:text-yellow-200 font-medium">
                  Lovingly provided by EverUnity Church
                </p>
                <p className="text-xs md:text-sm text-yellow-600 dark:text-yellow-300">
                  Powered by Glowstar Labs
                </p>
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-yellow-700 dark:text-yellow-200 max-w-2xl mx-auto mb-6">
              AI-powered wedding toast generator with speech coaching, analytics, and practice tools.
            </p>

            {/* Additional inspiration images */}
            <div className="flex justify-center items-center gap-4 mb-2">
              <span className="text-sm text-yellow-600 dark:text-yellow-300 font-medium">Get inspired by:</span>
            </div>
            <div className="flex justify-center items-center gap-3">
              <img 
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=200&h=200&fit=crop&crop=center" 
                alt="Marriage Toast Inspiration"
                className="w-12 h-12 object-cover rounded-full shadow-md border border-yellow-300 hover:scale-105 transition-transform"
              />
              <img 
                src="https://images.unsplash.com/photo-1464207687429-7505649dae38?w=200&h=200&fit=crop&crop=center" 
                alt="Wedding Celebration Toast"
                className="w-12 h-12 object-cover rounded-full shadow-md border border-yellow-300 hover:scale-105 transition-transform"
              />
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop&crop=center" 
                alt="Two Champagne Glasses Toasting"
                className="w-12 h-12 object-cover rounded-full shadow-md border border-yellow-300 hover:scale-105 transition-transform"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            {user ? (
              <div className="flex items-center gap-3">
                <div className="text-right">
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
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <Button
                onClick={onShowAuthModal}
                className="bg-yellow-600 hover:bg-yellow-700 text-white"
              >
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
