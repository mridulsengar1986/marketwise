export const metadata = {
  title: "Marketwise",
  description: "Discounts that adapt to every market",
};
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
