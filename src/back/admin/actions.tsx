'use server'

import prisma from "@/lib/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function deleteProduct(id: number) {
    const produto = await prisma.product.delete({
        where: {
            id: id
        }
    })
    redirect('/admin')
}

export async function editProduct(id: number, data: {title: string, price: number, description: string}) {
    await prisma.product.update({
        where:{
            id,
        },
        data,
    });
    redirect('/admin')
        }
   

export async function createProduct(formData: FormData) {
    const title = formData.get('title') as string
    const price = Number(formData.get('price')) as number
    const description = formData.get('description') as string
    const image = formData.get('image') as string

    const produto = await prisma.product.create({
        data: {
            title: title,
            price: price,
            description: description,
            image: image
        }
    })
    redirect('/admin')
}

 export async function visualizaProduto(id: number) {
        const produto = await prisma.product.findUnique({
            where: {
                id: id
            }
        })
        return produto
    }