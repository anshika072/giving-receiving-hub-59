import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const RightSidebar = () => {
  const trendingTopics = [
    "#FoodSecurity",
    "#ClothingDrive", 
    "#CommunitySupport",
    "#Volunteer",
    "#HelpLocal"
  ];

  const suggestions = [
    {
      name: "Local Food Bank",
      followers: "3.2K followers",
      avatar: "LFB"
    },
    {
      name: "Charity Connect",
      followers: "2.8K followers", 
      avatar: "CC"
    },
    {
      name: "Community Help",
      followers: "1.1K followers",
      avatar: "CH"
    }
  ];

  return (
    <div className="w-80 animate-slide-up" style={{ animationDelay: '0.2s' }}>
      <Card className="mb-6 hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg">Trending Topics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {trendingTopics.map((topic, index) => (
              <Badge 
                key={topic} 
                variant="secondary" 
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {topic}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg">Suggested for you</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {suggestions.map((suggestion, index) => (
            <div 
              key={suggestion.name} 
              className="flex items-center justify-between hover:bg-accent/30 p-2 rounded-lg transition-all duration-300 cursor-pointer group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold transition-transform duration-300 group-hover:scale-110 hover:shadow-lg hover:shadow-primary/20">
                  {suggestion.avatar}
                </div>
                <div>
                  <div className="font-medium group-hover:text-primary transition-colors duration-300">{suggestion.name}</div>
                  <div className="text-sm text-muted-foreground">{suggestion.followers}</div>
                </div>
              </div>
              <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105">
                Follow
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};