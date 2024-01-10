import React, { useState } from "react";
import Link from "next/link";
import Nav from "./Nav"; // Ensure this is the path to your Nav component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCableCar } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { library } from "@fortawesome/fontawesome-svg-core";

// Initialize FontAwesome library
library.add(faInstagram, faCableCar);

const Header = () => {
  // State to control the visibility of the mobile navigation menu
  const [show, setShow] = useState(false);

  return (
    <motion.div
      className="header"
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: [0.6, 0.01, 0.05, 0.95],
        duration: 1.6,
      }}
      key="header"
    >
      <div className="header-inner">
        {/* Logo Section */}
        <div className="logo" onClick={() => setShow(false)}>
          <Link href="/">Hashimoto Films</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav">
          <ul>
            <li>
              <Link href="/portfolio">Portfolio (Film)</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery (Photography)</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/resume">Resume</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/hashimoto_films">
                <FontAwesomeIcon
                  icon={["fab", "instagram"]}
                  style={{ fontSize: "28px" }}
                />
              </Link>
            </li>
            <li>
              <Link href="https://gondola.cc/Hashimoto_Films">
                <FontAwesomeIcon
                  icon={faCableCar}
                  style={{ fontSize: "28px" }}
                />
              </Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger Menu */}
        <motion.div
          className="hamburger-menu"
          onClick={() => setShow(!show)}
          whileTap={{ scale: 0.9 }}
        >
          <span></span>
          <span></span>
        </motion.div>
      </div>

      {/* Mobile Navigation */}
      <Nav show={show} setShow={setShow} />
    </motion.div>
  );
};

export default Header;
