import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * React Router keeps the scroll position across navigations, so clicking a
 * footer link from the bottom of one page drops you into the middle of the
 * next. Reset on every path change.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
