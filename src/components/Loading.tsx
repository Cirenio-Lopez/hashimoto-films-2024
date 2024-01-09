import React, { Dispatch, SetStateAction } from "react";
import { Variants, motion } from "framer-motion";

// Variants
const container = {
  show: {
    transition: { staggerChildren: 0.35 },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      // Use a valid cubic-bezier function
      ease: [0.6, 0.01, 0.5, 0.95], // Adjusted values
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const Loading = ({
  setIsLoading,
  location,
}: {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  location: string;
}) => {
  const videoIds = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <div className="Loading">
      <motion.div
        className="Loading-inner"
        layoutId={location}
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
        onAnimationComplete={() => setIsLoading(false)}
      >
        {videoIds.map((id) => (
          <VideoBlock key={id} id={id} variants={item} />
        ))}
      </motion.div>
    </div>
  );
};

const VideoBlock = ({ id, variants }: { id: number; variants: Variants }) => {
  return (
    <motion.div className={`video-block video-${id}`} variants={variants}>
      <motion.video
        src={`/videos/loading_video_${id}.webm`}
        autoPlay
        muted
        loop
        playsInline
        layoutId={`main-video-${id}`}
        className={`video-${id}`}
        aria-label="Video that plays while webpage loads"
      />
    </motion.div>
  );
};

export default Loading;
