//React
import { useEffect, useState } from "react";
//Next
import Link from "next/link";
//Framer Motion
import { motion } from "framer-motion";
//Firebase
import { ref, get, child } from "firebase/database";
import { database } from "../../../firebase";

interface ContactData {
  banner: {
    bannerCenter: string;
  };
  content: {
    description: string;
    email: string;
    image: string;
    phone: string;
    title: string;
  };
}

export default function Index() {
  const [data, setData] = useState<ContactData>();
  useEffect(() => {
    const dbRef = ref(database);
    get(child(dbRef, "/contact"))
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
            <motion.img src={data?.content.image} />
          </div>
          <div className="text-cover">
            <h2 className="title">{data?.content.title}</h2>
            <p className="subtitle">{data?.content.description}</p>
            <Link className="link" href={`mailto:${data?.content.email}`}>
              {data?.content.email}
            </Link>
            <Link
              className="link"
              href={`tel:${data?.content.phone.replace(/\D/g, "")}`}
            >
              {data?.content.phone}
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
}
