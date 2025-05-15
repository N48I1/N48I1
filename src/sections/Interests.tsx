import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const interestsData = [
  "Cybersecurity and Network Defense",
  "Linux enthusiast",
  "CTF challenges",
  "Ethical hacking"
];

const Interests: React.FC = () => {
  return (
    <Card className="mb-8 border-b border-hacker-border pb-4">
      <CardHeader>
        <CardTitle className="text-3xl">Interests</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-3 font-sans">
        {interestsData.map((interest, index) => (
          <Badge 
            key={index} 
            variant="outline"
            className="text-sm border-hacker-purple text-hacker-purple px-3 py-1 font-mono transition-colors duration-200 hover:bg-hacker-purple hover:text-white"
          >
            {interest}
          </Badge>
        ))}
      </CardContent>
    </Card>
  );
};

export default Interests;

