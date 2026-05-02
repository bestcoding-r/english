// app/layout.tsx (or a wrapper component)

import "./globals.css";
import Sidebar from "./components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        {/* ml-64 shifts the content to the right so it isn't covered */}
        <main className="ml-64 min-h-screen w-full bg-gray-50 p-8">
          {children}
        </main>
      </body>
    </html>
  );
}