import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '../utils/trpc';

const Home: NextPage = () => {
  const { data } = trpc.useQuery(['waitlist.getAll']);

  console.log('waitlist', data);

  return (
    <>
      <Head>
        <title>flushmail</title>
        <meta name="description" content="flushmail" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto">
        <div>flushmail</div>
      </main>
    </>
  );
};

export default Home;
