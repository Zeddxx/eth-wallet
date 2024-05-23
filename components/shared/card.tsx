"use client";

import { IResults } from "@/types";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa6";
import { CardVariants } from "@/animations";
import CardModal from "@/components/shared/card-modal";

interface CardProps {
  item: IResults | undefined;
}

const Card = ({ item }: CardProps) => {
  const [showOverlay, setShowOverlay] = React.useState(false);
  const [showModal, setShowModal] = useState(false);

  if (!item) return null;

  return (
    <>
      <motion.div
        onHoverStart={() => setShowOverlay(true)}
        onHoverEnd={() => setShowOverlay(false)}
        className="w-full text-sm border border-muted rounded overflow-hidden relative"
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
        {showOverlay && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 flex justify-center items-center"
          >
            <div className="absolute bg-black-100 pointer-events-none opacity-50 h-full w-full" />
            <motion.h1
              onClick={() => setShowModal(true)}
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
              className="bg-white cursor-pointer font-semibold text-sm z-10 py-2 px-3 flex items-center rounded-full gap-[0.5ch] hover:opacity-75"
            >
              <span className="text-black">View</span>
              <FaEye className="text-black" />
            </motion.h1>
          </motion.div>
        )}
        <div className="w-full sm:min-h-44 min-h-32 bg-muted"></div>
        <div className="space-y-3 p-4">
          <p onClick={() => setShowModal(true)} className="p-2 rounded border border-muted w-fit cursor-pointer">
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

      {showModal && (
        <CardModal
          item={item}
          setShowModal={setShowModal}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};
export default Card;
