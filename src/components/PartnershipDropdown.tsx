import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Building, Church, Wrench } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface PartnershipDropdownProps {
  isMobile?: boolean;
  onClose?: () => void;
}

export const PartnershipDropdown = ({ isMobile = false, onClose }: PartnershipDropdownProps) => {
  const [open, setOpen] = useState(false);

  const handleItemClick = () => {
    setOpen(false);
    onClose?.();
  };

  const partnershipItems = [
    {
      title: 'Corporate Partnership',
      href: '/partnership/corporate',
      icon: Building,
      description: 'Business and corporate sponsorship opportunities'
    },
    {
      title: 'Church Partnership',
      href: '/partnership/church',
      icon: Church,
      description: 'Partner with churches and denominations'
    },
    {
      title: 'Technical Partnership',
      href: '/partnership/technical',
      icon: Wrench,
      description: 'In-kind technical support and services'
    }
  ];

  if (isMobile) {
    return (
      <div className="space-y-2">
        {partnershipItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              to={item.href}
              onClick={handleItemClick}
              className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:text-primary hover:bg-accent rounded-lg transition-colors"
            >
              <Icon className="h-5 w-5" />
              <div>
                <span className="font-medium">{item.title}</span>
                <p className="text-sm text-muted-foreground/80">{item.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className="flex items-center gap-2 px-4 py-2 text-muted-foreground hover:text-primary transition-colors bg-background hover:bg-accent rounded-md border">
        Partnership Types
        <ChevronDown className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-80 bg-background border-border">
        {partnershipItems.map((item) => {
          const Icon = item.icon;
          return (
            <DropdownMenuItem key={item.href} asChild className="p-0">
              <Link
                to={item.href}
                onClick={handleItemClick}
                className="flex items-start gap-3 p-4 hover:bg-accent transition-colors cursor-pointer"
              >
                <Icon className="h-5 w-5 mt-0.5 text-primary" />
                <div className="space-y-1">
                  <p className="font-medium text-foreground">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};