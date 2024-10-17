import React, { useCallback } from 'react'
import { PlaidLinkProps } from '@/types'
import { Button } from './ui/button'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink } from 'react-plaid-link'
import { exchangePublicToken } from '@/lib/actions/user.actions'
import { createLinkToken } from '@/lib/actions/user.actions'

//链接银行账户组件
const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
  const router = useRouter();

  const [token, setToken] = useState('');

  //创建用户令牌
  useEffect(() => {
    const getLinkToken = async () => {
      const data = await createLinkToken(user);
      console.log(data);
      console.log('data 数据')
      setToken(data?.linkToken || '')
    }

    getLinkToken();
  }, [user]);

  //交换公钥 获取公钥
  const onSuccess = useCallback<PlaidLinkOnSuccess>(
    async (public_token:string) => {
      await exchangePublicToken({
        publicToken: public_token,
        user
      })
      router.push('/')
    }, [user, router]
  )  
  
  //获取配置
  const config: PlaidLinkOptions = {
    token,
    onSuccess
  }
  console.log(config + '配置信息');

  const { open, ready } = usePlaidLink(config);

  return (
    <>
      {variant === 'primary' ? (
        <Button
          className='plaidlink-primary'
          onClick={() => open()}
          disabled={!ready}
        >
          Connect bank
        </Button>
      ) : variant === 'ghost' ? (
          <Button>
            Connect bank
          </Button>
        ) : (
            <Button>
              Connect Bank
            </Button>
      )
    }
    </>
  )
}

export default PlaidLink
