import styles from './NavBar.module.css';

import { useState } from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import { Alert } from '../Alert';

export default function NavBar() {
    const router = useRouter();
    
    const [searchValue, setSearchValue] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const handleSearch = async() => {
        const maxPokemons = 1000;

        const api = "https://pokeapi.co/api/v2/pokemon";

        const res = await fetch(`${api}/?limit=${maxPokemons}`);
        const data = await res.json();
        const results = data.results;

        if (results.length > 0) {
            const pokemonNames = results.map((pokemon) => pokemon.name);

            if (searchValue !== "" && pokemonNames.includes(searchValue.toLowerCase())) {
                console.log("Pokémon encontrado: ", searchValue);
                const selectedPokemon = results.find((pokemon) => pokemon.name === searchValue.toLowerCase());
                const pokemonId = selectedPokemon.url.split("/")[6];
                router.push(`/pokemon/${pokemonId}`);

            } else if (searchValue == "") {
                setAlertMessage("Digite um valor para a pesquisa");
                setShowAlert(true);

            } else {
                setAlertMessage("Nenhum Pokémon foi encontrado!");
                setShowAlert(true);
            }

        } else {
            console.log("Nenhum Pokemon Encontrado")
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          handleSearch();
        }
      };

    const closeAlert = () => {
        setShowAlert(false);
    };

    return(
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">
                    <Image 
                        src="/images/pokeball.png"
                        width={30}
                        height={30}
                        alt="PokeNext"
                    />
                    <h1>PokeNext</h1>
                </Link>
            </div>
            {showAlert && <Alert message={alertMessage} onClose={closeAlert} />}
            <div className={styles.searchBar}>
                <input 
                    type="text" 
                    placeholder="Pesquisar Pokémon" 
                    value={searchValue}
                    onKeyPress={handleKeyPress}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <button type="button" onClick={handleSearch}>
                    <Image
                        src="/images/pokemon.png"
                        width={40}
                        height={30}
                        alt="Search"
                    />
                </button>
            </div>
            <ul className={styles.menu}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/Sobre">Sobre</Link></li>
                <li><Link href="/404">Clique Aqui</Link></li>
            </ul>
        </nav>
    )
}