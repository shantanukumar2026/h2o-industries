"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypewriterHeadingProps {
  text: string;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function TypewriterHeading({ text, delay = 0, className = "", style = {} }: TypewriterHeadingProps) {
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  const chars = text.split("");

  return (
    <div className={className} style={{ display: "inline-block", ...style }}>
      {chars.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isTyping ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.1, delay: index * 0.05 }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        style={{
          display: "inline-block",
          width: "4px",
          height: "1em",
          background: "currentColor",
          marginLeft: "2px",
          verticalAlign: "middle",
        }}
      />
    </div>
  );
}
