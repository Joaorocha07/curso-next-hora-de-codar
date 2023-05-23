import Link from 'next/link';

import { useRouter } from 'next/router';

export default function Comment() {
    const router = useRouter();

    const todoId = router.query.todoid

    const commentId = router.query.commentid

    console.log(commentId)
    
    return (
        <>
          <Link href={`/todos/${todoId}`}>Voltar</Link> 
          <h1>Exibindo o comentario: {commentId}</h1> 
          <p>Do Todo: {todoId}</p>
        </>
    );
};