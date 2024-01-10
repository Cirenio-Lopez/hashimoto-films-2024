import { useState } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";
import "../styles/globals.scss";
import { AnimatePresence } from "framer-motion";
import Loading from "../components/Loading";

// Components
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>
          Hashimoto Films
          {router.pathname == "/"
            ? ""
            : router.pathname == "/portfolio"
            ? " - Portfolio"
            : router.pathname == "/gallery"
            ? " - Gallery"
            : router.pathname == "/about"
            ? " - About"
            : router.pathname == "/resume"
            ? " - Resume"
            : router.pathname == "/contact"
            ? " - Contact"
            : router.pathname == "/404"
            ? " - 404"
            : ""}
        </title>
        <meta
          name="description"
          content="Hashimoto Films: Rising Sports Videographer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@hashimotofilms" />
        <meta name="twitter:title" content="Hashimoto Films" />
        <meta name="twitter:description" content="Rising Sports Videographer" />
        <meta
          name="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/hashimoto-films.appspot.com/o/home%2FGNO00250%205.jpg?alt=media&token=8d7a41c9-ff3a-4d13-bbaf-18daf6f7fcb2"
        />
      </Head>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loading
            key="loading"
            setIsLoading={setIsLoading}
            location={router.pathname}
          />
        ) : (
          <>
            <Header />
            <Banner
              location={router.pathname}
              key={"Banner " + router.pathname}
            />
            <AnimatePresence mode="wait">
              <Component
                {...pageProps}
                key={router.pathname}
                location={router.pathname}
              />
            </AnimatePresence>
            <Footer />
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default MyApp;
