import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
      <WhyUs />
      <HowItWorks />
      <Footer />
    </>
  );
}
