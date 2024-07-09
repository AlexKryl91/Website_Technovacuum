import { useEffect, useRef, useState } from 'react';

type TUseIntersection = [React.MutableRefObject<any>, boolean];

const useItersection = (rootMargin: string): TUseIntersection => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { root: null, rootMargin }
    );
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return [ref, isIntersecting];
};

export default useItersection;
