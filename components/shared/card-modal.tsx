"use client";

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
        className="bg-black border border-muted p-6 rounded-lg sm:max-w-lg max-w-sm"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
      >
        <h2 className="text-xl font-semibold">Transaction Details</h2>
        <div className="w-full text-wrap">
          <p className="truncate w-full text-sm mt-4">
            <strong>From:</strong> {item.from}
          </p>
          <p className="truncate w-full text-sm">
            <strong>To:</strong> {item.to}
          </p>
          <p className="truncate w-full text-sm">
            <strong>Amount:</strong> {item.value}
          </p>
          <p className="truncate w-full text-sm">
            <strong>Status:</strong> {item.txreceipt_status}
          </p>
          <p className="truncate w-full text-sm">
            <strong>Timestamp:</strong> {item.timeStamp}
          </p>
          <p className="truncate w-full text-sm">
            <strong>Hash:</strong> {item.hash}
          </p>
        </div>
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
