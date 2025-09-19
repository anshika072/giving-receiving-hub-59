import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SortDropdownProps {
  currentSort: string;
  onSortChange: (sort: string) => void;
}

export const SortDropdown = ({ currentSort, onSortChange }: SortDropdownProps) => {
  const sortOptions = [
    { value: "newest", label: "Newest First" },
    { value: "oldest", label: "Oldest First" },
    { value: "mostLiked", label: "Most Liked" },
    { value: "offering", label: "Donations Only" },
    { value: "requesting", label: "Requests Only" }
  ];

  const currentOption = sortOptions.find(option => option.value === currentSort);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="bg-background hover:bg-accent transition-all duration-300 hover:scale-105 group">
          {currentOption?.label || "Sort by"}
          <ChevronDown className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:rotate-180" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 bg-popover border border-border animate-scale-in shadow-lg">
        {sortOptions.map((option, index) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => onSortChange(option.value)}
            className="cursor-pointer hover:bg-accent transition-all duration-200 hover:scale-105 animate-fade-in"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};