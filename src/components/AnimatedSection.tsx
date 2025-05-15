import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  delay?: number; // Optional delay for staggered animations
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, id, className, delay = 0 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  // useInView triggers animation when the element enters the viewport
  const isInView = useInView(ref, { once: true, amount: 0.1 }); // Trigger once when 10% is visible

  const variants = {
    hidden: { opacity: 0, y: 20 }, // Start slightly below and faded out
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        delay: delay // Apply delay
      } 
    },
  };

  return (
    // Use motion.section for semantic HTML and animation capabilities
    <motion.section
      id={id}
      ref={ref}
      initial="hidden" // Start in the hidden state
      animate={isInView ? "visible" : "hidden"} // Animate to visible when in view
      variants={variants} // Apply the defined animation variants
      className={cn(className)} // Apply base and custom class names
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;

