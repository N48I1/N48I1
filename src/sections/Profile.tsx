import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Profile: React.FC = () => {
  return (
    <Card className="mb-8 border-b border-hacker-border pb-4">
      <CardHeader>
        <CardTitle className="text-3xl">Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-hacker-text font-sans text-left leading-relaxed">
          I'm a second-year Engineering student in Network and Computer Security at ENIAD Berkane, passionate
          about solving real world challenges, cybersecurity, system administration, and networking. I've built robust
          intrusion detection systems, secured SDN ecosystems with IOTA 2.0 smart contracts, and developed machine
          learning/deep learning models including earthquake prediction. Driven by curiosity and a commitment to impact,
          I'm eager to secure a PFA (Final-Year Internship) where I can apply my technical expertise, teamwork, and
          innovative mindset to real world challenges.
        </p>
      </CardContent>
    </Card>
  );
};

export default Profile;

