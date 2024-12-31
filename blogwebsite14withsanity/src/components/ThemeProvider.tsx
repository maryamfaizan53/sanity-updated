'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes';

export default function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}


// 'use client';
// import * as React from 'react';
// import ThemeProviderfrom 'next-theme';
// import type  ThemeProviderProps  from 'next-themes';

// export default function ThemeProvider({ children, ...props }: ThemeProviderProps) {
//   return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
// }

