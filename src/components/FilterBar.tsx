
import React from 'react';
import { Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuCheckboxItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { serverCategories, ServerCategory } from '@/data/servers';

interface FilterBarProps {
  search: string;
  setSearch: (search: string) => void;
  selectedCategories: ServerCategory[];
  setSelectedCategories: (categories: ServerCategory[]) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ search, setSearch, selectedCategories, setSelectedCategories }) => {
  const handleCategoryToggle = (category: ServerCategory) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="sticky top-[61px] z-40 py-3 px-4 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto flex flex-col md:flex-row gap-3 items-center">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
          <Input
            placeholder="Search servers by name, address, or description..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 border-gray-300 focus:border-minecraft-grass focus:ring-minecraft-grass/30"
          />
        </div>
        
        <div className="flex gap-2 flex-shrink-0 w-full md:w-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span>Categories</span>
                {selectedCategories.length > 0 && (
                  <span className="ml-1 rounded-full bg-minecraft-grass text-white text-xs w-5 h-5 flex items-center justify-center">
                    {selectedCategories.length}
                  </span>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Filter by category</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {serverCategories.map((category) => (
                <DropdownMenuCheckboxItem
                  key={category}
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={() => handleCategoryToggle(category)}
                >
                  {category}
                </DropdownMenuCheckboxItem>
              ))}
              {selectedCategories.length > 0 && (
                <>
                  <DropdownMenuSeparator />
                  <div className="px-2 py-1.5">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full text-xs"
                      onClick={() => setSelectedCategories([])}
                    >
                      Clear Filters
                    </Button>
                  </div>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button 
            variant="outline"
            className="bg-minecraft-dirt/80 text-white border-minecraft-dirt hover:bg-minecraft-dirt hidden md:flex"
          >
            Random Server
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
