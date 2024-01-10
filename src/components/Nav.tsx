import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCableCar } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { library } from "@fortawesome/fontawesome-svg-core";

// Initialize the FontAwesome library
library.add(faInstagram);

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

// Define a TypeScript interface for the props
interface NavProps {
  show: boolean;
  setShow: (show: boolean) => void; // Assuming setShow is a function that takes a boolean
}

export default function Nav({ show, setShow }: NavProps) {
  // Function to handle link click
  const handleLinkClick = () => setShow(!show);

  return (
    <motion.nav
      className="nav-mobile"
      animate={show ? "open" : "closed"}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="inner-nav">
        <ul>
          {/* List of navigation links */}
          {["/", "/portfolio", "/gallery", "/about", "/resume", "/contact"].map(
            (path, index) => (
              <li key={index}>
                <Link href={path} onClick={handleLinkClick}>
                  {path.toUpperCase().slice(1) || "HOME"}
                </Link>
              </li>
            )
          )}
          {/* Instagram link */}
          <li>
            <Link
              href="https://www.instagram.com/hashimoto_films"
              onClick={handleLinkClick}
            >
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </Link>
          </li>
          <li>
            <Link
              href="https://gondola.cc/Hashimoto_Films"
              onClick={handleLinkClick}
            >
              <FontAwesomeIcon icon={faCableCar} />
            </Link>
          </li>
        </ul>
      </motion.div>
    </motion.nav>
  );
}
