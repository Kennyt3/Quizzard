'use client'
import React, { useState } from 'react'
import { Button } from '../components/button'
import { Card, CardContent } from '../components/card'
import { Input } from '../components/input'
import Header from '../components/header'
import Footer from '../components/footer'
export default function Register() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match!')
      return
    }

    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ ...form }),
      headers: { 'Content-Type': 'application/json' },
      // credentials: 'include',
    })
    if (response.ok) {
      response.json().then((userInfo) => {
        window.location.href = `/login`
      })
    }
  }

  return (
    <div className='min-h-screen flex flex-col'>
      <Header page='register' />
      <div className='flex-1 flex items-center justify-center bg-gray-50 text-gray-900'>
        <Card className='w-full max-w-md p-6 shadow-lg'>
          <CardContent>
            <h2 className='text-2xl font-bold text-center mb-4'>Sign Up</h2>

            <form onSubmit={handleSubmit} className='space-y-4'>
              <Input
                type='text'
                name='fullName'
                placeholder='Full Name'
                autoComplete='on'
                value={form.fullName}
                onChange={handleChange}
                required
              />
              <Input
                type='email'
                name='email'
                placeholder='Email'
                autoComplete='on'
                value={form.email}
                onChange={handleChange}
                required
              />
              <Input
                type='password'
                name='password'
                placeholder='Password'
                autoComplete='on'
                value={form.password}
                onChange={handleChange}
                required
              />
              <Input
                type='password'
                name='confirmPassword'
                placeholder='Confirm Password'
                autoComplete='on'
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />

              <Button type='submit' className='w-full bg-indigo-600'>
                Sign Up
              </Button>
            </form>

            <p className='mt-4 text-center  text-sm text-gray-600'>
              Already have an account?{' '}
              <a href='/login' className='text-indigo-600'>
                login
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  )
}
