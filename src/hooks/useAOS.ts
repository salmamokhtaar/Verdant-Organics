"use client";

import { useEffect } from "react";

// Add TypeScript definition for AOS on the window object
declare global {
  interface Window {
    AOS: {
      init: (options?: Record<string, unknown>) => void;
      refresh: () => void;
    };
  }
}

/**
 * Custom hook to initialize and refresh AOS animations
 */
const useAOS = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.AOS) {
      window.AOS.refresh();
    }
  }, []);
};

export default useAOS;
