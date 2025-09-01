import { Cormorant_Garamond, Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

// Exporting optional if you want reuse
export const cormorantFont = cormorant.className;
export const greatVibesFont = greatVibes.className;


