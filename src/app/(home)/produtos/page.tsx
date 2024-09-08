'use server';

import Image from "next/image";
import HeroSection from "@/components/home/herosection";
import Products from "@/components/home/Products";
import Cards from "@/components/home/Products/cards";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { Pegaproduto } from "@/back/home/actions";

export default async function Home() {
  const produtos = await Pegaproduto()
  return (
    <main className="bg-bege">
      <div className="flex justify-center flex-col items-center gap-12 py-12">
        <div className="flex flex-wrap gap-8 justify-center w-3/4">
          <Products produtos={produtos} title={"Todos os Produtos"} />
          {/*<Cards image="/image/aurora.png" title="Aurora - All my demons greeting me as a friend" price="R$ 79,00" />*/}
        </div>
      </div>
    </main>
  );
}