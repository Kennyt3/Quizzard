import { Outlet, Link } from 'react-router-dom'
import Image from './image'

const Nav = () => {
  return (
    <>
      <div
        className='h h-16'
        style={{ background: 'linear-gradient(to right, #3550DC, #27E9F7)' }}
      >
        <div className='max-w-screen-lg h-full flex  mx-auto'>
          <Image />
          <ul className='flex justify-between h-full w-9/12  mx-auto items-center'>
            <li className='text-white font-medium text-lg'>
              <Link to='/'>Home</Link>
            </li>
            <li className='text-white font-medium text-lg'>
              <Link to='/quiz'>Take Quiz</Link>
            </li>
            {/* <li className='ml-7'>
            <Link to='/gallery'>Gallery</Link>
            </li>
            <li className='ml-7'>
            <Link to='/clients'>Clients</Link>
            </li>
            <li className='ml-7'>
            <Link to='/contact'>Contact Me</Link>
          </li> */}
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Nav
