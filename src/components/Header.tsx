
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
    <div className="bg-gradient-to-r from-amber-100 to-amber-50 dark:from-gray-800 dark:to-gray-700 border-b border-amber-200 dark:border-gray-600">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <div className="text-center flex-1">
            {/* Main header with primary image */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <img 
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop&crop=center" 
                alt="Wedding Toast Celebration"
                className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-full shadow-lg border-2 border-amber-200"
              />
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-800 dark:text-white">
                ToastBot
              </h1>
            </div>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
              AI-powered wedding toast generator with speech coaching, analytics, and practice tools.
            </p>

            {/* Additional inspiration images */}
            <div className="flex justify-center items-center gap-4 mb-2">
              <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">Get inspired by:</span>
            </div>
            <div className="flex justify-center items-center gap-3">
              <img 
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=200&h=200&fit=crop&crop=center" 
                alt="Marriage Toast Inspiration"
                className="w-12 h-12 object-cover rounded-full shadow-md border border-amber-100 hover:scale-105 transition-transform"
              />
              <img 
                src="https://images.unsplash.com/photo-1464207687429-7505649dae38?w=200&h=200&fit=crop&crop=center" 
                alt="Wedding Celebration Toast"
                className="w-12 h-12 object-cover rounded-full shadow-md border border-amber-100 hover:scale-105 transition-transform"
              />
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop&crop=center" 
                alt="Two Champagne Glasses Toasting"
                className="w-12 h-12 object-cover rounded-full shadow-md border border-amber-100 hover:scale-105 transition-transform"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            {user ? (
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-800 dark:text-white">Welcome, {user.name}!</p>
                  {user.isPremium && (
                    <Badge variant="secondary" className="text-xs">Premium</Badge>
                  )}
                </div>
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  size="sm"
                  className="border-amber-300 hover:bg-amber-50"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <Button
                onClick={onShowAuthModal}
                className="bg-amber-600 hover:bg-amber-700"
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
