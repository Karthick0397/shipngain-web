/* eslint-disable */
import React, { useEffect } from "react";
// import Script from "next/script";
import Head from "next/head";
import "../styles/globals.css";
import { loop } from "../styles/iconify.js";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    loop();
  }, []);
  return (
    <>
      <Head>
        <title>Ship n Gain</title>
        <script src="https://code.iconify.design/1/1.0.3/iconify.min.js" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
