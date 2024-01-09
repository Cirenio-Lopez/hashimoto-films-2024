import { useState } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
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
  );
}

export default MyApp;
