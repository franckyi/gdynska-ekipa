import { Gruppo, Merriweather } from "next/font/google";

export const fontPrimary = Gruppo({ 
    subsets: ["latin-ext"],
    weight: ["400"], 
});

export const fontSecondary = Merriweather({ 
    subsets: ["latin-ext"],
    weight: ["300", "700"],
    style: ["italic"]
})