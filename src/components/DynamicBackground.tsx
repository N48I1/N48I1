import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { Engine } from "tsparticles-engine";
import { useTheme } from "@/components/ThemeProvider"; // To adapt particles to theme

const DynamicBackground: React.FC = () => {
  const { theme } = useTheme();

  const particlesInit = useCallback(async (engine: Engine) => {
    // console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's a must to load A LOT of features
    // await loadFull(engine); // if using loadFull
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (_container: any) => {
    // await console.log(container);
  }, []);

  const options = {
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 2,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: theme === "dark" || theme === "system" ? "#39FF14" : "#00A8FF", // Neon Green for dark, Blue for light (if light hacker theme is ever made)
      },
      links: {
        color: theme === "dark" || theme === "system" ? "#30363D" : "#8B949E", // Darker grey for dark, medium for light
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      collisions: {
        enable: false, // Keep false for performance unless specifically needed
      },
      move: {
        direction: "none" as const,
        enable: true,
        outModes: {
          default: "bounce" as const,
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 50, // Number of particles
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: "circle" as const,
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
    background: {
      color: "transparent", // Make background transparent so body bg shows
    }
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options as any} // Cast to any to avoid deep type issues with tsparticles options
      className="fixed top-0 left-0 w-full h-full z-[-1]" // Ensure it's behind all content
    />
  );
};

export default DynamicBackground;

