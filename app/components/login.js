import React from 'react'
import { Button } from '@/app/components/button'
import { Card, CardContent } from '@/app/components/card'
import { Input } from '@/app/components/input'

export default function Login() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-50 text-gray-900'>
      <Card className='w-full max-w-md p-6'>
        <CardContent>
          <h2 className='text-center text-2xl font-bold'>Login to Blogify</h2>
          <p className='mt-2 text-center text-gray-600'>
            Enter your credentials to access your account
          </p>
          <form className='mt-6 space-y-4'>
            <div>
              <label className='block text-sm font-medium'>Email</label>
              <Input
                type='email'
                placeholder='Enter your email'
                required
                className='mt-1 w-full'
              />
            </div>
            <div>
              <label className='block text-sm font-medium'>Password</label>
              <Input
                type='password'
                placeholder='Enter your password'
                required
                className='mt-1 w-full'
              />
            </div>
            <Button className='w-full'>Login</Button>
          </form>
          <p className='mt-4 text-center text-sm text-gray-600'>
            Don&apos;t have an account?{' '}
            <a href='#signup' className='text-blue-600'>
              Sign up
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
