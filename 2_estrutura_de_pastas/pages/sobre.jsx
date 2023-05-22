import Link from "next/link";
import styles from '../styles/Home.module.css';

export default function Sobre() {
    return (
        <div className={styles.container}>
            <h1>Tela de produtos</h1>
            <ul>
                <li>
                    <Link href="/">Voltar</Link>
                </li>
            </ul>  
        </div>
    );
};