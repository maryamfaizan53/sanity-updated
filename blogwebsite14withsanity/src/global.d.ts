declare module "next-themes" {
    import { ReactNode } from "react";
    
    export interface ThemeProviderProps {
      children?: ReactNode;
      forcedTheme?: string;
      enableSystem?: boolean;
      disableTransitionOnChange?: boolean;
      enableColorScheme?: boolean;
      storageKey?: string;
      defaultTheme?: string;
      attribute?: string;
      value?: string;
    }
  
    export function ThemeProvider(props: ThemeProviderProps): JSX.Element;
    // Re-export anything else you need from next-themes
  }
  