import React from 'react'
import { HeaderBoxProps } from '@/types'
import TotalBalanceBox from './TotalBalanceBox'

const HeaderBox = ({type, title, subtext, user}:HeaderBoxProps) => {
  return (
    <div className='header-box'>
      <h1 className='header-box-title'>
        {title}
        {type === 'greeting' && (
          <span className='header-box-user'>&nbsp;{user}</span>
        )}
      </h1>
      <p className='header-box-subtext'>{subtext}</p>
        <TotalBalanceBox
              title="Total Balance"
              totalBanks={1}
              totalCurrentBalance={1250.35}
        />
    </div>
  )
}

export default HeaderBox
