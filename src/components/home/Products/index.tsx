'use client';

import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation'; 
import Cards from "./cards";
import Search from "@/components/search"; 

type Produto = {
  image: string;
  title: string;
  price: number;
  description: string | null;
  id: number;
};

type Produtos = {
  produtos: Produto[];
  title: string;
};

export default function Products({ produtos, title }: Produtos) {
  const ITEMS_PER_PAGE = 8;
  const searchParams = useSearchParams(); 
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');  

  useEffect(() => {
    const search = searchParams.get('search') || '';
    setSearchQuery(search);
  }, [searchParams]);

  const produtosFiltrados = produtos.filter((produto) =>
    produto.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexInicial = (paginaAtual - 1) * ITEMS_PER_PAGE;
  const indexFinal = indexInicial + ITEMS_PER_PAGE;

  const produtosExibidos = produtosFiltrados.slice(indexInicial, indexFinal);


  const totalPaginas = Math.ceil(produtosFiltrados.length / ITEMS_PER_PAGE);

  // Função para mudar de página
  const mudarPagina = (novaPagina: number) => {
    if (novaPagina >= 1 && novaPagina <= totalPaginas) {
      setPaginaAtual(novaPagina);
    }
  };

  return (
    <div className="flex justify-center flex-col items-center gap-20 py-12">
      <p className="text-verde text-2xl font-semibold">{title}</p>

      {/* Componente de busca */}
      {/*<Search onSearch={setSearchQuery} /> REMOVIDO PARA A BUSCA FICAR SÓ NO HEADER */}

      <div className="flex flex-wrap gap-8 justify-center max-w-max">
        {produtosExibidos.map((produto, index) => (
          <Cards id={produto.id} key={index} image={produto.image} title={produto.title} price={produto.price} />
        ))}
      </div>

      {/* Paginação */}
      {totalPaginas > 1 && (
        <div className="flex justify-center mt-6 space-x-4">
          <button
            className={`text-verde ${paginaAtual === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => mudarPagina(paginaAtual - 1)}
            disabled={paginaAtual === 1}
          >
            &lt;
          </button>

          {Array.from({ length: totalPaginas }, (_, index) => (
            <button
              key={index}
              className={`text-verde ${paginaAtual === index + 1 ? 'font-bold underline' : ''}`}
              onClick={() => mudarPagina(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            className={`text-verde ${paginaAtual === totalPaginas ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => mudarPagina(paginaAtual + 1)}
            disabled={paginaAtual === totalPaginas}
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
}
