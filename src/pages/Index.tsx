import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { PostCard } from "@/components/PostCard";
import { RightSidebar } from "@/components/RightSidebar";
import { SortDropdown } from "@/components/SortDropdown";
import { posts, Post } from "@/data/posts";

const Index = () => {
  const [sortBy, setSortBy] = useState("newest");

  const sortedPosts = [...posts].sort((a: Post, b: Post) => {
    switch (sortBy) {
      case "newest":
        return b.createdAt.getTime() - a.createdAt.getTime();
      case "oldest":
        return a.createdAt.getTime() - b.createdAt.getTime();
      case "mostLiked":
        return b.engagement.likes - a.engagement.likes;
      case "offering":
        return a.type === "offering" ? -1 : 1;
      case "requesting":
        return a.type === "requesting" ? -1 : 1;
      default:
        return 0;
    }
  }).filter(post => {
    if (sortBy === "offering") return post.type === "offering";
    if (sortBy === "requesting") return post.type === "requesting";
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto flex gap-6 p-6">
        {/* Left Sidebar */}
        <Sidebar className="shrink-0" />

        {/* Main Content */}
        <div className="flex-1 max-w-2xl">
          {/* Header */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Discover Resources</h1>
            <p className="text-muted-foreground mb-4">Find and share amazing community initiatives</p>
            <SortDropdown currentSort={sortBy} onSortChange={setSortBy} />
          </div>

          {/* Posts Feed */}
          <div>
            {sortedPosts.map((post, index) => (
              <div 
                key={post.id} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <PostCard post={post} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <RightSidebar />
      </div>
    </div>
  );
};

export default Index;
