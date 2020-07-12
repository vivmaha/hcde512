import * as React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

/**
 * https://reactrouter.com/web/guides/scroll-restoration
 * */
export const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
