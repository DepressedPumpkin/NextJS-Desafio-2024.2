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

    const produtos = await prisma.product.findMany({
        take: 4,
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

