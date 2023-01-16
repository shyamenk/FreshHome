import {useSession} from 'next-auth/react'

interface IProps {
  children: React.ReactNode
}

const team = [
  {id: 1, name: 'Account'},
  {id: 2, name: 'Settings'},
  {id: 3, name: 'Profile'},
]

const AdminLayout = ({children}: IProps) => {
  const {data: session} = useSession()

  return (
    <div className="flex">
      <aside className="w-[250px] h-screen bg-gray-500 border-2 ">
        <nav>
          <ul className="space-y">
            {team.map(
              ({id, name}) =>
                session && (
                  <li key={id} className="px-4 py-4 hover:bg-slate-400">
                    {name}
                  </li>
                ),
            )}
          </ul>
        </nav>
      </aside>
      <main className="w-full px-4 ">{children}</main>
    </div>
  )
}

export default AdminLayout
