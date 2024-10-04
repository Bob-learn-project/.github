import React from 'react'
import { RightSidebarProps } from '@/types'

const RightSidebar = ({user, transactions, banks}:RightSidebarProps) => {
  return (
    <aside className='right-sidebar'>
      <section className='flex flex-col pb-8'>
        {/* //顶部背景图 */}
        <div className='profile-banner' />
      </section>
    </aside>
  )
}

export default RightSidebar
