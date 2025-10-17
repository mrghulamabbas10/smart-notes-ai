"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function DeleteConfirmPopup({ show, onClose, onConfirm }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed w-full inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotateX: 10 }}
            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg p-6 w-[90%] max-w-sm text-center"
          >
            <h2 className="text-lg font-semibold mb-2 text-gray-900">
              Are you sure you want to delete this item?
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              This action cannot be undone. Once deleted, the data will be
              permanently removed.
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  onConfirm();
                  onClose();
                }}
                className="px-5 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
              >
                Yes, Delete
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
