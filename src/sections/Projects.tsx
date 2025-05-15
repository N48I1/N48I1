import React, { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projectsData = [
  {
    title: "IOTASDN – IOTA 2.0 Smart Contracts for Securing SDN Ecosystem",
    description: "Enhancing Software-Defined Networking (SDN) security using IOTA 2.0 smart contracts for scalability, efficiency, and protection against cyber threats.",
    details: [
      "Smart Contract Implementation: Developed smart contracts for access control, authority management, and DoS detection.",
      "System Simulation: Simulated and tested the system using Mininet and iotaEVM to validate performance and security."
    ],
    tags: ["Blockchain", "IOTA", "Smart Contracts", "SDN", "Security", "Mininet"]
  },
  {
    title: "NETWORK INTRUSION DETECTION SYSTEM (NIDS)",
    description: "Team-based project developing an open-source NIDS for real-time threat detection.",
    details: [
      "Key Technologies:",
      "Suricata: Configured for deep packet inspection and intrusion detection.",
      "Zeek (formerly Bro): Deployed for network security monitoring and log analysis.",
      "Elastic Stack (Elasticsearch, Kibana, Filebeat): Integrated for real-time log analysis and security dashboards."
    ],
    tags: ["Security", "NIDS", "Suricata", "Zeek", "Elastic Stack", "Networking"]
  },
  {
    title: "EARTHQUAKE MAGNITUDE PREDICTION (Machine Learning)",
    description: "Developed regression models using Scikit-Learn to predict earthquake magnitudes based on seismic data.",
    details: [
      "Data Handling: Employed Pandas and NumPy for data preprocessing and EDA.",
      "Model Selection & Tuning: Utilized grid search, RandomForest, and Gradient Boosting.",
      "Visualization: Leveraged Matplotlib for model performance evaluation."
    ],
    tags: ["Machine Learning", "Python", "Scikit-learn", "Pandas", "NumPy", "Data Analysis", "Regression"]
  },
  {
    title: "AGRICULTURAL MONITORING SYSTEM – MQTT & TLS (ThingsBoard + ESP32)",
    description: "IoT-based smart farming solution developed in a team using ESP32 and ThingsBoard.",
    details: [
      "ESP32 & soil sensors for real-time data collection.",
      "ThingsBoard & MQTT over TLS for secure communication.",
      "Strong authentication & encryption for data protection."
    ],
    tags: ["IoT", "ESP32", "MQTT", "TLS", "ThingsBoard", "Security", "Sensors"]
  }
];

const allTags = Array.from(new Set(projectsData.flatMap(p => p.tags)));

const Projects: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    if (!selectedTag) {
      return projectsData;
    }
    return projectsData.filter(project => project.tags.includes(selectedTag));
  }, [selectedTag]);

  return (
    <Card className="mb-8 border-b border-hacker-border pb-4">
      <CardHeader>
        <CardTitle className="text-3xl">Projects</CardTitle>
        <CardDescription className="text-hacker-muted-text font-sans mt-1">Click on a tag to filter projects.</CardDescription>
        <div className="flex flex-wrap gap-2 pt-4">
          <Button
            variant={!selectedTag ? "secondary" : "outline"}
            size="sm"
            onClick={() => setSelectedTag(null)}
            className={`font-mono transition-colors duration-200 ${!selectedTag ? "bg-hacker-green text-hacker-dark hover:bg-hacker-blue hover:text-white" : "border-hacker-blue text-hacker-blue hover:bg-hacker-blue hover:text-white"}`}
          >
            All Projects
          </Button>
          {allTags.map(tag => (
            <Button
              key={tag}
              variant={selectedTag === tag ? "secondary" : "outline"}
              size="sm"
              onClick={() => setSelectedTag(tag)}
              className={`font-mono transition-colors duration-200 ${selectedTag === tag ? "bg-hacker-green text-hacker-dark hover:bg-hacker-blue hover:text-white" : "border-hacker-blue text-hacker-blue hover:bg-hacker-blue hover:text-white"}`}
            >
              {tag}
            </Button>
          ))}
        </div>
      </CardHeader>
      <CardContent className="grid gap-6 md:grid-cols-2 font-sans">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="flex flex-col bg-hacker-card border border-hacker-border transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-hacker-green/20 hover:border-hacker-green hover:scale-[1.02] p-1"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-hacker-green font-mono">{project.title}</CardTitle>
                <CardDescription className="text-hacker-muted-text mt-1 text-sm">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow pt-0">
                <ul className="list-disc pl-5 space-y-1 text-sm text-hacker-muted-text mb-4">
                  {project.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <Badge 
                      key={tag} 
                      variant="outline"
                      className="text-xs border-hacker-blue text-hacker-blue cursor-pointer transition-colors duration-200 hover:bg-hacker-blue hover:text-white font-mono"
                      onClick={() => setSelectedTag(tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-hacker-muted-text col-span-full text-center py-8">No projects found matching the selected tag.</p>
        )}
      </CardContent>
    </Card>
  );
};

export default Projects;

