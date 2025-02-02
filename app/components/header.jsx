'use client'
import React, { useEffect, useState } from 'react'
import { Button } from '@/app/components/button'
import { useContextValue } from '@/context/userContext'
import Link from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'
export default function Header({ page }) {
  const [showMenu, setShowhMenu] = useState(false)
  const { verified, setVerified } = useContextValue()
  useEffect(() => {
    console.log(verified)
  }, [verified])
  return (
    <header className='sticky top-0 flex items-center justify-between bg-white  p-4 shadow-md'>
      <Link href='/'>
        <h1 className='text-xl font-semibold'>Quizzard</h1>
      </Link>
      <nav className='hidden space-x-6 md:block'>
        {page === 'home' && (
          <>
            {verified ? (
              <>
                <a href='/dashboard' className='hover:text-gray-700'>
                  Profile
                </a>
                <Button className='ml-4' onClick={() => setVerified(false)}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <a href='/login' className='hover:text-gray-700'>
                  Login
                </a>
                <Button className='ml-4'>
                  <a href='/signup'>Get Started</a>
                </Button>
              </>
            )}
          </>
        )}
        {page === 'signup' && (
          <a href='/login' className='hover:text-gray-700'>
            Login
          </a>
        )}
        {page === 'login' && (
          <Button className='ml-4'>
            <a href='/signup'>Get Started</a>
          </Button>
        )}
      </nav>
      <div className='menu'>
        <AiOutlineMenu
          size={25}
          onClick={() => {
            setShowhMenu((e) => !e)
          }}
        />
      </div>
    </header>
  )
}
