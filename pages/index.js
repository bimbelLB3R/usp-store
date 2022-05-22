import Head from 'next/head';

import Intro from '../components/Intro';
import Services from '../components/Services';
import { data } from '../data';
import Dokumentation from '../components/Dokumentation';

export default function Home({ services }) {
  return (
    <div className="">
      <Head>
        <title>USP-STORE</title>
        <meta
          name="description"
          content="Jual Kaos Polos dan sablonnya. Wilayah Tabalong dan sekitarnya."
        />
        <link rel="icon" href="/usp-logo.png" />
      </Head>
      <Intro />
      <Services services={services} />
      <Dokumentation />
    </div>
  );
}

// fetching data
export const getStaticProps = async () => {
  // data yang diambil adalah startTransition, bukan dr API shng tdk perlu await
  const services = data;
  return {
    props: { services },
  };
};
