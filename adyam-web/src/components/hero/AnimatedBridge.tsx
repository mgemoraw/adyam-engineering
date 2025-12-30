import { motion } from "framer-motion";
import { BridgeSVG } from "./EngineeringSVGs";

export const AnimatedBridge = () => (
  <motion.div
    className="absolute inset-0 text-indigo-300/40"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <motion.div
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <BridgeSVG />
    </motion.div>
  </motion.div>
);
