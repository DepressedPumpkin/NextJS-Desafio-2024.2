'use client';

import { Eye, Trash2, SquarePen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Criar from '../crud/criar';
import Edit from '../crud/editar';
import Delete from '../crud/delete';

type Produto = {
  image: string;
  title: string;
  price: number;
  description: string | null;
  id: number;
};

type Produtos = {
  produtos: Produto[];
  reloadProdutos: () => void; // Função de recarregar produtos
};

export default function Tabela({ produtos, reloadProdutos }: Produtos) {
  const [isOpen, setisOpen] = useState(false);

  const abrirModal = () => {
    setisOpen(!isOpen);
  };

  const [produtoToDelete, setprodutoToDelete] = useState<Produto>();
    const [produtoToUpdate, setprodutoToUpdate] = useState<Produto>();
    const [modal, setModal] = useState('');

    const openModal = (modal: string) => {
        setModal(modal);
    }

    const deleteproduto = (produto: Produto) => {
        setprodutoToDelete(produto);
        openModal('delete');
    }

    const editproduto = (produto: Produto) => {
        setprodutoToUpdate(produto);
        openModal('edit');
    }

  const ITEMS_PER_PAGE = 8; // Número de itens por página

  const [paginaAtual, setPaginaAtual] = useState(1);

  // Cálculo dos índices de produtos para a página atual
  const indexInicial = (paginaAtual - 1) * ITEMS_PER_PAGE;
  const indexFinal = indexInicial + ITEMS_PER_PAGE;
  const produtosExibidos = produtos.slice(indexInicial, indexFinal);

  // Total de páginas
  const totalPaginas = Math.ceil(produtos.length / ITEMS_PER_PAGE);

  // Função para alterar a página
  const mudarPagina = (novaPagina: number) => {
    if (novaPagina >= 1 && novaPagina <= totalPaginas) {
      setPaginaAtual(novaPagina);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between flex-wrap">
        <h1 className="text-3xl font-bold text-[#d56a47] mb-6">Gerenciamento</h1>
        <button onClick={abrirModal} className="bg-[#334d35] text-white px-4 py-2 rounded-md mb-4">
          + Criar Produto
        </button>
        {isOpen && <Criar abrirModal={abrirModal} />}
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-[#d56a47]">
          <thead className="bg-bege">
            <tr className="border-b border-[#d56a47]">
              <th className="px-4 py-2 text-left text-[#d56a47]">Produto</th>
              <th className="hidden tb:table-cell px-4 py-2 text-left text-[#d56a47]">Preço</th>
              <th className="hidden tb:table-cell px-4 py-2 text-left text-[#d56a47]">Descrição</th>
              <th className="px-4 py-2 text-left text-[#d56a47] lg:w-1/6">Ação</th>
            </tr>
          </thead>
          <tbody>
            {produtosExibidos.map((produto) => (
              <tr key={produto.id} className="bg-bege odd:bg-[#E4DFD1] border-b border-[#d56a47]">
                <td className="px-4 py-2 flex items-center space-x-4">
                  <Image src={produto.image || "/image/eagles.png"} alt={produto.title} width={50} height={50} />
                  <span className="text-[#d56a47]">{produto.title}</span>
                </td>
                <td className="hidden tb:table-cell px-4 py-2">{produto.price}</td>
                <td className="hidden tb:table-cell px-4 py-2">{produto.description}</td>
                <td className="px-4 py-2 table-cell space-x-2 gap-2">
                  <Link href={`/produtos/${produto.id}`}>
                    <button className="text-[#000000] pl-2">
                      <Eye />
                    </button>
                  </Link>
                    <button onClick = {()=>deleteproduto(produto)} className="text-[#A30D11]">
                      <Trash2 />
                    </button>
                    <button onClick = {()=>editproduto(produto)} className="text-[#355852]">
                      <SquarePen />
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {modal === 'delete' && produtoToDelete && (
                <Delete id={produtoToDelete.id} closeModal={() => openModal('')} />
            )}
            {modal === 'edit' && produtoToUpdate && (
                <Edit produto ={produtoToUpdate} closeModal={() => openModal('')} />
            )}
      </div>

      {/* Paginação */}
      <div className="flex justify-center mt-6 space-x-4">
        <button className={`text-[#334d35] ${paginaAtual === 1 ? 'opacity-50 ' : ''}`} onClick={() => mudarPagina(paginaAtual - 1)} disabled={paginaAtual === 1}>
          &lt;
        </button>
        {Array.from({ length: totalPaginas }, (_, index) => (
          <button key={index} className={`text-[#334d35] ${paginaAtual === index + 1 ? 'font-bold underline' : ''}`} onClick={() => mudarPagina(index + 1)}>
            {index + 1}
          </button>
        ))}
        <button className={`text-[#334d35] ${paginaAtual === totalPaginas ? 'opacity-50' : ''}`} onClick={() => mudarPagina(paginaAtual + 1)} disabled={paginaAtual === totalPaginas}>
          &gt;
        </button>
      </div>
    </div>
  );
}