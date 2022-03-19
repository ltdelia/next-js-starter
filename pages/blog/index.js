import Head from 'next/head';
import Link from 'next/link';
function Blog() {
  return (
    <>
        <Head>
            <title>My Blog</title>
        </Head>
      <div>Welcome Blog Reader!</div>
      <Link href="/">
        <a>Go Back Home</a>
      </Link>
    </>
  );
}

export default Blog;
