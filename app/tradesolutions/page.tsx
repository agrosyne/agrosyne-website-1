import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "./components/Hero";
import Overview from "./components/Overview";
import TradeSolutions from "./components/TradeSolutions";
import OurRole from "./components/OurRole";
import WhyChooseUs from "./components/WhyChooseUs";
import FAQ from "./components/FAQ";

export default function tradesolutions() {
  return (
    <>
      <Header />

      <main className="bg-white">

        <Hero />
        <Overview />
        <TradeSolutions />
        <OurRole />
        <WhyChooseUs />
        <FAQ />

      </main>

      <Footer />
    </>
  );
}