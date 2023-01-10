import {NextApiRequest, NextApiResponse} from 'next'
import {createProduct, getProductById, getProducts} from '@/lib/prisma/products'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    const {productId} = req.query

    if (productId) {
      const id = String(productId)
      try {
        const {product, error} = await getProductById(id)
        if (error) console.log(error)
        res.status(200).json({product})
      } catch (error) {
        console.log(error)
      }
    }

    try {
      const {products, error} = await getProducts()
      if (error) console.log(error)
      res.status(200).json({products})
    } catch (error) {
      console.log(error)
    }
  }

  if (req.method === 'POST') {
    try {
      const data = req.body
      const {product, error} = await createProduct(data)

      if (error) console.log(error)

      return res.status(200).json({product})
    } catch (error) {
      console.log(error)
    }
  }
  res.setHeader('Allow', ['GET', 'POST'])
  res.status(425).end(`Method ${req.method} is not allowed,`)
}
