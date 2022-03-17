import Head from 'next/head';
import { useRouter } from 'next/router';


function Home() {

    const router = useRouter() 

    const handleClick = (ev) => {
        ev.preventDefault();
        router.push('/about');
    }
  return (
    <>
        <Head>
            <title>My Next.js site</title>
        </Head>
      <div>Welcome Explorer!</div>
      <button onClick={handleClick}>Click Me!</button>
    </>
  );
}

export default Home;
