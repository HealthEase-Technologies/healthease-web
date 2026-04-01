import { Inter, Instrument_Serif } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";


const inter = Inter({ subsets: ["latin"], display: "swap", weight: ["400","500","600","700"] });
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"], weight: "400", style: ["normal","italic"],
  display: "swap", variable: "--font-serif",
});

export const metadata = {
  title: "HealthEase Technologies — Building the Future of Health",
  description: "HealthEase Technologies builds intelligent health products that make it effortless to understand, manage, and improve your wellbeing.",
  openGraph: {
    type: "website",
    siteName: "HealthEase Technologies",
    title: "HealthEase Technologies — Building the Future of Health",
    description: "Intelligent health products for everyone.",
  },
};

export const viewport = { themeColor: "#1aab52", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className} ${instrumentSerif.variable} antialiased`} suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
