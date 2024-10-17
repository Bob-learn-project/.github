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
    </div>
  )
}

export default HeaderBox
