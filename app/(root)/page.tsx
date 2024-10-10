import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import { getLoggedInUser } from '@/lib/actions/user.actions'

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  console.log(loggedIn);
  console.log('获取的登录用户结果')
  // const loggedIn = {
  //   // name: 'hell',
  //   firstName: 'adrion',
  //   lastName: 'nb'
  // }
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