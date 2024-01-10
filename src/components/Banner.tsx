import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// Variants

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
  exit: { y: 800, opacity: 0 },
};

const letterAnimation = {
  initial: {
    y: 800,
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
  exit: { y: 800, opacity: 0 },
};

const Banner = (props: any) => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 1800);
  }, []);

  const renderBannerContent = () => {
    if (props.location === "/" || props.location === "/resume") {
      return (
        <>
          <BannerRowTop title={props.location === "/" ? "Film" : "Resume"} />
          {props.location === "/" && (
            <BannerRowCenter
              title={"Hashimoto Films"}
              playMarquee={playMarquee}
            />
          )}
          {props.location === "/" && <BannerRowBottom title={"Photo"} />}
        </>
      );
    } else {
      return (
        <BannerRowCenter
          title={
            props.location.charAt(1).toUpperCase() + props.location.slice(2)
          }
          playMarquee={playMarquee}
        />
      );
    }
  };

  return (
    <motion.div className="banner" variants={banner} key="banner-wrapper">
      {renderBannerContent()}
    </motion.div>
  );
};

const AnimatedLetters = ({
  title,
  disabled,
}: {
  title: string;
  disabled?: boolean;
}) => (
  <motion.span
    className="row-title"
    variants={disabled ? undefined : banner}
    initial="initial"
    animate="animate"
    key="animatedLetters"
  >
    {[...title].map((letter, index) => (
      <motion.span
        className="row-letter"
        variants={letterAnimation}
        key={index}
      >
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowTop = ({ title }: { title: string }) => {
  return (
    <div className={"banner-row"}>
      <div className="row-col">
        <AnimatedLetters title={title} />
      </div>
      <motion.div
        className="row-col"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", delay: 0.4 }}
        key="top-banner"
      >
        {title === "Film" ? (
          <span className="row-message">Storytelling within Sports.</span>
        ) : (
          <></>
        )}
      </motion.div>
    </div>
  );
};

const BannerRowBottom = ({ title }: { title: string }) => {
  return (
    <div className={"banner-row center"}>
      <div className="row-col bottom">
        <AnimatedLetters title={title} />
      </div>
    </div>
  );
};

const BannerRowCenter = ({
  title,
  playMarquee,
}: {
  title: string;
  playMarquee: boolean;
}) => {
  return (
    <div className={`banner-row marquee  ${playMarquee && "animate"}`}>
      <div className="marquee__inner">
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} disabled />
      </div>
    </div>
  );
};

export default Banner;
