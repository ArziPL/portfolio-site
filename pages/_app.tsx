import "../styles/css/output.css";
import type { AppProps } from "next/app";
import Navbar from "../components/organisms/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
