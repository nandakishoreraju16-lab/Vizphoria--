import { useEffect, useRef, ReactNode, useState } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
}

const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  threshold = 0.1,
  rootMargin = "0px",
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            // Optional: Unobserve after first reveal to improve performance
            if (currentRef) {
              observer.unobserve(currentRef);
            }
          }, delay);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, threshold, rootMargin]);

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-700 ease-out ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-4"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
