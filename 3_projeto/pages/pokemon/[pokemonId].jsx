import styles from './Pokemon.module.css'

import Image from 'next/image';

// import { useEffect } from 'react';
import { useRouter } from 'next/router';

export const getStaticPaths = async() => {
    const maxPokemons = 251;
    const api = `https://pokeapi.co/api/v2/pokemon`;
  
    const res = await fetch(`${api}/?limit=${maxPokemons}`);
    const data = await res.json();

    const paths = data.results.map((pokemon, index) => {
        return {
            params: {pokemonId: (index).toString()},
        }
    })

    return {
        paths,
        fallback: true,
    }
}

export const getStaticProps = async (context) => {
    const id = parseInt(context.params.pokemonId); // Convertendo para um número inteiro
  
    if (isNaN(id)) {
      // Se o id não for um número válido, retorna null para indicar que a página não foi encontrada
      return {
        props: {
          pokemon: null,
        },
      };
    }
  
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  
    if (!res.ok) {
      // Se a requisição não retornar um status de sucesso, retorna null para indicar que a página não foi encontrada
      return {
        props: {
          pokemon: null,
        },
      };
    }
  
    const data = await res.json();
  
    return {
      props: {
        pokemon: data,
      },
    };
  };
export default function Pokemon({ pokemon }) {
    const router = useRouter();

    if(router.isFallback) {
        return (
            <div className={styles.carregando}>
                <div className={styles.pokeball}></div>
            </div>
        )
    } 

    // useEffect(() => {
    //     if (!pokemon) {
    //       // Redirecionar para a página personalizada quando o Pokémon não for encontrado
    //       router.push('/pagina-nao-encontrada');
    //     }
    //   }, [pokemon, router]);
    
    //   if (!pokemon) {
    //     // Renderizar uma mensagem de "Pokémon não encontrado"
    //     return (
    //         <div className={styles.carregando}>
    //             <div className={styles.pokeball}></div> 
    //         </div>
    //     );
    //   }
    return (
        <div className={styles.fundo}>
        <div className={styles.pokemon_container}>
            <h1 className={styles.title}>{pokemon.name}</h1>
            <Image 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                width={200}
                height={200}
                alt={pokemon.name}
            />
            <div>
                <h3>Número</h3>
                <p>#{pokemon.id}</p>
            </div>
            <div>
                <h3>Tipo</h3>
                <div className={styles.types_container}>
                    {pokemon.types.map((item, index) => (
                        <span key={index} className={`${styles.type} ${styles['type_' + item.type.name]}`}>{item.type.name}</span>
                    ))}
                </div>
            </div>
            <div className={styles.data_container}>
                <div className={styles.data_height}>
                    <h4>Altura</h4>
                    <p>{pokemon.height * 10} cm</p>
                </div>
                <div className={styles.data_weight}>
                    <h4>Peso</h4>
                    <p>{pokemon.weight / 10} kg</p>
                </div>
            </div>
        </div>
        </div>
    )
}