import { MotionProps } from "framer-motion";

export const heading = {
  initial: {
    y: 40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  transition: {
    duration: 1,
  },
} satisfies MotionProps;

export const navbar = {
  initial: {
    y: -40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  transition: {
    duration: 1,
    ease: "easeInOut",
  },
} satisfies MotionProps;
