/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        // Hacker Theme Palette
        background: '#0D1117',
        foreground: '#E0E0E0',
        card: '#161B22',
        'card-foreground': '#E0E0E0',
        primary: '#39FF14', // Neon Green
        'primary-foreground': '#0D1117', // Dark for contrast on neon green
        secondary: '#00A8FF', // Electric Blue
        'secondary-foreground': '#FFFFFF', // White for contrast on blue
        muted: '#161B22', // Darker card color for muted backgrounds
        'muted-foreground': '#8B949E',
        accent: '#BF00FF', // Vibrant Purple
        'accent-foreground': '#FFFFFF',
        border: '#30363D',
        input: '#30363D', // Assuming input background is similar to border
        ring: '#39FF14', // Neon Green for focus rings

        // Specific elements if needed
        'hacker-green': '#39FF14',
        'hacker-blue': '#00A8FF',
        'hacker-purple': '#BF00FF',
        'hacker-dark': '#0D1117',
        'hacker-card': '#161B22',
        'hacker-text': '#E0E0E0',
        'hacker-muted-text': '#8B949E',
        'hacker-border': '#30363D',

        // Keep existing sidebar if still used, or update it
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))', // Will need to update CSS var
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'Roboto Mono', 'monospace'],
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}

