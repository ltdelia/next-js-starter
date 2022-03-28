import Head from "next/head";
import Link from "next/link";

function Home() {
  return (
    <>
      <Head>
        <title>My Next.js site</title>
      </Head>
      <div>Welcome Explorer!</div>
      <Link href="/blog">
        <a>Visit the Blog Page!</a>
      </Link>
    </>
  );
}

export default Home;
