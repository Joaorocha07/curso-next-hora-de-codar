import Link from "next/link";
import styles from './NavBar.module.css';

export default function NavBar() {
    return (
        <ul className={styles.menu}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/sobre"> Sobre</Link></li>
        </ul>
    );
};