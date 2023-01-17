import SideBar from './SideBar'

interface IProps {
  children: React.ReactNode
}

// const team = [
//   {id: 1, name: 'ViewProfile', icon: Settings},
//   {id: 2, name: 'products'},
//   {id: 2, name: 'settings'},
//   {id: 3, name: 'order'},
// ]

const AdminLayout = ({children}: IProps) => {
  return (
    <div className="flex h-screen">
      <SideBar />
      <main className="w-full px-4 ">{children}</main>
    </div>
  )
}

export default AdminLayout
