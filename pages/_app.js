import Sidebar from "../components/Sidebar";
import "../styles/globals.css";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <Sidebar>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </Sidebar>
    </>
  );
}

export default MyApp;
