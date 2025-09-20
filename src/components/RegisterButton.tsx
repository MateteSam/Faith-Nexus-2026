import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface RegisterButtonProps {
  variant?: 'default' | 'outline' | 'secondary';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
  text?: string;
}

export const RegisterButton = ({ 
  variant = 'default', 
  size = 'default', 
  className = '',
  text = 'Register Now'
}: RegisterButtonProps) => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <Button
      onClick={handleRegisterClick}
      variant={variant}
      size={size}
      className={`group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary/30 ${className}`}
    >
      <Calendar className="w-4 h-4 mr-2" />
      {text}
      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
    </Button>
  );
};