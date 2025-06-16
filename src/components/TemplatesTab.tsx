
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, User } from 'lucide-react';

interface TemplatesTabProps {
  onRoleSelect: (role: string) => void;
}

const TemplatesTab = ({ onRoleSelect }: TemplatesTabProps) => {
  const roles = [
    { value: 'best-man', label: 'Best Man', icon: User },
    { value: 'maid-of-honor', label: 'Maid of Honor', icon: Users },
    { value: 'father-bride', label: 'Father of the Bride', icon: Users },
    { value: 'mother-bride', label: 'Mother of the Bride', icon: Users },
    { value: 'sibling', label: 'Sibling', icon: Users },
    { value: 'friend', label: 'Friend', icon: User },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {roles.map((role) => {
        const Icon = role.icon;
        return (
          <Card key={role.value} className="shadow-lg border-amber-100 hover:shadow-xl transition-shadow">
            <CardHeader className="bg-gradient-to-r from-amber-50 to-amber-100">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Icon className="h-5 w-5 text-amber-600" />
                {role.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-gray-600 text-sm mb-4">
                Specialized template for {role.label.toLowerCase()} speeches with appropriate tone and structure.
              </p>
              <Button
                onClick={() => onRoleSelect(role.value)}
                variant="outline"
                size="sm"
                className="w-full hover:bg-amber-50"
              >
                Use This Template
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default TemplatesTab;
