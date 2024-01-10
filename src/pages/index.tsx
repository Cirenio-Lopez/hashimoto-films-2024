//React
import { useEffect, useState } from "react";
//Framer Motion
import { motion } from "framer-motion";
//Database
import { ref, get, child } from "firebase/database";
import { database } from "../../firebase";

interface Data {
  image: {
    url: string;
  };
}

export default function Index(props: any) {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const dbRef = ref(database);
    get(child(dbRef, "home"))
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
        <motion.img src={data?.image.url} />
      </motion.div>
    </>
  );
}
