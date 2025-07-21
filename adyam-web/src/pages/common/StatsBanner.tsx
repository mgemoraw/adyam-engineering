import { useEffect, useRef, useState } from "react";

interface StatsType {
  label: string;
  value: number;
}

function useInView(ref: React.RefObject<HTMLDivElement | null>, rootMargin = '0px') {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, rootMargin]);
  
  return isIntersecting;
}

function AnimatedNumber({ value, duration = 1200 }: { value: number, duration?: number }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<number | null>(null);

  useEffect(() => {
    let start: number | null = null;
    
    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setDisplay(Math.floor(progress * value));
      
      if (progress < 1) {
        ref.current = requestAnimationFrame(animate);
      } else {
        setDisplay(value);
      }
    };

    ref.current = requestAnimationFrame(animate);
    
    return () => {
      if (ref.current) cancelAnimationFrame(ref.current);
    };
  }, [value, duration]);

  return <span>{display}</span>;
}

export default function StatsBanner({ stats }: { stats: StatsType[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, '-100px');

  return (
    <section ref={sectionRef} className="stats-section">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-value">
              {inView ? (
                <AnimatedNumber value={stat.value} />
              ) : (
                "0" // Show 0 when not in view
              )}
              {stat.label.includes('Satisfaction') ? '%' : '+'}
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}