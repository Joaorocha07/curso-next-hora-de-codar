import styles from '../../styles/Sobre.module.css';

import Image from 'next/image';

export default function Sobre() {
    return (
        <div className={styles.sobre}>
            <h1>Sobre o projeto</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit quaerat pariatur iure delectus dicta saepe repellendus omnis corporis provident! Nemo esse beatae quae, totam natus voluptate consequuntur magni? Labore, quos?
            </p>
            <Image 
                src="/images/charizard.png"
                width={300}
                height={300}
                alt="Charizard"
            />
        </div>
    )
}