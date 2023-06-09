import styles from '../styles/Home.module.css';

import Image from 'next/image';

import Card from '../components/Card';

export async function getStaticProps() {
  const maxPokemons = 50;

  const api = `https://pokeapi.co/api/v2/pokemon`;

  const res = await fetch(`${api}/?limit=${maxPokemons}`);

  const data = await res.json();

  data.results.forEach((item, index) => {
    item.id = index + 1
  })

  return {
    props: {
      pokemons: data.results,
    },
  }
}

export default function Home({ pokemons }) {
  return (
    <>
      <div className={styles.titulo_container}>
        <h1>Poke<span>Mon</span></h1>
        <Image 
          src="/images/pokeball.png"
          width={50}
          height={50}
          alt='PekeMon'
        />
      </div>
      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon) =>(
          <Card key={pokemon.id} pokemon={pokemon}/>
        ))}
      </div>
    </>
  )
}
