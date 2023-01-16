import AdminLayout from '@/components/layout/AdminLayout'
import PermissionDenied from '@/components/shared/PermissionDenied'
import Spinner from '@/components/shared/Spinner'
import {useSession} from 'next-auth/react'
import {NextPageWithLayout} from 'pages/_app'
import {ReactElement} from 'react'

const AdminDashboard: NextPageWithLayout = () => {
  const {data: session, status} = useSession()

  if (status === 'loading') return <Spinner />

  if (session?.user.role === 'ADMIN') {
    return (
      <div>
        <h1>ADMIN</h1>
        <p>Welcome to the Admin Portal!</p>
      </div>
    )
  } else {
    return <PermissionDenied />
  }
}

AdminDashboard.getLayout = function getLayout(page: ReactElement) {
  return (
    <AdminLayout>
      <>{page}</>
    </AdminLayout>
  )
}

export default AdminDashboard
