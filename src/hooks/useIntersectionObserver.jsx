import { useEffect } from "react";

export default  ({ root, target, onIntersect, threshold = 1.0, rootMargin = "0px" }) => {
  useEffect(
    () => {

      if (!root) {
        return;
      }

      const observer = new IntersectionObserver(onIntersect, {
        root,
        rootMargin,
        threshold,
      });

      if (!target) {
        return;
      }

      observer.observe(target);

      // Let's clean up after ourselves.
      return () => {
        observer.unobserve(target);
      };
    }, [target, root, rootMargin, onIntersect, threshold]
  );
};
