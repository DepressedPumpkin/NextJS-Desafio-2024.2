'use client';

import Image from "next/image";
import HeroSection from "@/components/home/herosection";
import Products from "@/components/home/Products";
import Cards from "@/components/home/Products/cards";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Home() {
  return (
    <main className="bg-bege">
      <div className="flex justify-center flex-col items-center gap-12 py-12">
        <p className="text-verde text-2xl font-semibold">Todos os Produtos</p>
        <div className="flex flex-wrap gap-8 justify-center w-3/4">
          <Cards image="/image/aurora.png" title="Aurora - All my demons greeting me as a friend" price="R$ 79,00" />
          <Cards image="/image/mela.png" title="Melanie - Portals" price="R$ 79,00" />
          <Cards image="/image/nas.png" title="Nas - Illmatic" price="R$ 79,00" />
          <Cards image="/image/aurora.png" title="Aurora - All my demons greeting me as a friend" price="R$ 79,00" />
          <Cards image="/image/mela.png" title="Melanie - Portals" price="R$ 79,00" />
          <Cards image="/image/nas.png" title="Nas - Illmatic" price="R$ 79,00" />
          <Cards image="/image/aurora.png" title="Aurora - All my demons greeting me as a friend" price="R$ 79,00" />
          <Cards image="/image/mela.png" title="Melanie - Portals" price="R$ 79,00" />
          <Cards image="/image/nas.png" title="Nas - Illmatic" price="R$ 79,00" />
        </div>
      </div>
    </main>
  );
}