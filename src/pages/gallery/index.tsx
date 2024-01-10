import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ref, get, child } from "firebase/database";
import { database } from "../../../firebase";
import Gallery from "@/components/ImageGallery";

// Define the expected data structure
interface GalleryItem {
  description: string;
  order: number;
  subtitle: string;
  title: string;
  type: string;
  url: string;
}

interface GalleryProps {
  banner: string;
  content: { [key: string]: GalleryItem };
}

export default function Index() {
  const [data, setData] = useState<GalleryProps | null>(null);
  const [galleryData, setGalleryData] = useState<any[]>([]);

  useEffect(() => {
    const dbRef = ref(database);
    get(child(dbRef, "/gallery"))
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

  useEffect(() => {
    if (data && data.content) {
      const temp = Object.values(data.content).map((item) => ({
        id: item.order,
        original: item.url,
        thumbnail: item.url,
      }));
      setGalleryData(temp.reverse());
    }
  }, [data]);

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
      <Gallery images={galleryData} />
    </motion.div>
  );
}
