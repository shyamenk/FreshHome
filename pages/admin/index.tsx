import PermissionDenied from '@/components/shared/PermissionDenied'
import Spinner from '@/components/shared/Spinner'
import {useSession} from 'next-auth/react'
import {useRouter} from 'next/router'

type Props = {}

const AdminDashboard = () => {
  const {data: session, status} = useSession()

  if (status === 'loading') return <Spinner />

  if (session && session.user.role === 'ADMIN') {
    return (
      <div>
        <h1>Admin</h1>
        <p>Welcome to the Admin Portal!</p>
      </div>
    )
  } else {
    return <PermissionDenied />
  }
}

export default AdminDashboard
