import AdminLayout from '@/components/layout/AdminLayout'
import React, {ReactElement} from 'react'

const AddProduct = () => {
  return <div>Add Product</div>
}

export default AddProduct
AddProduct.getLayout = function getLayout(page: ReactElement) {
  return (
    <AdminLayout>
      <>{page}</>
    </AdminLayout>
  )
}
