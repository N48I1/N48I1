import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
  {
    id: 1,
    title: "Currently Learning Solidity for Smart Contract Development",
    date: "June 2024",
    excerpt: "Diving into Solidity to build secure and efficient smart contracts, expanding my expertise in blockchain development and decentralized applications.",
    tags: ["Solidity", "Smart Contracts", "Blockchain", "Learning"]
  },
  {
    id: 2,
    title: "Exploring Wazuh for Security Monitoring and SIEM",
    date: "June 2024",
    excerpt: "Studying Wazuh to enhance my skills in security monitoring, threat detection, and SIEM solutions for modern IT environments.",
    tags: ["Wazuh", "Security", "SIEM", "Learning"]
  },
];

const Blog: React.FC = () => {
  return (
    <Card className="mb-8 border-b border-hacker-border pb-4">
      <CardHeader>
        <CardTitle className="text-3xl">Recent Achievements & Blog</CardTitle>
        <CardDescription className="text-hacker-muted-text font-sans mt-1">Updates on certifications, learning, and projects.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 font-sans">
        {blogPosts.map((post) => (
          <div key={post.id} className="border-b border-hacker-border/50 pb-4 last:border-b-0 last:pb-0">
            <h3 className="text-xl font-mono text-hacker-blue mb-1 transition-colors duration-200 hover:text-hacker-green cursor-pointer">
              {post.title}
            </h3>
            <p className="text-xs text-hacker-muted-text mb-2 font-mono">{post.date}</p>
            <p className="text-sm text-hacker-text mb-3 text-left leading-relaxed">{post.excerpt}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {post.tags.map(tag => (
                <Badge 
                  key={tag} 
                  variant="outline"
                  className="text-xs border-hacker-blue text-hacker-blue cursor-text transition-colors duration-200 hover:bg-hacker-blue hover:text-white font-mono"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Blog;

