import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const educationData = [
  {
    years: "2023 – present",
    degree: "Engineering Degree in Network and Computer Security",
    institution: "National School of Artificial Intelligence and Digital (ENIAD) Berkane"
  },
  {
    years: "2021 – 2023",
    degree: "DEUST in Mathematics, Computer Science, and Physics (MIP)",
    institution: "Faculty of Science and Technology, Al Hoceima"
  }
];

const Education: React.FC = () => {
  return (
    <Card className="mb-8 border-b border-hacker-border pb-4">
      <CardHeader>
        <CardTitle className="text-3xl">Education</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 font-sans">
        {educationData.map((edu, index) => (
          <div key={index} className="border-b border-hacker-border/50 pb-4 last:border-b-0 last:pb-0">
            <div className="flex flex-col sm:flex-row justify-between sm:items-start">
              <div>
                <h3 className="text-xl font-mono text-hacker-blue mb-1">{edu.degree}</h3>
                <p className="text-sm text-hacker-muted-text">{edu.institution}</p>
              </div>
              <p className="text-sm text-hacker-muted-text mt-1 sm:mt-0 text-left sm:text-right font-mono pt-1 sm:pt-0">
                {edu.years}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Education;

