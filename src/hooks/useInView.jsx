import { useEffect, useState } from "react";

export const useInViewOnce = (ref) => {
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (ref.current && !hasAnimated) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsInView(true);
            setHasAnimated(true); // Mark as animated once it comes into view
          }
        },
        {
          root: null, // Use the viewport as the root
          rootMargin: "-30% 0% -30% 0%", // Element is considered in view when it's in the middle 30% of the screen
          threshold: 0.1, // Adjust the threshold slightly to trigger earlier when 10% of the element is in view
        },
      );

      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [ref, hasAnimated]);

  return { isInView, hasAnimated };
};
