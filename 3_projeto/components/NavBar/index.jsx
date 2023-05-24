import styles from './NavBar.module.css';

import { useState } from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
    const router = useRouter();
    
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (event) => {
        if (event.key === 'Enter' && searchValue.trim() !== '') {
          router.push(`/pesquisar?query=${encodeURIComponent(searchValue)}`);
        }
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
            <div className={styles.searchBar}>
                <input 
                    type="text" 
                    placeholder="Pesquisar Pokémon" 
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onKeyDown={handleSearch}
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
            </ul>
        </nav>
    )
}