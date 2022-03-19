import Head from "next/head";
import Link from "next/link";
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
    router.push(paths[Math.floor(Math.random() * paths.length)]);
  };

  if (router.isFallback) {
    return <div>Loading...</div>
}

  return (
    <>
      <Head>
        <title>My Next.js site</title>
      </Head>
      <div>Welcome Explorer!</div>
      <Link href="/blog">
        <a>Visit the Blog Page!</a>
      </Link>
      <button onClick={handleClick}>Get a random Pokemon!</button>
    </>
  );
}

export default Home;
