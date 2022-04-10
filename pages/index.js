import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <meta name="keywords" content="html,css,js,nextJS,reactJS" />
        <meta name="description" content="SHPX | ecommerce landing page template by oussama ayadi" />
        <meta name="author" content="oussama ayadi" />
        <meta name="publisher" content="oussama ayadi" />
        <meta name="copyright" content="oussama ayadi" />
        <meta property="og:image" content="./assets/images/previewImage.png" />
        <meta property="og:title" content="SHPX | ecommerce landing page" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="SHPX | ecommerce landing page " />
        <meta
          name="twitter:description"
          content=" SHPX | ecommerce landing page. by oussama ayadi"
        />
        <meta name="twitter:image" content="./assets/images/previewImage.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>SHPX | ecommerce landing page</title>
      </Head>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
