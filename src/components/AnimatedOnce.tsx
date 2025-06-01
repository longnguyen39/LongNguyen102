"use client";

import React, { useEffect, useRef, useState } from 'react';
import styles from './AnimatedTitle.module.css';

interface AnimatedOnceProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  animation?: string;
  animateOnce?: boolean;
}

const AnimatedOnce: React.FC<AnimatedOnceProps> = ({
  children,
  className = '',
  duration = 0.8,
  delay = 0,
  animation = 'fadeInUp',
  animateOnce = true
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Set initial visibility for first element
    if (delay === 0) {
      setIsVisible(true);
      if (animateOnce) {
        setHasAnimated(true);
      }
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When element enters viewport, animate it
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          if (animateOnce) {
            setHasAnimated(true);
            // Stop observing after first animation
            if (elementRef.current) {
              observer.unobserve(elementRef.current);
            }
          }
        } else if (!entry.isIntersecting && !animateOnce) {
          // Reset visibility when out of view (only if not animating once)
          setIsVisible(false);
        }
      },
      {
        threshold: [0, 0.05], // Trigger at 0% and 5% visibility
        rootMargin: '0px 0px 0px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div 
      ref={elementRef}
      className={`${styles.animatedTitle} ${isVisible ? styles.visible : ''} ${className}`}
      style={{
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        animationName: isVisible ? animation : 'none',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity ${duration}s ease-out, transform ${duration}s ease-out`
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedOnce;
