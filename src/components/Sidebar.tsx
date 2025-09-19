import { Plus, FileText, Video, Wrench, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const stats = {
    posts: 24,
    views: "1.2K",
    likes: 156
  };

  const categories = [
    { icon: FileText, label: "Article" },
    { icon: Video, label: "Video" },
    { icon: Wrench, label: "Tool" },
    { icon: BookOpen, label: "Course" }
  ];

  return (
    <div className={`w-64 ${className} animate-slide-up`}>
      <Card className="mb-6 hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
        <CardContent className="p-6">
          <Button className="w-full mb-6 bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
            <Plus className="w-4 h-4 mr-2 transition-transform hover:rotate-180" />
            Share Resource
          </Button>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button 
                  key={category.label} 
                  variant="ghost" 
                  className="flex flex-col p-4 h-auto hover:bg-accent/50 transition-all duration-300 hover:scale-105 group/category"
                >
                  <Icon className="w-5 h-5 mb-2 text-muted-foreground group-hover/category:text-primary transition-colors duration-300 group-hover/category:scale-110" />
                  <span className="text-sm text-muted-foreground group-hover/category:text-primary transition-colors duration-300">{category.label}</span>
                </Button>
              );
            })}
          </div>

          <div className="space-y-4">
            <div className="text-center group/stat cursor-pointer hover:bg-accent/20 rounded-lg py-2 transition-all duration-300">
              <div className="text-2xl font-bold text-primary group-hover/stat:scale-110 transition-transform duration-300">{stats.posts}</div>
              <div className="text-sm text-muted-foreground group-hover/stat:text-primary transition-colors duration-300">Posts</div>
            </div>
            <div className="text-center group/stat cursor-pointer hover:bg-accent/20 rounded-lg py-2 transition-all duration-300">
              <div className="text-2xl font-bold text-primary group-hover/stat:scale-110 transition-transform duration-300">{stats.views}</div>
              <div className="text-sm text-muted-foreground group-hover/stat:text-primary transition-colors duration-300">Views</div>
            </div>
            <div className="text-center group/stat cursor-pointer hover:bg-accent/20 rounded-lg py-2 transition-all duration-300">
              <div className="text-2xl font-bold text-primary group-hover/stat:scale-110 transition-transform duration-300">{stats.likes}</div>
              <div className="text-sm text-muted-foreground group-hover/stat:text-primary transition-colors duration-300">Likes</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};