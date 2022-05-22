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
        <meta property="og:title" content="Hayuk Kak diorder" />
        <meta property="og:url" content="https://usp-store.vercel.app" />
        <meta
          property="og:description"
          content="Jual Kaos Polos dan sablonnya. Wilayah Tabalong dan sekitarnya."
        />
        <meta
          property="og:image"
          itemProp="image"
          content="https://scontent.fbpn4-1.fna.fbcdn.net/v/t1.6435-9/51204976_399218204161191_4920827477946793984_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6svECc43Ic8AX-XMpLh&_nc_ht=scontent.fbpn4-1.fna&oh=00_AT9ilimDq3CpTy0FRQ4vrjQWcETt7C8y5BZMf7TRyRfrdw&oe=62B197DE"
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
