import { AppToaster } from "@/components/ui/toast";
import "./globals.css";
import { Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "UX/UI Artikels",
  description: "Website met 3 artikels",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        
        {/* NAVIGATIE */}
        <nav className="flex gap-6 p-4 bg-gray-200 justify-center font-bold">
          <Link href="/ai-slop">AI Slop</Link>
          <Link href="/vibecoding">Vibecoding</Link>
          <Link href="/amodei">Amodei</Link>
        </nav>

        {/* CONTENT */}
        <div className="p-10 max-w-3xl mx-auto">
          {children}
        </div>

        {/* TOASTER */}
        <AppToaster />
      </body>
    </html>
  );
}