import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/insights/Hero";
import FeaturedPost from "@/components/insights/FeaturedPost";
import CategoryFilter from "@/components/insights/CategoryFilter";
import ArticleGrid from "@/components/insights/ArticleGrid";

export default function InsightsPage() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedPost />
      <CategoryFilter />
      <ArticleGrid />
      
      <Footer />
    </>
  );
}