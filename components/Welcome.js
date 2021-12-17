import React from 'react'
import Image from 'next/image'
import welcome from "../images/welcome.jpg"
import {useMoralis} from "react-moralis"


function Welcome() {
    const {authenticate, logout} = useMoralis();
    return (
        <div className='bg-black relative'>
            <div className='flex flex-col absolute z-50 h-full items-center
            justify-center w-full space-y-8'>
                <h1 className='text-center font-bold text-2xl text-white p-2 rounded-md max-w-sm '>You are now logged into Your <span className='text-yellow-500'>METAVERSE</span> account.</h1>
                {/* <Image
                className='object-cover rounded-full'
                src = "https://links.papareact.com/3pi" 
                height={200} width={200}/> */}
                <button onClick={logout} className='bg-yellow-500 rounded-lg font-bold p-3 animate-pulse'>Logout</button>
            </div>
            <div className='w-full h-screen'>
                <Image
                  className='blur-sm'
                  src={welcome}
                  layout='fill'
                  objectFit='cover'
                />
                
            </div>
        </div>
    )
}

export default Welcome
