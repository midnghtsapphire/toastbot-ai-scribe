
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (user: any) => void;
}

const AuthModal = ({ isOpen, onClose, onSuccess }: AuthModalProps) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSuccess = (user: any) => {
    onSuccess(user);
    onClose();
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="bg-black/50" />
      <DialogContent className="p-0 border-0 bg-transparent">
        {isLogin ? (
          <LoginForm onToggleMode={toggleMode} onSuccess={handleSuccess} />
        ) : (
          <RegisterForm onToggleMode={toggleMode} onSuccess={handleSuccess} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
