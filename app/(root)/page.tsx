import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import { getLoggedInUser } from '@/lib/actions/user.actions'

const Home = async () => {
  //登录的用户信息
  const loggedIn = await getLoggedInUser();
  console.log(loggedIn);

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || 'Guest'}
            subtext="Access and manage your account and transactions efficiently"
          />
        </header>
        recent transitions
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 123.50}, {currentBalance: 123.50}]}
      />
    </section>
  )
}

export default Home