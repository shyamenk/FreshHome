import {NextApiRequest, NextApiResponse} from 'next'
import {createProduct} from '@/lib/prisma/products'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    try {
    } catch (error) {}
  }

  if (req.method === 'POST') {
    try {
      const data = req.body
      const {product, error} = await createProduct(data)

      if (error) {
        console.log(error)
      }

      return res.status(200).json({product})
    } catch (error) {
      console.log(error)
    }
  }
  res.setHeader('Allow', ['GET', 'POST'])
  res.status(425).end(`Method ${req.method} is not allowed,`)
}
