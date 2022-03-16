import Head from "next/head";

function About({ pokemon }) {
  return (
    <>
      <Head>
        <title>Pokemon: {pokemon?.name}</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        ></meta>
      </Head>
      <div>
        Welcome to the about page, {pokemon?.name}!
        <img src={pokemon?.sprites.front_default} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/misdreavus");
  const pokemon = await res.json();

  return {
    props: {
      pokemon,
    },
  };
}

export default About;
