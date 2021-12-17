import React from 'react'
import Image from 'next/image'
import background from "../images/mainbg.jpg"
import {useMoralis} from "react-moralis"
import logo from "../images/logo.jpg"

function Login() {
    const {authenticate} = useMoralis();
    return (
        <div className='bg-black relative'>
            <div className='flex flex-col absolute z-50 h-full items-center
            justify-center w-full space-y-8'>
                <h1 className=' text-5xl font-bold mb-9 text-white text-center'>Welcome to <span className='text-yellow-500'>METAVERSE</span></h1>
                <Image
                className='object-cover rounded-full'
                src = {logo}
                height={200} width={200}/>
                <button onClick={authenticate} className='bg-yellow-500 rounded-lg font-bold p-5 animate-pulse'>Login to METAVERSE</button>
            </div>
            <div className='w-full h-screen'>
                <Image
                  src={background}
                  layout='fill'
                  objectFit='cover'
                />
                
            </div>
        </div>
    )
}

export default Login
