"use client";

import { useEffect, useRef } from "react";

interface ViewTrackerProps {
  slug: string;
}

export default function ViewTracker({
  slug,
}: ViewTrackerProps) {
  const hasTracked = useRef(false);

  useEffect(() => {
    if (hasTracked.current) {
      return;
    }

    hasTracked.current = true;

    async function recordView() {
      try {
        await fetch(
          `/api/insights/${encodeURIComponent(slug)}/view`,
          {
            method: "POST",
          }
        );
      } catch (error) {
        console.error(
          "Failed to record insight view:",
          error
        );
      }
    }

    recordView();
  }, [slug]);

  return null;
}