import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ref, get, child } from "firebase/database";
import { database } from "../../../firebase";
import MultiMedia from "@/components/MultiMedia";

// Define the expected data structure
interface MediaData {
  [key: string]: {
    url: string;
    type: string;
  };
}

export default function Index() {
  const [data, setData] = useState<MediaData | null>(null);

  useEffect(() => {
    const dbRef = ref(database);
    get(child(dbRef, "/portfolio/content"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setData(snapshot.val() as MediaData);
          console.log(data);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
    >
      <MultiMedia data={data} />
    </motion.div>
  );
}
