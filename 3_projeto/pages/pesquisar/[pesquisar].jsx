import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Search() {
  const router = useRouter();
  const { query } = router.query;

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Aqui você pode fazer uma requisição à API para buscar os resultados da pesquisa com base no valor "query"
    // Atualize o estado "searchResults" com os resultados encontrados
  }, [query]);

  // Restante do código para exibir os resultados da pesquisa...
  return (
    <h1>Teste</h1>
  )
}
