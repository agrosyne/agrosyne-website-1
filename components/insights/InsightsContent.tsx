"use client";

import { useState } from "react";

import CategoryFilter from "./CategoryFilter";
import ArticleGrid from "./ArticleGrid";

export default function InsightsContent() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <>
      <CategoryFilter
        active={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <ArticleGrid category={activeCategory} />
    </>
  );
}