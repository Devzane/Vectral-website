import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vectra Automation | AI Receptionist for HVAC & Real Estate",
  description:
    "Stop losing revenue to missed calls. Vectra Automation's AI receptionist captures every lead, 24/7. Built for HVAC and Real Estate professionals.",
  keywords: [
    "AI receptionist",
    "HVAC automation",
    "Real estate AI",
    "missed call recovery",
    "Vectra Automation",
  ],
  openGraph: {
    title: "Vectra Automation | AI Receptionist",
    description: "Stop losing revenue to missed calls. AI-powered lead capture, 24/7.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
