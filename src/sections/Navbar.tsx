import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { ModeToggle } from "@/components/ModeToggle";

const sections = [
  { id: "profile", title: "Profile" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "education", title: "Education" },
  { id: "organizations", title: "Organizations" },
  { id: "blog", title: "Blog" },
  { id: "languages", title: "Languages" },
  { id: "interests", title: "Interests" },
];

const Navbar: React.FC = () => {
  const isMobile = useMobile();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    sections.forEach(section => {
      sectionRefs.current[section.id] = document.getElementById(section.id) as HTMLDivElement | null;
    });
  }, []);

  sections.forEach(section => {
    const entry = useIntersectionObserver(sectionRefs.current[section.id] ? { current: sectionRefs.current[section.id] } : { current: null }, {
      threshold: 0.3,
      rootMargin: "-50% 0px -50% 0px"
    });
    useEffect(() => {
         if (entry?.isIntersecting) {
            setActiveSection(section.id);
         }
    }, [entry?.isIntersecting, section.id]);
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      if (isMobile) {
        setIsSheetOpen(false);
      }
    }
  };

  const navLinks = sections.map((section) => (
    <Button
      key={section.id}
      variant={activeSection === section.id ? "secondary" : "ghost"} // Use secondary for active, ghost for others
      className={`
        justify-start w-full md:w-auto md:justify-center font-mono 
        transition-colors duration-200 
        ${activeSection === section.id 
          ? "text-hacker-green bg-hacker-card hover:bg-hacker-green hover:text-hacker-dark" 
          : "text-hacker-blue hover:text-hacker-green hover:bg-hacker-card/50"
        }
      `}
      onClick={() => scrollToSection(section.id)}
    >
      {section.title}
    </Button>
  ));

  if (isMobile) {
    return (
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="fixed top-4 right-4 z-50 bg-hacker-card/80 backdrop-blur-sm border-hacker-green text-hacker-green hover:bg-hacker-green hover:text-hacker-dark">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Navigation</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-hacker-dark border-l border-hacker-border">
          <nav className="flex flex-col space-y-2 mt-8">
            {navLinks}
            <div className="pt-4 border-t border-hacker-border mt-4">
              <ModeToggle />
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    // Updated Navbar styling for hacker theme
    <nav className="sticky top-0 z-40 bg-hacker-dark/90 backdrop-blur-sm border-b border-hacker-border mb-8 py-2 shadow-md shadow-hacker-green/10">
      <div className="container mx-auto max-w-4xl flex justify-center items-center flex-wrap gap-x-1 md:gap-x-2">
        <div className="flex flex-grow justify-center flex-wrap gap-x-1 md:gap-x-2">
          {navLinks}
        </div>
        <div className="ml-auto pl-2">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

