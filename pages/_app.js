import "../css/index.css";
import Head from "next/head";
import Layout from "@components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Ferdiansyah Rahman - IT Support</title>
        <meta
          name="Description"
          content="My Personal Website and Portfolio. Built with Nextjs and Tailwind CSS."
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
