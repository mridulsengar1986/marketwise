import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FooterCTA from "./components/FooterCTA";
import Features from "./components/Features";
import Pricing from "./components/Pricing";

export default function Page() {
  return (
    <>
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>
      <FooterCTA />
    </>
  );
}
