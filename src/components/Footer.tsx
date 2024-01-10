//React
import { useEffect, useState } from "react";
//Next
import Link from "next/link";
//Firebase
import { ref, get, child } from "firebase/database";
import { database } from "../../firebase";

interface Data {
  author: string;
  authorLink: string;
  contactNumber: string;
  copyright: string;
}

const Footer = () => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const dbRef = ref(database);
    get(child(dbRef, "/footer"))
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
    <footer className="footer">
      <div className="footer-content">
        <span className="footer-phone">
          <Link href={`tel:${data?.contactNumber.replace(/\D/g, "")}`}>
            {data?.contactNumber}
          </Link>
        </span>
        <div className="footer-copy">
          <span>{data?.copyright + " "}</span>
          <span>
            Created by <Link href="https://www.cirenio.net/">Cirenio</Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
