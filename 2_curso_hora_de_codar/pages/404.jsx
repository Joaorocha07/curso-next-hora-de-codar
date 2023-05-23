import Link from 'next/link';

export default function NotFound() {
    return (
        <>
            <h1>401</h1>
            <p>Parece que está página não existe!</p>
            <Link href="/">Voltar</Link>
        </>
    )
}