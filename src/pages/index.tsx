import { motion } from "framer-motion";
//Components

export default function Index(props: any) {
  return (
    <>
      <motion.div
        className="transition-image final"
        key={props.location}
        initial={{ y: 800, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          ease: [0.6, 0.01, 0.05, 0.95],
          duration: 1.6,
        }}
        exit={{ y: -800, opacity: 0 }}
      >
        <motion.img src="https://www.hashimotofilms.com/images/cover/index.jpg" />
      </motion.div>
    </>
  );
}
