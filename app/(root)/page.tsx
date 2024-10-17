import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import { getAccounts, getAccount } from '@/lib/actions/bank.actions'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { SearchParamProps } from '@/types'
import RecentTransactions from '@/components/RecentTransactions'

const Home = async ({searchParams: {id, page}} : SearchParamProps) => {
  //登录的用户信息
  const currentPage = Number(page as string) || 1;
  const loggedIn = await getLoggedInUser();

  if (!loggedIn) {
    // 处理未登录的情况，例如返回或抛出错误
    return;
  }
  const accounts = await getAccounts({
    userId: loggedIn[`$id`]
  });
  //获取不到access_Token 导致账户出错 无法继续
  console.log(accounts);

  if (!accounts) return;

  const accountsData = accounts?.data;
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;
  const account = await getAccount({ appwriteItemId })

  console.log({
    accountsData,
    account
  })

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
          <TotalBalanceBox 
            accounts={accountsData}
            totalBanks={accounts?.totalBanks}
            totalCurrentBalance={accounts?.totalCurrentBalance}
          />
        </header>
          recent transitions
          <RecentTransactions
            accounts={accountsData}
            transactions={account?.transactions}
            appwiteItemId={appwriteItemId}
            page={currentPage}
          />
      </div>


      <RightSidebar
        user={loggedIn}
        transactions={account?.transactions}
        banks={accountsData?.slice(0, 2)}
      />
    </section>
  )
}

export default Home