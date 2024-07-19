import { css } from 'styled-components';

const variables = css`
  :root {
    .dark-theme {
      --dark-navy: #020c1b;
      --navy: #09090b;
      --light-navy: #0f0f12;
      --lightest-navy: #1c1c1f;
      --navy-shadow: rgba(2, 12, 27, 0.7);
      --dark-slate: #495670;
      --slate: #667080;
      --light-slate: #8892a8;
      --lightest-slate: #b0b8cc;
      --project-title-color: #ffffff;
      --white: #d6e0f0;
      --green: #1987c7; /* Replacing green with blue */
      --green-tint: rgba(79, 154, 255, 0.1); /* Replacing green tint with blue tint */
      --pink: #f57dff;
      --blue: #1987c7;
      --image-filter-bg-color: #09090b;
      --nav-bg-color: rgba(9, 9, 11, 0.85);
      --selection-bg-color: #1c1c1f;
    }

    .light-theme {
      --dark-navy: #020c1b;
      --navy: #ffffff;
      --light-navy: #0f0f12;
      --lightest-navy: #1c1c1f;
      --navy-shadow: rgba(2, 12, 27, 0.7);
      --dark-slate: #495670;
      --slate: #667080;
      --light-slate: #8892a8;
      --lightest-slate: #000000;
      --project-title-color: #ffffff;
      --white: #d6e0f0;
      --green: #1987c7; /* Replacing green with blue */
      --green-tint: rgba(79, 154, 255, 0.1); /* Replacing green tint with blue tint */
      --pink: #f57dff;
      --blue: #1987c7;
      --image-filter-bg-color: #00000;
      --nav-bg-color: rgba(255, 255, 255, 0.85);
      --selection-bg-color: #e8f3ff;
    }

    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
