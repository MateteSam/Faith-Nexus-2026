import { useState } from 'react';
import { ChevronDown, Plane, FileText, Bed } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Link } from 'react-router-dom';

interface HospitalityDropdownProps {
  isMobile?: boolean;
  onClose?: () => void;
}

export const HospitalityDropdown = ({ isMobile = false, onClose }: HospitalityDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = () => {
    setIsOpen(false);
    onClose?.();
  };

  const items = [
    { label: 'VISA Application', icon: FileText, to: '/hospitality/visa' },
    { label: 'Flight Bookings', icon: Plane, to: '/hospitality/flights' },
    { label: 'Accommodation', icon: Bed, to: '/hospitality/accommodation' },
  ];

  if (isMobile) {
    return (
      <div className="space-y-1">
        <div className="px-3 py-2 text-base font-medium text-blue-100">
          Hospitality
        </div>
        {items.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            onClick={handleItemClick}
            className="block px-6 py-2 text-sm text-blue-100 hover:bg-blue-500/50 rounded-md ml-4"
          >
            <div className="flex items-center gap-2">
              <item.icon className="w-4 h-4" />
              {item.label}
            </div>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger className="px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 hover:bg-blue-500/50 text-blue-100 flex items-center gap-1">
        Hospitality
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-card border border-border shadow-lg rounded-lg p-1 z-50">
        {items.map((item) => (
          <DropdownMenuItem key={item.label} asChild>
            <Link
              to={item.to}
              onClick={handleItemClick}
              className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};