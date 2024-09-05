'use client';

import Image from "next/image";
import HeroSection from "../../components/home/herosection";
import Products from "@/components/home/Products";

export default function Home() {
  return (
    <main>
    <HeroSection/>
    <Products/>
    </main>
  );
}
