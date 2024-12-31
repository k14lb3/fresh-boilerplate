import type { Config } from 'tailwindcss';

export default {
  content: [
    './static/styles/**/*.css',
    './{components,islands,lib,routes}/**/*.{ts,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
    },
  },
} satisfies Config;
