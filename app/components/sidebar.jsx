import Link from 'next/link'
import { Button } from './button'

const Sidebar = () => {
  return (
    <aside className='w-64 min-h-screen bg-gray-50 text-black flex flex-col'>
      {/* Sidebar Header */}
      <div className='p-6 text-center border-b border-gray-50'>
        <Link href='/'>
          <h1 className='text-xl font-semibold'>WrytIt</h1>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className='flex-1 px-4 py-6'>
        <ul>
          {['/about', '/blog', '/'].map((item, index) => (
            <li key={index}>
              <Link
                href={item}
                className={`flex items-center gap-3 px-4 py-3 rounded-md transition`}
              >
                <span className='text-sm'>{item}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout Button */}
      <div className='flex justify-center border-t border-gray-700'>
        {' '}
        <Button className='ml-4' onClick={() => setVerified(false)}>
          Logout
        </Button>
      </div>
    </aside>
  )
}

export default Sidebar
