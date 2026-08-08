import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "./components/Hero";
import ProductPortfolio from "./components/ProductPortfolio";
import SupplyOrigins from "./components/SupplyOrigins";
import ExecutionProcess from "./components/ExecutionProcess";

export default function AgriculturePage() {
  return (
    <>
      <Header />

      <main className="bg-white">
        <Hero />
        <ProductPortfolio />
        <SupplyOrigins />
        <ExecutionProcess />
      </main>

      <Footer />
    </>
  );
}