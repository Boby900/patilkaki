import Image from 'next/image'
import React from 'react'
import bob from "@/app/assets/profile.png"
import Link from 'next/link'
const Founder = () => {
  return (
    <div className='p-2 m-2'>
        <h1 className='text-center text-green-900 text-3xl font-bold uppercase m-2 p-2'>About <span className='text-red-200'>FounderX</span> </h1>
        <p className='text-gray-500 m-2 p-2 sm:pl-6'>The world needs your creativity and igenuity. Don&#39;t put your dreams on hold. <br /> Start your founder&#39;s journey today!</p>
        <div className='flex justify-between p-2 m-2 flex-col md:flex-row  '>
            <div className=' shadow-2xl p-2 sm:m-2  mb-6'>
            
              <Image src={bob} className='rounded-2xl border-6 shadow-2xl border-gray-500' alt='pk' width={300} height={200} />
             

            </div>
            <div className='bg-red-100 p-2 m-2 rounded-2xl border-6 border-gray-500 shadow-2xl'>
              <ul className='list-disc list-inside'>
                <li>Master a structure approach to building a tech venture.</li>
                <li>Get coached by India&#39;s top 1% founders, <br /> operators and investors.</li>
                <li>Learn by doing - Work on actual startup ideas in a real-world startup team.</li>
                <li>Expand your network in the community of like-minded peers.</li>
                <li>Find your co-founder & your core team among the follows and alumni.</li>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default Founder