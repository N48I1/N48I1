import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const organizationsData = [
  {
    role: "Online Instructor – Introduction to Bash (Linux)",
    platform: "Platform: Google Classroom",
    description: "Designed and delivered an online course covering fundamental Linux concepts and shell scripting using Bash. Led virtual sessions, and provided hands on exercises to help students master Linux command line operations."
  },
  {
    role: "In-School Instructor – Introduction to Git and GitHub",
    platform: "Institution: National School of Artificial Intelligence and Digital at Berkane (ENIADB)",
    description: "Taught a comprehensive course on version control using Git and GitHub. Organized in person workshops, guided students through real world collaborative coding projects to enhance their understanding of distributed version control systems."
  }
];

const Organizations: React.FC = () => {
  return (
    <Card className="mb-8 border-b border-hacker-border pb-4">
      <CardHeader>
        <CardTitle className="text-3xl">Organizations & Activities</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 font-sans">
        {organizationsData.map((org, index) => (
          <div key={index} className="border-b border-hacker-border/50 pb-4 last:border-b-0 last:pb-0">
            <h3 className="text-xl font-mono text-hacker-blue mb-1">{org.role}</h3>
            <p className="text-sm text-hacker-muted-text mb-1 font-mono">{org.platform}</p>
            <p className="text-sm text-hacker-text text-left leading-relaxed">{org.description}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Organizations;

