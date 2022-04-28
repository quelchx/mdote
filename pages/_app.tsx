import React, { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import AOS from "aos";
import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
} from "@chakra-ui/react";

import "aos/dist/aos.css";
import "../styles/globals.css";
import theme from "../styles/theme";
interface ChakraProps {
  cookies: any;
  children: React.ReactNode;
}

function App({ Component, pageProps, cookies }: AppProps & ChakraProps) {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    setMounted(true);
  }, []);

  const colorModeManager =
    typeof cookies === "string"
      ? cookieStorageManager(cookies)
      : localStorageManager;

  return (
    <>
      {isMounted && (
        <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
          <Component {...pageProps} />
        </ChakraProvider>
      )}
    </>
  );
}

export default App;
