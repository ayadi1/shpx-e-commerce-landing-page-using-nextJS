import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>SHPX | ecommerce landing page</title>
      </Head>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
