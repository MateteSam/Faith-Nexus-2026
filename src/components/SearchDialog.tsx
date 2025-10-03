import React, { useState, useEffect, useCallback } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
}

// Dummy data for demonstration. In a real application, this would be generated from your content.
const allContent: SearchResult[] = [
  { id: 'home', title: 'Home', description: 'Welcome to Faith Nexus', url: '/', category: 'Page' },
  { id: 'faith-nexus', title: 'About Faith Nexus', description: 'Learn about our mission and vision.', url: '/faith-nexus', category: 'Page' },
  { id: 'programme', title: 'Programme', description: 'View the event schedule and speakers.', url: '/programme', category: 'Page' },
  { id: 'partnership', title: 'Partnerships', description: 'Explore corporate, church, and technical partnership opportunities.', url: '/partnership', category: 'Page' },
  { id: 'faqs', title: 'Frequently Asked Questions', description: 'Find answers to common questions about Faith Nexus.', url: '/faqs', category: 'Page' },
  { id: 'register', title: 'Register Now', description: 'Secure your spot for Faith Nexus.', url: '/register', category: 'Page' },
  { id: 'visa', title: 'Visa Support', description: 'Information on visa applications for international attendees.', url: '/hospitality/visa', category: 'Hospitality' },
  { id: 'flights', title: 'Flight Information', description: 'Guidance on travel and flights to the event.', url: '/hospitality/flights', category: 'Hospitality' },
  { id: 'accommodation', title: 'Accommodation Options', description: 'Details on lodging near the event venue.', url: '/hospitality/accommodation', category: 'Hospitality' },
  { id: 'corporate-partnership', title: 'Corporate Partnership', description: 'Partner with us as a corporate sponsor.', url: '/partnership/corporate', category: 'Partnership' },
  { id: 'church-partnership', title: 'Church Partnership', description: 'Join as a church partner for Faith Nexus.', url: '/partnership/church', category: 'Partnership' },
  { id: 'technical-partnership', title: 'Technical Partnership', description: 'Collaborate as a technical partner.', url: '/partnership/technical', category: 'Partnership' },
  // Add more content here from other pages, e.g., programme details, speaker bios, etc.
  { id: 'day1-theme', title: 'Day 1 Theme: Equip Voices with Tools', description: 'The Great Commission Meets the Algorithm.', url: '/programme', category: 'Programme Detail' },
  { id: 'day1-morning', title: 'Day 1 Morning Plenary', description: 'Keynotes and panels on digital discipleship.', url: '/programme', category: 'Programme Detail' },
  { id: 'day1-afternoon', title: 'Day 1 Afternoon Pillar Labs', description: 'Practical tracks for media, business, education, and arts.', url: '/programme', category: 'Programme Detail' },
];

export const SearchDialog: React.FC<SearchDialogProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const handleSearch = useCallback((query: string) => {
    if (!query) {
      setSearchResults([]);
      return;
    }
    const lowerCaseQuery = query.toLowerCase();
    const filteredResults = allContent.filter(item =>
      item.title.toLowerCase().includes(lowerCaseQuery) ||
      item.description.toLowerCase().includes(lowerCaseQuery) ||
      item.category.toLowerCase().includes(lowerCaseQuery)
    );
    setSearchResults(filteredResults);
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      handleSearch(searchTerm);
    }, 300); // Debounce search to avoid excessive re-renders

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, handleSearch]);

  useEffect(() => {
    if (isOpen) {
      setSearchTerm('');
      setSearchResults([]);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] md:max-w-2xl lg:max-w-3xl h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Search className="h-5 w-5 text-primary" />
            Search Faith Nexus
          </DialogTitle>
          <DialogDescription>
            Find information across the website.
          </DialogDescription>
        </DialogHeader>
        <div className="relative mt-4">
          <Input
            type="text"
            placeholder="Search for pages, topics, or keywords..."
            className="pl-10 pr-4 py-2 rounded-md border border-input focus-visible:ring-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>

        <div className="flex-1 overflow-y-auto mt-4 space-y-3">
          {searchTerm.length > 0 && searchResults.length === 0 && (
            <p className="text-center text-muted-foreground">No results found for "{searchTerm}".</p>
          )}
          {searchResults.map((result) => (
            <Link
              key={result.id}
              to={result.url}
              onClick={onClose}
              className="block p-4 border rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <h3 className="text-lg font-semibold text-primary">{result.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{result.description}</p>
              <span className="text-xs text-gray-500 mt-2 block">Category: {result.category}</span>
            </Link>
          ))}
        </div>

        <div className="mt-4 text-right">
          <Button variant="ghost" onClick={onClose}>
            <X className="h-4 w-4 mr-2" /> Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};