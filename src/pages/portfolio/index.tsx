import { motion } from "framer-motion";

export default function index() {
  return (
    <motion.div
      className="transition-image final"
      initial={{ y: 800, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 800, opacity: 0 }}
      transition={{
        ease: [0.6, 0.01, 0.05, 0.95],
        duration: 1.6,
      }}
    ></motion.div>
  );
}
