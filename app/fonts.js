import { Inter , Urbanist , Poppins } from "next/font/google";

export const inter = Inter({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    variable: "--font-inter",
});

export const urbanist = Urbanist({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    variable: "--font-urbanist",
})

export const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    variable: "--font-poppins",
});