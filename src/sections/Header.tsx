import React from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Download } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const email = "n48i1elhilali@gmail.com";
  const phone = "+212648852024";
  const linkedin = "https://www.linkedin.com/in/nabil-el-hilali-712224237/";
  const github = "https://github.com/N48I1";
  const location = "Nador, Morocco";
  const resumePdfUrl = "/Nabil_El_Hilali_Resume.pdf";

  return (
    // Updated: Removed rounded-lg and shadow-md for a flatter, sharper hacker look. mb-8 is fine.
    <header className="bg-card text-card-foreground py-8 px-4 md:px-6 mb-12 border-b border-hacker-border">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <img 
            src="/images/profile_picture.jpg" 
            alt="Nabil El Hilali" 
            className="w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-hacker-accent-secondary object-cover mb-4 md:mb-0 md:mr-4"
          />
          <div className="text-center md:text-left mb-6 md:mb-0">
            {/* h1 already gets font-mono and text-primary from index.css */}
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">EL HILALI NABIL</h1>
            {/* Subtitle styling */}
            <p className="text-lg text-hacker-muted-text mt-2 font-sans">
              Engineering Student in Network and Computer Security
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end space-y-3">
          {/* Contact Info - using hacker-blue for links */}
          <div className="flex items-center space-x-3">
            <Mail className="h-4 w-4 text-hacker-green" />
            <a href={`mailto:${email}`} className="text-sm text-hacker-blue hover:text-hacker-green transition-colors duration-200 font-sans">
              {email}
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="h-4 w-4 text-hacker-green" />
            <span className="text-sm text-hacker-muted-text font-sans">{phone}</span>
          </div>
           <div className="flex items-center space-x-3">
            <MapPin className="h-4 w-4 text-hacker-green" />
            <span className="text-sm text-hacker-muted-text font-sans">{location}</span>
          </div>
          {/* Social & Resume Links - Buttons with hacker theme */}
          <div className="flex space-x-3 mt-4">
            <Button variant="outline" size="icon" asChild className="border-hacker-green text-hacker-green hover:bg-hacker-green hover:text-hacker-dark">
              <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild className="border-hacker-green text-hacker-green hover:bg-hacker-green hover:text-hacker-dark">
              <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild className="border-hacker-blue text-hacker-blue hover:bg-hacker-blue hover:text-white">
              <a href={resumePdfUrl} download="Nabil_El_Hilali_Resume.pdf" aria-label="Download Resume">
                <Download className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

