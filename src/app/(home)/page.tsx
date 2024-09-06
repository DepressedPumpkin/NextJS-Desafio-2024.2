'use client';

import Image from "next/image";
import HeroSection from "../../components/home/herosection";
import Products from "@/components/home/Products";
import Missao from "@/components/home/missao";

export default function Home() {
  return (
    <main className="bg-bege">
    <HeroSection/>
    <Products/>
    <Missao/>
    </main>
  );
}
