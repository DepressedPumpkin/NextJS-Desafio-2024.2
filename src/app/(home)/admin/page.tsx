'use server';

import { useState } from 'react';
import Image from 'next/image';
import { Eye, Link as Linkk, Square } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { SquarePen } from 'lucide-react';
import Link from 'next/link';
import Tabela from '@/components/tabela';
import prisma from '@/lib/db';
import { Pegaproduto } from '@/back/home/actions';


const ITEMS_PER_PAGE = 3; // Número de itens por página

export default async function Gerenciamento() {
 
  const produtos = await Pegaproduto()
  return (
    <div className="bg-bege min-h-screen p-10">
      <Tabela produtos={produtos}/>
    </div>
  );
}
