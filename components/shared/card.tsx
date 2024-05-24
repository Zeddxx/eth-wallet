"use client";

import { IResults } from "@/types";
import React from "react";
import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa6";
import { CardVariants } from "@/animations";
import { useDispatch } from "react-redux";
import { setItem, setShowOverlay } from "@/redux/utils";

interface CardProps {
  item: IResults | undefined;
}

const Card = ({ item }: CardProps) => {
  const dispatch = useDispatch();

  if (!item) return null;

  return (
      <motion.div
      onClick={() => { dispatch(setItem(item)); dispatch(setShowOverlay(true))}}
        className="w-full cursor-pointer group text-sm border border-muted rounded overflow-hidden relative"
        variants={CardVariants}
        initial="hidden"
        animate="visible"
        transition={{
          delay: 0.1,
          ease: "easeInOut",
          duration: 0.5,
        }}
        viewport={{ amount: 0 }}
      >
        <div className="h-full w-full bg-black opacity-0 absolute z-20 group-hover:opacity-30" />
        <div className="w-full sm:min-h-44 min-h-32 bg-muted"></div>
        <div className="space-y-3 p-4">
          <p className="p-2 rounded border border-muted w-fit cursor-pointer">
            <FaEye />
          </p>
          <p className="w-full truncate" title={item.from}>
            From: {item.from}
          </p>
          <p className="w-full truncate" title={item.to}>
            To: {item.to}
          </p>
          <p className="w-full truncate" title={item.value}>
            Amount: {item.value}
          </p>
        </div>
      </motion.div>
  );
};
export default Card;
