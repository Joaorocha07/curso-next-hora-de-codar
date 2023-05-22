import Link from "next/link";
import styles from './NavBar.module.css';

export default function NavBar() {
    return (
        <ul className={styles.navbar}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/produtos">Produtos</Link></li>
            <li><Link href="/sobre">Sobre nós</Link></li>
        </ul>
    );
};