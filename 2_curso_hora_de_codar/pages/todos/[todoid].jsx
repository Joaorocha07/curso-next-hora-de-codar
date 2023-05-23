import Link from 'next/link';

import { useRouter } from 'next/router';

export default function Todo() {
    const router = useRouter();

    const todoId = router.query.todoid
    
    return (
        <>
            <Link href="/">Voltar</Link>
            <h1>Exibindo o todo: {todoId}</h1>
            <p>Comentário: algo comentado...<Link href={`/todos/${todoId}/comments/1`}>Detalhes</Link></p>
            <p>Comentário: algo comentado...<Link href={`/todos/${todoId}/comments/2`}>Detalhes</Link></p>
            <p>Comentário: algo comentado...<Link href={`/todos/${todoId}/comments/3`}>Detalhes</Link></p>
        </>
    );
};