import {prisma} from '.'
import {Product} from '@prisma/client'

export async function getProducts() {
  try {
    const products = await prisma.product.findMany()
    return {products}
  } catch (error) {
    return {error}
  }
}

export async function createProduct(product: Product) {
  try {
    const newProduct = await prisma.product.create({
      data: product,
    })
    return {product: newProduct}
  } catch (error) {
    return {error}
  }
}
export async function getProductById(id: string) {
  try {
    const product = await prisma.product.findUnique({
      where: {id},
      include: {Category: true},
    })
    return {product}
  } catch (error) {
    return {error}
  }
}
