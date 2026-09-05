type ViewCounts = Record<string, number>;

let viewCounts: ViewCounts = {};

/*
 * GET VIEW COUNT FOR ONE INSIGHT
 */

export function getViewCount(slug: string): number {
  return viewCounts[slug] || 0;
}

/*
 * INCREMENT VIEW COUNT
 */

export function incrementViewCount(
  slug: string
): number {
  const currentViews = viewCounts[slug] || 0;

  const newViews = currentViews + 1;

  viewCounts[slug] = newViews;

  return newViews;
}

/*
 * GET TOTAL VIEWS ACROSS ALL INSIGHTS
 */

export function getTotalViews(): number {
  return Object.values(viewCounts).reduce(
    (total, views) => total + views,
    0
  );
}