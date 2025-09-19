import { Heart, MessageCircle, Share2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PostCardProps {
  post: {
    id: string;
    author: {
      name: string;
      username: string;
      avatar: string;
    };
    timestamp: string;
    content: string;
    image?: string;
    resource?: {
      type: string;
      title: string;
      description: string;
      url: string;
    };
    engagement: {
      likes: number;
      comments: number;
      shares: number;
    };
  };
}

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <Card className="mb-6 hover-lift animate-fade-in cursor-pointer group border-0 shadow-sm hover:shadow-md transition-all duration-300">
      <CardContent className="p-6">
        {/* Author Header */}
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold mr-3 transition-transform duration-300 group-hover:scale-110 hover:shadow-lg hover:shadow-primary/20">
            {post.author.avatar}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold">{post.author.name}</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-muted-foreground text-sm">{post.timestamp}</span>
            </div>
            <div className="text-sm text-muted-foreground">@{post.author.username}</div>
          </div>
        </div>

        {/* Content */}
        <div className="mb-4">
          <p className="text-foreground leading-relaxed">{post.content}</p>
        </div>

        {/* Image */}
        {post.image && (
          <div className="mb-4 rounded-lg overflow-hidden group-hover:shadow-lg transition-shadow duration-300">
            <img 
              src={post.image} 
              alt="Post image" 
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}

        {/* Resource Card */}
        {post.resource && (
          <Card className="mb-4 border-l-4 border-l-primary hover:border-l-accent transition-all duration-300 hover:shadow-md group/resource">
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <Badge variant="secondary" className="mb-2">
                    {post.resource.type}
                  </Badge>
                  <h4 className="font-semibold mb-1">{post.resource.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    {post.resource.description}
                  </p>
                  <div className="text-sm text-primary">{post.resource.url}</div>
                </div>
                <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105">
                  <ExternalLink className="w-4 h-4 mr-2 transition-transform group/resource-hover:rotate-12" />
                  View
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Engagement */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center gap-6">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-red-500 transition-all duration-300 hover:scale-110 group/like">
              <Heart className="w-4 h-4 mr-2 transition-transform group-hover/like:scale-125" />
              {post.engagement.likes}
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
              <MessageCircle className="w-4 h-4 mr-2 transition-transform hover:rotate-12" />
              {post.engagement.comments}
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
              <Share2 className="w-4 h-4 mr-2 transition-transform hover:rotate-12" />
              {post.engagement.shares}
            </Button>
          </div>
          <div className="flex items-center">
            <span className="text-sm font-medium text-primary">{post.engagement.likes}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};