
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
            <div className="flex items-center justify-center gap-4 mb-4">
              <img 
                src="https://images.app.goo.gl/yzSYM5pHaD4fGYuu7" 
                alt="Marriage Toast"
                className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full shadow-lg"
              />
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-800 dark:text-white">
                ToastBot
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              AI-powered wedding toast generator with speech coaching, analytics, and practice tools.
            </p>
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
