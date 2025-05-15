import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DynamicReactLogo from "@/components/DynamicReactLogo"; // Import the dynamic React logo

// Helper component to render logos alongside skill text
const SkillItem: React.FC<{ skill: string }> = ({ skill }) => {
  // Basic keyword to logo mapping (can be expanded)
  const logoMap: { [key: string]: string } = {
    react: "dynamic", // Special case for dynamic React logo
    "elastic stack": "/images/logos/elasticsearch.png", // Remove since SVG is invalid
    suricata: "/images/logos/suricata_logo.png", // Using actual png files
    zeek: "/images/logos/zeek_logo.png", // Using actual png files
    iota: "/images/logos/iota_logo.svg", // Added IOTA logo
    python: "/images/logos/python.png", // Now using provided PNG
    docker: "/images/logos/docker.png", // Now using provided PNG
    // Add more mappings here as logos are acquired
  };

  const renderLogo = (techName: string) => {
    const lowerTechName = techName.toLowerCase();
    if (lowerTechName.includes("react") && logoMap.react === "dynamic") {
      return <DynamicReactLogo />;
    }
    for (const keyword in logoMap) {
      if (lowerTechName.includes(keyword) && logoMap[keyword] !== "dynamic" && logoMap[keyword] !== "") {
        return <img src={logoMap[keyword]} alt={`${techName} logo`} className="h-6 w-6 inline-block ml-2" />;
      }
    }
    return null;
  };

  // Attempt to find a logo for the skill text
  // This is a simple match; might need more sophisticated parsing for multiple logos or complex skill descriptions
  let mainLogo = null;
  const skillLower = skill.toLowerCase();
  if (skillLower.includes("react")) {
    mainLogo = renderLogo("React");
  } else if (skillLower.includes("elastic stack")) {
    mainLogo = renderLogo("Elastic Stack");
  } else if (skillLower.includes("suricata")) {
    mainLogo = renderLogo("Suricata");
  } else if (skillLower.includes("zeek")) {
    mainLogo = renderLogo("Zeek");
  } else if (skillLower.includes("iota")) {
    mainLogo = renderLogo("IOTA");
  } else if (skillLower.includes("python")) {
    mainLogo = renderLogo("Python");
  } else if (skillLower.includes("docker")) {
    mainLogo = renderLogo("Docker");
  }
  // Removed Python and Docker since their logo files are not available

  return (
    <li className="flex items-center">
      <span>{skill}</span>
      {mainLogo}
    </li>
  );
};

const skillsData = {
  "Networking & Security": [
    "Blockchain & Smart Contracts: IOTA 2.0, IOTA Tangle, smart contract development for SDN security",
    "Intrusion Detection & Monitoring: Zeek (formerly Bro), Elastic Stack (Elasticsearch, Kibana, Filebeat)",
    "Protocols: TCP/IP, VLAN, VPN",
    "Security: Firewalls, IDS/IPS, penetration testing with Suricata, Wireshark",
    "Tools: Gns3, Cisco Packet Tracer, Wireshark",
  ],
  Development: [
    "Languages: Python, C++, Java (OOP)",
    "Web Development: Proficient in HTML, CSS, JavaScript, PHP; experienced with React for modern front-end frameworks.",
    "Databases: MySQL, Oracle SQL",
    "Version Control: Git, GitHub",
  ],
  "System Administration": [
    "Linux Administration: Shell scripting (Bash), user management, system security",
    "Virtualization & Containerization : VMware and Docker for deploying and managing virtual environments and applications.",
    "Windows Administration : PowerShell, service management, Group Policy",
  ],
  "Machine Learning & Data Analytics": [
    "ML Libraries & Tools: Scikit-learn, Pandas, NumPy, Matplotlib, and Seaborn for data visualization and analysis.",
    "Projects & Techniques: Development of data analysis, classification, and regression models; experience includes hyperparameter tuning (e.g., using grid search) and advanced ensemble methods (RandomForest, Gradient Boosting).",
    "Deep Learning: Familiarity with Keras and TensorFlow for developing deep learning models",
  ],
};

const Skills: React.FC = () => {
  return (
    <Card className="mb-8 border-b border-hacker-border pb-4">
      <CardHeader>
        <CardTitle className="text-3xl">Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full font-sans">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <AccordionItem value={`item-${index + 1}`} key={category} className="border-hacker-border">
              <AccordionTrigger className="text-lg font-mono text-hacker-blue hover:text-hacker-green transition-colors duration-200 py-4">
                {category}
              </AccordionTrigger>
              <AccordionContent className="text-hacker-muted-text text-left">
                <ul className="list-disc pl-6 space-y-2 py-2">
                  {skills.map((skill, skillIndex) => (
                    <SkillItem key={skillIndex} skill={skill} />
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default Skills;

