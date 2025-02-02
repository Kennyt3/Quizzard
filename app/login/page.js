'use client'
import { useEffect, useState } from 'react'
import { useContextValue } from '@/context/userContext'
import { Button } from '@/app/components/button'
import { Card, CardContent } from '@/app/components/card'
import { Input } from '@/app/components/input'
import Header from '../components/header'
import { useRouter } from 'next/navigation'
import Footer from '../components/footer'

export default function Posts() {
  const router = useRouter()
  const { setVerified } = useContextValue()
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ ...form }),
      headers: { 'Content-Type': 'application/json' },
      // credentials: 'include',
    })
    if (response.ok) {
      response.json().then((userInfo) => {
        setVerified(true)
        router.push('/')
      })
    } else if (response.status === 450) {
      alert('Network error')
    } else if (response.status === 400) {
      alert('Wrong email or password')
    } else {
      alert('Please try again')
    }
  }

  return (
    <div className='min-h-screen flex flex-col'>
      <Header page='login' />
      <div className='flex-1 flex items-center  justify-center bg-gray-50 text-gray-900 '>
        <Card className='w-full max-w-md p-6'>
          <CardContent>
            <h2 className='text-center text-2xl font-bold'>
              Login to Quizzard
            </h2>
            <p className='mt-2 text-center text-gray-600'>
              Enter your credentials to access your account
            </p>
            <form className='mt-6 space-y-4' onSubmit={handleSubmit}>
              <div>
                <label className='block text-sm font-medium'>Email</label>
                <Input
                  type='email'
                  name='email'
                  placeholder='Email'
                  autoComplete='on'
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className='block text-sm font-medium'>Password</label>
                <Input
                  type='password'
                  name='password'
                  placeholder='Password'
                  autoComplete='on'
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button className='w-full'>Login</Button>
            </form>
            <p className='mt-4 text-center text-sm text-gray-600'>
              Don&apos;t have an account?{' '}
              <a href='/register' className='text-indigo-600'>
                Register
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  )
}
