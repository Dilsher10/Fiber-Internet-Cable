import { Sen } from "next/font/google";
import "./globals.css";

const sen = Sen({
  variable: "--font-sen",
  subsets: ["latin"],
});

export const metadata = {
  title: "LISAM SOLUTIONS LLC",
  description: "LISAM SOLUTIONS LLC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sen.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
