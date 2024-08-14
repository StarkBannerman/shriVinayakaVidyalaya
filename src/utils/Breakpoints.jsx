// mediaQueries.js
import { useMediaQuery } from "react-responsive";

export const useMediaQueries = () => {
  const sizes = {
    largeDesktop: "(min-width: 1440px)",
    desktop: "(min-width: 1224px) and (max-width: 1439px)",
    tablet: "(min-width: 768px) and (max-width: 1224px)",
    mobile: "(max-width: 767px)",
  };
  const { largeDesktop, desktop, tablet, mobile } = sizes;

  return {
    isLargeDesktop: useMediaQuery({ query: largeDesktop }),
    isDesktop: useMediaQuery({ query: desktop }),
    isTablet: useMediaQuery({ query: tablet }),
    isMobile: useMediaQuery({ query: mobile }),
  };
};
