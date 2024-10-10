import React from 'react'
import { FooterProps } from '@/types'
import Image from 'next/image'
import { logoutAccount } from '@/lib/actions/user.actions'
import { useRouter } from 'next/navigation'

const Footer = ({ user, type = 'desktop' }: FooterProps) => {
  const router = useRouter();

  const handleLogOut = async () => {
    const loggedOut = await logoutAccount();
    if (loggedOut) {
      router.push('/sign-in')
    }
  }
  return (
    <footer className='footer'>
      <div className={type=='mobile' ? 'footer_name-mobile' : 'footer_name'}>
        <p className='text-xl font-bond text-gray-700'>
          {user.name.charAt(0)}
        </p>
      </div>

      <div className=''>
        <h1 className='text-14 truncate font-normal text-gray-600'>
          {user.name}
        </h1>
        <p className='text-14 font-bond text-gray-700'>
          {user.email}
        </p>
      </div>

      <div className='footer_image' onClick={handleLogOut}>
        <Image src="icons/logout.svg" fill alt="jsm" />
      </div>
    </footer>
  )
}

export default Footer
