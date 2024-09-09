'use client';

import { useState, useEffect } from 'react';
import Tabela from '@/components/tabela';
import { Pegaproduto } from '@/back/home/actions';

// Definimos o tipo Produto aqui para reutilização e tipagem consistente
type Produto = {
  image: string;
  title: string;
  price: number;
  description: string | null;
  id: number;
};

export default function Gerenciamento() {
  const [produtos, setProdutos] = useState<Produto[]>([]); // Define o tipo explicitamente

  const fetchProdutos = async () => {
    const fetchedProdutos: Produto[] = await Pegaproduto();
    setProdutos(fetchedProdutos); // Agora, o tipo é compatível com o estado
  };

  // Carrega os produtos ao montar o componente
  useEffect(() => {
    fetchProdutos();
  }, []);

  return (
    <div className="bg-bege min-h-screen p-10">
      <Tabela produtos={produtos} reloadProdutos={fetchProdutos} />
    </div>
  );
}