"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"
import { authFormSchema } from '@/lib/utils';
import CustomInput from './CustomInput'
import { useState } from 'react'
import { Loader2 } from 'lucide-react';
import { redirect, useRouter } from 'next/navigation';
import { signIn, signUp } from '@/lib/actions/user.actions'
import PlaidLink from './PlaidLink'


import { AuthFormProps } from '@/types'
const AuthForm = ({ type }: AuthFormProps) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const formSchema = authFormSchema(type);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  // 2. Define a submit handler.
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setIsLoading(true)
    try {
      //登录
      if (type === 'sign-in') {
        // sign-in 登录
        const response = await signIn({
          email: data.email,
          password: data.password
        });
        if (response) {
          router.push('/')
        }
      }
      //注册
      if (type === 'sign-up') {
        const userData = {
          firstName: data.firstName!,
          lastName: data.lastName!,
          address1: data.address1!,
          city: data.city!,
          state: data.state!,
          postalCode: data.postalCode!,
          dateOfBirth: data.dateOfBirth!,
          ssn: data.ssn!,
          email: data.email,
          password: data.password
        }
        console.log(userData);
        const newUser = await signUp(userData);
        
        setUser(newUser)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }


  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="cursor-pointer flex items-center gap-1">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user
              ? 'Link Account'
              : type === 'sign-in'
                ? 'Sign-in'
                : 'Sign-up'}
            <p className="text-14 text-gray-600">
              {
                user
                  ? 'Link your account to get started'
                  : 'Please enter your detail'
              }
            </p>
          </h1>
        </div>
      </header>
      {
        user ? (
          <div className="flex flex-col gap-4">
            <PlaidLink user={user} variant="primary" />
          </div>
        ) : (
            <>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {/* //注册 */}
                  {type === 'sign-up' && (
                    <>
                      <div className='flex justify-between'>
                        <CustomInput control={form.control} name="firstName" label="First Name" placeholder="Enter your First Name" />
                        <CustomInput control={form.control} name="lastName" label="Last Name" placeholder="Enter your Last Name" />
                      </div>
                        <CustomInput control={form.control} name='address1' label="Address" placeholder='Enter your specific address' />
                        <CustomInput control={form.control} name='city' label="City" placeholder='Enter your city' />
                      <div className="flex justify-between">
                        <CustomInput control={form.control} name='state' label="State" placeholder='Example: NY' />
                        <CustomInput control={form.control} name='postalCode' label="Postal Code" placeholder='Example: 11101' />
                      </div>
                      <div className="flex justify-between">
                        <CustomInput control={form.control} name='dateOfBirth' label="Date of Birth" placeholder='YYYY-MM-DD' />
                        <CustomInput control={form.control} name='ssn' label="SSN" placeholder='Example: 1234' />
                      </div>
                    </>
                  )}

                  {/* //邮箱密码登录 */}
                  <CustomInput control={form.control} name='email' label="Email" placeholder='Enter your email' />
                  <CustomInput control={form.control} name="password" label="Password" placeholder="Enter your Password" />
                  
                  <div className='flex flex-col'>
                    <Button type="submit" className='form-btn ' disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <Loader2 size={20} className='animate-spin' /> &nbsp; Loading...
                        </>
                      ) : type === 'sign-in' ? 'Sign In' : 'Sign Up'}
                    </Button>
                  </div>
                </form>
              </Form>
                

              <footer className='flex flex-row justify-center gap-1'>
                  <p className='text-14 text-gray-600 font-normal'>
                    {type === 'sign-in' ? 'Don’t have an account?' : 'Already have an account?'}
                  </p>
                  <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'}className='form-link'>
                    {type === 'sign-in' ? 'Sign Up' : 'Sign In'}
                  </Link>
              </footer>

            </>
        )}
      
    </section>
  )
}

export default AuthForm
