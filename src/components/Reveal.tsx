import type { PropsWithChildren } from "react";
import { motion, useReducedMotion } from "motion/react";

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  amount?: number;
  direction?: "up" | "left" | "right";
}>;

export function Reveal({ children, className = "", delay = 0, amount = 0.2, direction = "up" }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const hidden = direction === "left"
    ? { opacity: 0, x: -72, scale: 0.985 }
    : direction === "right"
      ? { opacity: 0, x: 72, scale: 0.985 }
      : { opacity: 0, y: 26 };
  const visible = direction === "up"
    ? { opacity: 1, y: 0 }
    : { opacity: 1, x: 0, scale: 1 };

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : hidden}
      whileInView={visible}
      viewport={{ once: true, amount }}
      transition={direction === "up"
        ? { duration: 0.62, delay, ease: [0.16, 1, 0.3, 1] }
        : { type: "spring", stiffness: 92, damping: 17, mass: 0.82, delay }}
    >
      {children}
    </motion.div>
  );
}
