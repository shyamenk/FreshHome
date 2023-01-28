import AdminLayout from '@/components/layout/AdminLayout'
import React, {ReactElement} from 'react'
import {z} from 'zod'

const ProductSchema = z.object({
  name: z.string().min(3, {message: 'Must be 3 or more characters long'}),
  description: z
    .string()
    .min(5, {message: 'Must be 3 or more characters long'}),
  category: z.string().min(5, {message: 'Must be 3 or more characters long'}),
  price: z.number().positive({message: 'Must Be a Number'}),
  quantity: z.number().positive({message: 'Must Be a Number'}),
  discount: z.optional(z.number()),
  imageUrl: z
    .string()
    .startsWith('https://', {message: 'Must provide secure URL'}),
})

type Product = z.infer<typeof ProductSchema>

const AddProduct = () => {
  return (
    <div>
      <section className="p-6 mx-auto bg-primary text-secondary1">
        <form className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
          <fieldset className="grid grid-cols-3 gap-6 p-6 rounded-md shadow-sm bg-primary">
            <h1 className="text-2xl font-medium">Add Products</h1>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-bold text-gray-700"
                >
                  Title
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Title"
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline "
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-bold text-gray-700"
                >
                  Description
                </label>
                <input
                  id="description"
                  placeholder="Description"
                  type="text"
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-bold text-gray-700"
                >
                  Category
                </label>
                <select
                  id="category"
                  className="block w-full px-3 py-2 text-sm text-gray-700 border rounded shadow appearance-none bg-gray-50 focus:outline-none focus:shadow-outline "
                >
                  <option value="Category">Select</option>
                  <option value="VEG">Vegetables</option>
                  <option value="FRUIT">Fruits</option>
                  <option value="FG">Food Grains</option>
                  <option value="Bev">Beverages</option>
                </select>
              </div>
              <div className="col-span-full sm:col-span-2">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-bold text-gray-700"
                >
                  Price
                </label>
                <input
                  id="price"
                  type="text"
                  placeholder="Price"
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label
                  htmlFor="quantity"
                  className="block mb-2 text-sm font-bold text-gray-700"
                >
                  Quantity
                </label>
                <input
                  id="quantity"
                  type="number"
                  placeholder="Quantity"
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label
                  htmlFor="discount"
                  className="block mb-2 text-sm font-bold text-gray-700"
                >
                  Discount
                </label>
                <input
                  id="discount"
                  type="number"
                  placeholder="Dsicount"
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="col-span-full sm:col-span-4">
                <label
                  htmlFor="imageURL"
                  className="block mb-2 text-sm font-bold text-gray-700"
                >
                  ImageURL
                </label>
                <input
                  id="imageURL"
                  type="text"
                  placeholder="www.imageurl.com"
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mx-auto col-span-full sm:col-span-6">
                <button className="w-64 px-4 py-2 font-bold text-white rounded bg-hover hover:bg-red-700 focus:outline-none focus:shadow-lg">
                  Add Product
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  )
}

export default AddProduct
AddProduct.getLayout = function getLayout(page: ReactElement) {
  return (
    <AdminLayout>
      <>{page}</>
    </AdminLayout>
  )
}
