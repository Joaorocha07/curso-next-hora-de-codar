import styles from './Card.module.css'

import Image from "next/image";
import Link from "next/link";

export default function Card({ pokemon }) {
    return (
        <div className={styles.card}>
            <Image 
                // src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                width={120}
                height={120}
                alt={pokemon.name}
            />
            <p>#{pokemon.id}</p>
            <h3>{pokemon.name}</h3>
            <Link href={`/pokemon/${pokemon.id}`}>Detalhes</Link>
        </div>
    );
};