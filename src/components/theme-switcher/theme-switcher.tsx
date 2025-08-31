"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import { ColorLens, Close } from "@mui/icons-material";
import { GIFT_SHOP_THEME_CONFIG, THEME_MAPPING } from "../../config/theme-config";
import { themeCustomizer } from "../../utils/theme-customizer";

interface ThemeSwitcherProps {
  showFloatingButton?: boolean;
}

const themeColors = {
  GIFT: { main: "#BE7374", name: "Gift Shop" },
  HEALTH: { main: "#4E97FD", name: "Health & Beauty" },
  DEFAULT: { main: "#E63E58", name: "Default" },
  GROCERY: { main: "#E63E58", name: "Grocery" },
  PASTE: { main: "#4BB4B4", name: "Paste" },
  ORANGE: { main: "#FA8C16", name: "Orange" },
  GOLD: { main: "#BB9C36", name: "Gold" },
  BLUISH: { main: "#4BB4B4", name: "Bluish" },
  GREEN: { main: "#33D067", name: "Green" },
  YELLOW: { main: "#FFCD4E", name: "Yellow" },
};

export default function ThemeSwitcher({ showFloatingButton = true }: ThemeSwitcherProps) {
  const [open, setOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(GIFT_SHOP_THEME_CONFIG.currentTheme);

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("gift-shop-current-theme");
    if (savedTheme && THEME_MAPPING[savedTheme as keyof typeof THEME_MAPPING]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  const handleThemeChange = (themeName: string) => {
    setCurrentTheme(themeName);
    localStorage.setItem("gift-shop-current-theme", themeName);
    
    // Update the configuration
    GIFT_SHOP_THEME_CONFIG.currentTheme = themeName;
    
    // Reload the page to apply the new theme
    window.location.reload();
  };

  const handleCustomColorChange = (colorType: string, value: string) => {
    const colors = {
      [colorType]: value
    };
    themeCustomizer.updateCustomColors(colors);
    // Reload to apply changes
    window.location.reload();
  };

  return (
    <>
      {showFloatingButton && (
        <Tooltip title="Change Theme Colors" placement="left">
          <IconButton
            onClick={() => setOpen(true)}
            sx={{
              position: "fixed",
              bottom: 20,
              right: 20,
              zIndex: 1000,
              bgcolor: "primary.main",
              color: "white",
              "&:hover": { bgcolor: "primary.dark" },
            }}
          >
            <ColorLens />
          </IconButton>
        </Tooltip>
      )}

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">Theme Color Switcher</Typography>
            <IconButton onClick={() => setOpen(false)}>
              <Close />
            </IconButton>
          </Box>
        </DialogTitle>

        <DialogContent>
          <Typography variant="subtitle1" gutterBottom>
            Choose a predefined theme:
          </Typography>
          
          <Grid container spacing={2} sx={{ mb: 3 }}>
            {Object.entries(themeColors).map(([themeKey, themeData]) => (
              <Grid item xs={6} sm={4} md={3} key={themeKey}>
                <Button
                  fullWidth
                  variant={currentTheme === themeKey ? "contained" : "outlined"}
                  onClick={() => handleThemeChange(themeKey)}
                  sx={{
                    height: 60,
                    borderColor: themeData.main,
                    color: currentTheme === themeKey ? "white" : themeData.main,
                    bgcolor: currentTheme === themeKey ? themeData.main : "transparent",
                    "&:hover": {
                      bgcolor: currentTheme === themeKey ? themeData.main : `${themeData.main}20`,
                    },
                  }}
                >
                  <Box textAlign="center">
                    <Box
                      width={20}
                      height={20}
                      borderRadius="50%"
                      bgcolor={themeData.main}
                      mx="auto"
                      mb={0.5}
                    />
                    <Typography variant="caption" display="block">
                      {themeData.name}
                    </Typography>
                  </Box>
                </Button>
              </Grid>
            ))}
          </Grid>

          <Typography variant="subtitle1" gutterBottom>
            Current Theme: {themeColors[currentTheme as keyof typeof themeColors]?.name}
          </Typography>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)}>Close</Button>
          <Button 
            onClick={() => {
              themeCustomizer.resetColors();
              window.location.reload();
            }}
            color="secondary"
          >
            Reset to Default
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
