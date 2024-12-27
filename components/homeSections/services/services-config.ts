// This file defines the styling (text sizes, colors, spacing) for different service pages
// This files used in the service gallery component to style the service cards

export const serviceStyles = {
  // Software Engineering: cyan colored text, gets larger on bigger screens
  'software-engineering': {
    titleClassName: 'text-custom-blue',
    titleSize: 'text-2xl sm:text-3xl lg:text-4xl',
    letterSpacing: 'tracking-wider',
    lineHeight: 'leading-tight',
    fontWeight: 'font-bold'
  },
  
  // Tech Innovation: medium sized text that grows a bit on larger screens
  'tech-innovation': {
    titleSize: 'text-xl sm:text-2xl lg:text-3xl',
    letterSpacing: 'tracking-wide',
    lineHeight: 'leading-snug',
    fontWeight: 'font-bold'
  },
  
  // AI & Data: starts small but becomes much bigger on large screens
  'ai-data': {
    titleSize: 'text-lg sm:text-2xl lg:text-4xl',
    letterSpacing: 'tracking-wider',
    lineHeight: 'leading-tight',
    fontWeight: 'font-bold'
  },
  
  // Warehousing: orange text that gets very large on big screens
  'warehousing': {
    titleClassName: 'text-orange-400',
    titleSize: 'text-2xl sm:text-4xl lg:text-6xl',
    letterSpacing: 'tracking-widest',
    lineHeight: 'leading-none',
    fontWeight: 'font-custom'
  },
  
  // Embedded Systems: green text with consistent medium sizing
  'embedded': {
    titleClassName: 'text-green-300',
    titleSize: 'text-xl sm:text-2xl lg:text-4xl',
    letterSpacing: 'tracking-wide',
    lineHeight: 'leading-tight',
    fontWeight: 'font-custom'
  },
  
  // IoT: largest text size with black font weight
  'iot': {
    titleSize: 'text-3xl sm:text-5xl lg:text-7xl',
    letterSpacing: 'tracking-widest',
    lineHeight: 'leading-tight',
    fontWeight: 'font-black'
  }
};

export default serviceStyles;