import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function Home() {
  const [paths, setPaths] = useState([]);

  useEffect(() => {
    if (paths.length === 0) {
      generatePaths();
    }
  });

  const generatePaths = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
    const pokemon = await res.json();

    let paths = pokemon.results.map((p) => {
      return `/pokemon/${p.name}`;
    });

    setPaths(paths);
  };

  const router = useRouter();

  const handleClick = (ev) => {
    ev.preventDefault();
    router.push('/blog');
    // router.push(paths[Math.floor(Math.random() * paths.length)]);
  };

  return (
    <>
      <Head>
        <title>My Next.js site</title>
      </Head>
      <div>Welcome Explorer!</div>
      <button onClick={handleClick}>Visit the Blog Page!</button>
    </>
  );
}

export default Home;
