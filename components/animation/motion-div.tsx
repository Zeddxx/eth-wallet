'use client';

import { CardVariants } from "@/animations";
import { MotionProps, motion } from "framer-motion";

interface Props extends MotionProps {
  children: React.ReactNode;
}

const MotionDiv: React.FC<Props> = ({ children, ...props }) => {
  return (
    <motion.div
      variants={CardVariants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: 0.2,
        duration: 0.5,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
