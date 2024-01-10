//React
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
//Framer Motion
import { Variants, motion } from "framer-motion";
//Database
import { ref, get, child } from "firebase/database";
import { database } from "../../firebase";

interface Data {
  top_left: string;
  middle_left: string;
  bottom_left: string;
  top_center: string;
  middle_center: string;
  bottom_center: string;
  top_right: string;
  middle_right: string;
  bottom_right: string;
}

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
      duration: 3,
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
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const dbRef = ref(database);
    get(child(dbRef, "loading"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setData(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Function to get video URL based on the id
  const getVideoUrl = (id: number) => {
    if (!data) return ""; // Return empty string if data is not available
    switch (id) {
      case 1:
        return data.top_left;
      case 2:
        return data.middle_left;
      case 3:
        return data.bottom_left;
      case 4:
        return data.top_center;
      case 5:
        return data.middle_center;
      case 6:
        return data.bottom_center;
      case 7:
        return data.top_right;
      case 8:
        return data.middle_right;
      case 9:
        return data.bottom_right;
      default:
        return ""; // Default case
    }
  };

  return (
    <motion.div className={`video-block video-${id}`} variants={variants}>
      <motion.video
        src={getVideoUrl(id)} // Changed to dynamic source from data
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
