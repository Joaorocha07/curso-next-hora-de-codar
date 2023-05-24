import styles from '../../styles/Sobre.module.css';

import Image from 'next/image';

export default function Sobre() {
    return (
        <div className={styles.sobre}>
            <h1>Sobre o projeto</h1>
            <p>
                O Projeto PokeNext é uma plataforma interativa que permite aos usuários explorar o fascinante universo dos Pokémon e descobrir informações detalhadas sobre seus personagens favoritos. Com uma extensa coleção de mais de 200 Pokémon, o projeto oferece uma experiência imersiva e educativa para fãs de todas as idades.
            </p>
            <Image 
                src="/images/charizard.png"
                width={200}
                height={200}
                alt="Charizard"
            />
        </div>
    )
}