import "./globals.css";
import Navbar from "./components/Navbar";
import FooterCTA from "./components/FooterCTA";
export const metadata = {
  title: "Marketwise",
  description: "Discounts that adapt to every market",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <FooterCTA />
      </body>
    </html>
  );
}
