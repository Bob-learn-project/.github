"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SiderbarProps } from '@/types'
import { sidebarLinks } from '@/constants'
import {usePathname} from 'next/navigation'
import {cn} from '@/lib/utils'

const Siderbar = ({ user }: SiderbarProps) => {
  const pathname = usePathname()

  return (
    <section className='sidebar'>
      <nav className='flex flex-col gap-4'>
        <Link href='/' className='mb-10 cursor-pointer flex items-center gap-2 '>
          <Image src="/icons/logo.svg" alt='Horizon logo' width={32} height={32} className=' max-xl:size-12' />
          <h1 className='sidebar-logo'>
            {user}
          </h1>
        </Link>
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}`)
          return (
            <Link href={item.route} key={item.label} className={cn('sidebar-link', { 'bg-bank-gradient': isActive})}>
              <Image
                src={item.imgURL}
                alt={item.label}
                width={24}
                height={24}
                className={cn({
                  'brightness-[3] invert-0': isActive
                })}
              />
              <p className={cn("sidebar-label", { "text-white": isActive })}>{item.label}</p>
            </Link>
          )
        })}
      </nav>
      <div className='sidebar-footer'>
        <p className='text-16 text-gray-900'>
          {user}
        </p>
      </div>
    </section>
  )
}

export default Siderbar
