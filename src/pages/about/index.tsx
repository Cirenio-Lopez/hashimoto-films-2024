import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ref, get, child } from "firebase/database";
import { database } from "../../../firebase";

interface AboutData {
  banner: {
    bannerCenter: string;
  };
  description: string;
  image: string;
  subtitle: string;
  title: string;
}
export default function Index() {
  const [data, setData] = useState<AboutData>();
  useEffect(() => {
    const dbRef = ref(database);
    get(child(dbRef, "/about"))
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

  return (
    <>
      <div className="transition-image about-wrapper">
        <motion.div
          initial={{ y: 800, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            ease: [0.6, 0.01, 0.05, 0.95],
            duration: 1.6,
          }}
          exit={{ y: 800, opacity: 0 }}
          className="about"
        >
          <div className="img-container">
            <motion.img src={data?.image} />
          </div>
          <div className="text-cover">
            <p className="subtitle">{data?.subtitle}</p>
            <h2 className="title">{data?.title}</h2>
            <p className="description">{data?.description}</p>
          </div>
        </motion.div>
      </div>
    </>
  );
}
