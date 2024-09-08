'use server';

import Image from "next/image";
import HeroSection from "../../components/home/herosection";
import Products from "@/components/home/Products";
import Missao from "@/components/home/missao";
import Edit from "@/components/crud/editar";
import Delete from "@/components/crud/delete";
import Criar from "@/components/crud/criar";
import { Pega4produto } from "@/back/home/actions";

export default async function Home() {
  const produtos = await Pega4produto()
  return (
    <main className="bg-bege">
    <HeroSection/>
    <Products produtos={produtos} title={"Principais Produtos"}/>
    <Missao/>
    </main>
  );
}
