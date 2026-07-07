import { useState, useEffect } from 'react';

export default function useActiveSection(sectionIds, threshold = 0.3) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observers = [];
    
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '-20% 0px -60% 0px', // Trigger when section is near middle-top
      threshold,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds, threshold]);

  return activeSection;
}
