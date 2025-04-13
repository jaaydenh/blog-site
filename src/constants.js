export const BLOG_TITLE = 'Jaayden Halko';
export const BLOG_DESCRIPTION = 'Jaayden Halko\'s blog';
export const COLOR_THEME_COOKIE_NAME = 'color-theme';

export const LIGHT_COLORS = {
  '--color-text': 'hsl(0deg 0% 5%)',
  '--color-primary-100': 'hsl(9, 100%, 90%)',
  '--color-primary-300': 'hsl(9, 100%, 70%)',
  '--color-primary-500': 'hsl(9, 100%, 46%)', // underline and hover color
  '--color-primary-700': 'hsl(9, 100%, 33%)',
  '--color-primary-900': 'hsl(9, 100%, 20%)',
  '--color-primary-contrast': 'white',
  '--color-secondary-500': 'hsl(328, 100%, 50%)',
  '--color-decorative-100': 'hsl(36, 97%, 94%)', 
  '--color-decorative-200': 'hsl(36, 97%, 90%)',
  '--color-decorative-300': 'hsl(36, 97%, 84%)', // gradiant top
  '--color-decorative-500': 'hsl(36, 97%, 70%)', // gradiant bottom
  '--color-decorative-600': 'hsl(36, 97%, 60%)',
  '--color-decorative-700': 'hsl(36, 97%, 50%)',
  '--color-decorative-800': 'hsl(36, 97%, 33%)',
  '--color-decorative-900': 'hsl(9, 100%, 46%)', // datetime
  '--color-gray-0': 'white',
  '--color-gray-100': 'hsl(50deg 20% 90%)',
  '--color-gray-200': 'hsl(50deg 15% 85%)',
  '--color-gray-300': 'hsl(50deg 10% 70%)',
  '--color-gray-500': 'hsl(50deg 4% 50%)',
  '--color-gray-700': 'hsl(50deg 10% 25%)',
  '--color-gray-900': 'hsl(50deg 20% 10%)',
  '--color-gray-1000': 'black',
};

export const DARK_COLORS = {
  '--color-text': 'hsl(0deg 0% 100%)',
  '--color-primary-100': 'hsl(182, 47%, 90%)',
  '--color-primary-300': 'hsl(182, 47%, 70%)',
  '--color-primary-500': 'hsl(15, 100%, 40%)',
  '--color-primary-700': 'hsl(182, 47%, 35%)',
  '--color-primary-900': 'hsl(182, 47%, 25%)',
  '--color-primary-contrast': 'black',
  '--color-secondary-500': 'hsl(328, 100%, 50%)',
  '--color-decorative-100': 'hsl(228, 71%, 3%)',
  '--color-decorative-200': 'hsl(198, 50%, 10%)',
  '--color-decorative-300': 'hsl(198, 60%, 15%)',
  '--color-decorative-500': 'hsl(216, 3%, 35%)',
  '--color-decorative-600': 'hsl(198, 70%, 40%)',
  '--color-decorative-700': 'hsl(198, 70%, 50%)',
  '--color-decorative-800': 'hsl(198, 75%, 65%)',
  '--color-decorative-900': 'hsl(196, 100%, 50%)',
  '--color-gray-0': 'black',
  '--color-gray-100': 'hsl(256deg 20% 10%)',
  '--color-gray-200': 'hsl(256deg 15% 15%)',
  '--color-gray-300': 'hsl(256deg 10% 30%)',
  '--color-gray-500': 'hsl(256deg 4% 50%)',
  '--color-gray-700': 'hsl(256deg 10% 75%)',
  '--color-gray-900': 'hsl(256deg 20% 90%)',
  '--color-gray-1000': 'white',
};

// Add in semantic / special colors
LIGHT_COLORS['--color-primary'] =
  LIGHT_COLORS['--color-primary-500'];
LIGHT_COLORS['--color-secondary'] =
  LIGHT_COLORS['--color-secondary-500'];
LIGHT_COLORS['--color-inline-code-bg'] =
  'hsl(45deg 74% 85%)';
LIGHT_COLORS['--color-selection-text'] = 'black';
LIGHT_COLORS['--color-selection-background'] =
  LIGHT_COLORS['--color-decorative-700'];
LIGHT_COLORS['--color-backdrop'] =
  LIGHT_COLORS['--color-decorative-500'];
LIGHT_COLORS['--color-backdrop-highlight'] =
  LIGHT_COLORS['--color-decorative-300'];
LIGHT_COLORS['--color-page-background'] =
  LIGHT_COLORS['--color-decorative-100'];
LIGHT_COLORS['--color-page-border'] = 'transparent';
LIGHT_COLORS['--color-card-background'] =
  LIGHT_COLORS['--color-gray-0'];
LIGHT_COLORS['--color-card-border'] = 'transparent';

DARK_COLORS['--color-primary'] =
  DARK_COLORS['--color-primary-500'];
DARK_COLORS['--color-secondary'] =
  DARK_COLORS['--color-secondary-500'];
DARK_COLORS['--color-inline-code-bg'] =
  'hsl(256deg 30% 22%)';
DARK_COLORS['--color-selection-text'] = 'white';
DARK_COLORS['--color-selection-background'] =
  'hsl(256deg 100% 30%)';
DARK_COLORS['--color-backdrop'] =
  DARK_COLORS['--color-decorative-100'];
DARK_COLORS['--color-backdrop-highlight'] =
  DARK_COLORS['--color-decorative-500'];
DARK_COLORS['--color-page-background'] =
  'transparent';
DARK_COLORS['--color-page-border'] =
  'hsl(256deg 30% 50% / 0.2)';
DARK_COLORS['--color-card-background'] =
  DARK_COLORS['--color-backdrop'];
DARK_COLORS['--color-card-border'] =
  DARK_COLORS['--color-page-border'];

export const LIGHT_SHADOWS = {
  '--shadow-page': `
    0px 1px 2px hsl(50deg 60% 50% / 0.25),
    0px 3px 6px hsl(50deg 60% 50% / 0.25),
    0px 9px 18px hsl(50deg 60% 50% / 0.25),
    0px 18px 36px hsl(50deg 60% 50% / 0.25),
    0px 54px 108px hsl(50deg 60% 50% / 0.25)
  `,
  '--shadow-card': `
    0px 1px 2px hsl(50deg 20% 50% / 0.2),
    0px 2px 4px hsl(50deg 20% 50% / 0.2),
    0px 4px 8px hsl(50deg 20% 50% / 0.2),
    0px 8px 16px hsl(50deg 20% 50% / 0.2)
  `,
};
export const DARK_SHADOWS = {
  '--shadow-page': 'none',
  '--shadow-card': 'none',
};

export const LIGHT_TOKENS = {
  ...LIGHT_COLORS,
  ...LIGHT_SHADOWS,
};

export const DARK_TOKENS = {
  ...DARK_COLORS,
  ...DARK_SHADOWS,
};
