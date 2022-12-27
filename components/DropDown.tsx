import React, {useState, useRef, useEffect} from 'react'

type DropdownMenuProps = {}

type DropdownMenuState = {
  isOpen: boolean
}

const DropdownMenu: React.FC<DropdownMenuProps> = () => {
  const [isOpen, setIsOpen] = useState<DropdownMenuState['isOpen']>(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <nav ref={menuRef} className="relative z-10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="block px-4 py-2 text-gray-700 hover:text-gray-800"
      >
        Menu
      </button>
      <ul
        className={`${
          isOpen ? '' : 'hidden'
        } absolute bg-white rounded-lg shadow-xl py-2 divide-y`}
      >
        <li className="px-4 py-2 hover:bg-gray-100">
          <a
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 hover:text-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="bg-red-300"
              className="w-6 h-6 mr-2"
            >
              <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
            </svg>
            User Profile
          </a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100">
          <a
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 hover:text-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
              />
            </svg>
            Admin
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default DropdownMenu
