import { useCallback, useEffect, useState } from "react";

export default function useWindowWidth() {
  const isClient = typeof window === "object";

  const getSize = useCallback(() => {
    return isClient ? window.innerWidth : 0;
  }, [isClient]);

  const [windowSize, setWindowSize] = useState<number>(getSize);

  useEffect(() => {
    if (!isClient) return;

    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize(window.innerWidth);
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [isClient]); // Empty array ensures that effect is only run on mount
  return windowSize;
}
