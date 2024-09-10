'use server'

import prisma from "@/lib/db"

export async function Pegaproduto() {

    const produtos = await prisma.product.findMany({
        select: {
            title: true,
            price: true,
            description: true,
            image: true,
            id: true
        }
    })
    return produtos
}

export async function Pega4produto() {
    const todosProdutos = await prisma.product.findMany({
        select: {
            title: true,
            price: true,
            description: true,
            image: true,
            id: true
        }
    });

    const produtosEmbaralhados = todosProdutos.sort(() => Math.random() - 0.5);

    const produtosAleatorios = produtosEmbaralhados.slice(0, 4);

    return produtosAleatorios;
}