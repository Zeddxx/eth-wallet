"use client";

/**
 * A Additional Details Modal I have'nt used shadcn ui.
 */

import { IResults } from "@/types";
import { motion } from "framer-motion";

interface ModalProps {
  item: IResults;
  onClose: () => void;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardModal = ({ item, onClose, setShowModal }: ModalProps) => {
  return (
    <div
      onClick={() => setShowModal(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="bg-black border border-muted p-6 rounded-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
      >
        <h2 className="text-lg font-semibold">Transaction Details</h2>
        <p>
          <strong>From:</strong> {item.from}
        </p>
        <p>
          <strong>To:</strong> {item.to}
        </p>
        <p>
          <strong>Amount:</strong> {item.value}
        </p>
        <p>
          <strong>Block Number:</strong> {item.blockNumber}
        </p>
        <p>
          <strong>Timestamp:</strong> {item.timeStamp}
        </p>
        <p>
          <strong>Hash:</strong> {item.hash}
        </p>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};
export default CardModal;
