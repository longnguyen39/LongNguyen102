"use client";

import React, { useEffect, useRef, useState } from 'react';
import styles from './AnimatedTitle.module.css';

interface AnimatedTitleProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ children, className }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the element enters the viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Dispatch custom event for navbar to hide
          window.dispatchEvent(new CustomEvent('titleVisibilityChange', { detail: { visible: true } }));
        } else {
          // When element leaves the viewport, reset animation
          setIsVisible(false);
          // Dispatch custom event for navbar to show
          window.dispatchEvent(new CustomEvent('titleVisibilityChange', { detail: { visible: false } }));
        }
      },
      {
        // Element is considered visible when 20% of it is in the viewport
        threshold: 0.2,
        // Start observing a bit before the element enters the viewport
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <h2 
      ref={titleRef}
      className={`${styles.animatedTitle} ${isVisible ? styles.visible : ''} ${className || ''}`}
    >
      {children}
    </h2>
  );
};

export default AnimatedTitle;
