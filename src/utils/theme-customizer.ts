// Theme Customizer Utility
// This utility allows you to change theme colors dynamically

import { GIFT_SHOP_THEME_CONFIG } from "../config/theme-config";

export interface CustomThemeColors {
  primary?: {
    main?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
  };
  secondary?: {
    main?: string;
  };
  background?: {
    default?: string;
  };
}

export class ThemeCustomizer {
  private static instance: ThemeCustomizer;
  private customColors: CustomThemeColors = {};

  private constructor() {
    this.loadCustomColors();
  }

  public static getInstance(): ThemeCustomizer {
    if (!ThemeCustomizer.instance) {
      ThemeCustomizer.instance = new ThemeCustomizer();
    }
    return ThemeCustomizer.instance;
  }

  // Load custom colors from configuration
  private loadCustomColors(): void {
    if (GIFT_SHOP_THEME_CONFIG.useCustomColors) {
      this.customColors = GIFT_SHOP_THEME_CONFIG.customColors;
    }
  }

  // Update custom colors dynamically
  public updateCustomColors(colors: CustomThemeColors): void {
    this.customColors = { ...this.customColors, ...colors };
    this.saveToLocalStorage();
  }

  // Get current custom colors
  public getCustomColors(): CustomThemeColors {
    return this.customColors;
  }

  // Apply custom colors to theme palette
  public applyCustomColors(basePalette: any): any {
    if (!GIFT_SHOP_THEME_CONFIG.useCustomColors) {
      return basePalette;
    }

    const customPalette = { ...basePalette };

    if (this.customColors.primary) {
      customPalette.primary = {
        ...customPalette.primary,
        ...this.customColors.primary
      };
    }

    if (this.customColors.secondary) {
      customPalette.secondary = {
        ...customPalette.secondary,
        ...this.customColors.secondary
      };
    }

    if (this.customColors.background) {
      customPalette.background = {
        ...customPalette.background,
        ...this.customColors.background
      };
    }

    return customPalette;
  }

  // Save to localStorage for persistence
  private saveToLocalStorage(): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('gift-shop-custom-colors', JSON.stringify(this.customColors));
    }
  }

  // Load from localStorage
  public loadFromLocalStorage(): void {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('gift-shop-custom-colors');
      if (saved) {
        this.customColors = JSON.parse(saved);
      }
    }
  }

  // Reset to default colors
  public resetColors(): void {
    this.customColors = {};
    this.saveToLocalStorage();
  }
}

// Export singleton instance
export const themeCustomizer = ThemeCustomizer.getInstance();
