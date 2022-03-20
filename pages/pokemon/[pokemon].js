import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from './Pokemon.module.css';

function Pokemon({ pokemon }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>
}

  return (
    <>
      <Head>
        <title>Pokemon: {pokemon?.name}</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        ></meta>
      </Head>
      <div className={styles.container}>
        Welcome to the about page, {pokemon?.name}!
        <Image className={styles.image} src={pokemon?.sprites.front_default} alt={pokemon?.name} />
      </div>
    </>
  );
}

export default Pokemon;

export async function getStaticProps({ params }) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`);
  const pokemon = await res.json();
  console.log(params.pokemon)

  return {
    props: {
      pokemon,
    },
  };
}


export async function getStaticPaths() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
  const pokemon = await res.json();

  let paths = pokemon.results.map(p => {
    return `/pokemon/${p.name}`
  })

  return {
    paths,
    fallback: true,
  }
}
