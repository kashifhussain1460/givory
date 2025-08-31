import { ReactNode } from "react";
import { Cormorant_Garamond } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["600", "700"] });
export const cormorantFont = cormorant.className;
// THEME PROVIDER
import ThemeProvider from "theme/theme-provider";
// PRODUCT CART PROVIDER
import CartProvider from "contexts/CartContext";
// SITE SETTINGS PROVIDER
import SettingsProvider from "contexts/SettingContext";
// GLOBAL CUSTOM COMPONENTS
import RTL from "components/rtl";
import ProgressBar from "components/progress";

// IMPORT i18n SUPPORT FILE
import "i18n";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cormorantFont}>
        <CartProvider>
          <SettingsProvider>
            <ThemeProvider>
              <ProgressBar />
              <RTL>{children}</RTL>
            </ThemeProvider>
          </SettingsProvider>
        </CartProvider>
        <GoogleAnalytics gaId="G-XKPD36JXY0" />
      </body>
    </html>
  );
}
