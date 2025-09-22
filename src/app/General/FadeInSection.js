"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function FadeInSection({ children, delay = 0 }) {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      <motion.div
        initial={{ opacity: 0.5, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut", delay }}
        style={{
          width: "100%",
          willChange: "transform, opacity",
          display: "block",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
