import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const languagesData = [
  { name: "FRANCAIS", proficiency: "Professional Working Proficiency" },
  { name: "ANGLAIS", proficiency: "Professional Working Proficiency" },
  { name: "ARABIC", proficiency: "Native" },
];

const Languages: React.FC = () => {
  return (
    <Card className="mb-8 border-b border-hacker-border pb-4">
      <CardHeader>
        <CardTitle className="text-3xl">Languages</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-3 font-sans">
        {languagesData.map((lang, index) => (
          <Badge 
            key={index} 
            variant="outline"
            className="text-sm border-hacker-blue text-hacker-blue px-3 py-1 font-mono transition-colors duration-200 hover:bg-hacker-blue hover:text-white"
          >
            {lang.name}: {lang.proficiency}
          </Badge>
        ))}
      </CardContent>
    </Card>
  );
};

export default Languages;

