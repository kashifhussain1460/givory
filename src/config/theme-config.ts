// Theme Configuration for Gift Shop
// This file allows you to change theme colors without modifying code

export const GIFT_SHOP_THEME_CONFIG = {
    // Available themes: DEFAULT, GIFT, HEALTH, GROCERY, PASTE, ORANGE, GOLD, BLUISH, GREEN, YELLOW
    currentTheme: "GIFT",

    // Custom color overrides (optional)
    customColors: {
        primary: {
            main: "#c70039",      // Main primary color
            100: "#F6F2ED",       // Light background
            400: "#D89C98",       // Hover state
            600: "#A3545C",       // Darker shade
        },
        secondary: {
            main: "#fa0048",      // Secondary color
        },
        background: {
            default: "#ffffff",   // Page background
        }
    },

    // Enable/disable custom colors
    useCustomColors: false,
};

// Theme mapping for easy switching
export const THEME_MAPPING = {
    GIFT: "GIFT",
    HEALTH: "HEALTH",
    DEFAULT: "DEFAULT",
    GROCERY: "GROCERY",
    PASTE: "PASTE",
    ORANGE: "ORANGE",
    GOLD: "GOLD",
    BLUISH: "BLUISH",
    GREEN: "GREEN",
    YELLOW: "YELLOW"
};
