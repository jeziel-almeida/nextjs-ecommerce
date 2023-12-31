import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const NotFound = () => {
  return (
    <>
        <Head>
            <title>Basket | 404</title>
        </Head>

        <Layout>
            <div className='w-full min-h-[22rem] flex flex-col justify-center items-center'>
                <Image className='mb-4' src={'/404Error.svg'} width={200} height={200} alt='Duas pessoas tentando consertar um servidor quebrado' />
                <h1 className='text-3xl font-bold mb-4'>OOPS!</h1>
                <p className='text-lg mb-4'>Há algo errado com o nosso servidor. Estamos tentando consertá-lo. Por favor, tente novamente mais tarde.</p>
                <button onClick={() => {location.reload()}} className='btn btn-secondary'>Tentar novamente</button>
            </div>
        </Layout>
    </>
    
    
  )
}

export default NotFound