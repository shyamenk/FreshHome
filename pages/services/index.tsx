import Spinner from '@/components/Spinner'
import {signIn, useSession} from 'next-auth/react'

const ServicePage = () => {
  const {data: session, status} = useSession()

  if (status === 'loading') {
    return <Spinner />
  }

  if (status === 'unauthenticated') {
    signIn()
  }
  if (status === 'authenticated') {
    return <div> Service Page</div>
  }
}

export default ServicePage
