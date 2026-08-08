export const posts = [
  {
    id: "1",
    title: "Global Fertilizer Market Outlook 2026",
    slug: "global-fertilizer-market-outlook-2026",
    excerpt:
      "Rising demand, changing trade routes and supply chain shifts continue to reshape global fertilizer markets.",
    content: [
  {
    type: "paragraph",
    text: "Global fertilizer markets continue to evolve as geopolitical developments, changing trade routes and agricultural demand reshape international supply chains. Buyers are increasingly focused on supply security, pricing stability and reliable logistics."
  },
  {
    type: "heading",
    text: "Key Market Drivers"
  },
  {
    type: "paragraph",
    text: "Demand from Asia, Latin America and Africa continues to support fertilizer consumption, while production costs, energy prices and export policies remain major pricing factors across global markets."
  },
  {
    type: "list",
    items: [
      "Rising agricultural demand",
      "Supply chain diversification",
      "Energy price fluctuations",
      "Government export policies",
      "Freight market volatility"
    ]
  },
  {
    type: "heading",
    text: "Our Perspective"
  },
  {
    type: "paragraph",
    text: "Businesses should focus on building diversified sourcing strategies, maintaining strong supplier relationships and monitoring international market developments to reduce procurement risks."
  }
],
    image: "/images/insights/featured.jpg",
    category: "Market Analysis",
    author: "Agrosyne",
    publishedAt: "06 August 2026",
    readTime: "5 min read",
    featured: true,
  },

  {
    id: "2",
    title: "Understanding CIF vs FOB in International Trade",
    slug: "understanding-cif-vs-fob",
    excerpt:
      "A practical guide to selecting the right Incoterms for international commodity transactions.",
    content: "",
    image: "/images/insights/article2.jpg",
    category: "Trade Guides",
    author: "Agrosyne",
    publishedAt: "02 August 2026",
    readTime: "4 min read",
    featured: false,
  },

  {
    id: "3",
    title: "Black Pepper Export Trends from India",
    slug: "black-pepper-export-trends",
    excerpt:
      "Export demand continues to evolve as buyers focus on quality, origin and long-term supplier relationships.",
    content: "",
    image: "/images/insights/article3.jpg",
    category: "Market Analysis",
    author: "Agrosyne",
    publishedAt: "29 July 2026",
    readTime: "4 min read",
    featured: false,
  },

  {
    id: "4",
    title: "Brazil Sugar Supply Update",
    slug: "brazil-sugar-supply-update",
    excerpt:
      "Weather, logistics and harvest conditions continue to influence the global sugar trade.",
    content: "",
    image: "/images/insights/article4.jpg",
    category: "Industry Insights",
    author: "Agrosyne",
    publishedAt: "24 July 2026",
    readTime: "6 min read",
    featured: false,
  },

  {
    id: "5",
    title: "Global Urea Price Outlook",
    slug: "global-urea-price-outlook",
    excerpt:
      "Energy prices and seasonal demand remain key drivers behind international fertilizer pricing.",
    content: "",
    image: "/images/insights/article5.jpg",
    category: "Market Analysis",
    author: "Agrosyne",
    publishedAt: "20 July 2026",
    readTime: "5 min read",
    featured: false,
  },

  {
    id: "6",
    title: "Choosing the Right Incoterms",
    slug: "choosing-the-right-incoterms",
    excerpt:
      "Understand the responsibilities, risks and costs associated with common international shipping terms.",
    content: "",
    image: "/images/insights/article6.jpg",
    category: "Trade Guides",
    author: "Agrosyne",
    publishedAt: "16 July 2026",
    readTime: "7 min read",
    featured: false,
  },

  {
    id: "7",
    title: "Indian Rice Export Market Review",
    slug: "indian-rice-export-market-review",
    excerpt:
      "A look at demand, pricing and export opportunities across key international destinations.",
    content: "",
    image: "/images/insights/article7.jpg",
    category: "Industry Insights",
    author: "Agrosyne",
    publishedAt: "11 July 2026",
    readTime: "5 min read",
    featured: false,
  },

  {
    id: "8",
    title: "Container Freight Market Update",
    slug: "container-freight-market-update",
    excerpt:
      "Freight availability and shipping rates continue to affect commodity movements worldwide.",
    content: "",
    image: "/images/insights/article8.jpg",
    category: "Market Analysis",
    author: "Agrosyne",
    publishedAt: "07 July 2026",
    readTime: "4 min read",
    featured: false,
  },

  {
    id: "9",
    title: "Why Supplier Verification Matters",
    slug: "why-supplier-verification-matters",
    excerpt:
      "Building dependable supply chains starts with evaluating supplier capability, compliance and consistency.",
    content: "",
    image: "/images/insights/article9.jpg",
    category: "Company News",
    author: "Agrosyne",
    publishedAt: "01 July 2026",
    readTime: "5 min read",
    featured: false,
  },
  
];
export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}