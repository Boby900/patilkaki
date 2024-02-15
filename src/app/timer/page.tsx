'use client'
import React from 'react';
import { useTimer } from 'react-timer-hook';
import { Button } from '@/components/ui/button';

function Times({ expiryTimestamp }:any) {
  const {
    seconds,
    minutes,
    hours,
    
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  return (
    <div>

    
    <div style={{textAlign: 'center'}}>
  
      <div className='font-bold p-2' style={{fontSize: '50px'}}>
        <span className='p-2'>{hours}</span>:<span className='p-2'>{minutes}</span>:<span className='p-2'>{seconds}</span>
      </div>
      
      
    </div>
    </div>
  );
}

export default function Timer() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 1200890); // 10 minutes timer
  return (
    <div className='bg-blue-950 text-white h-screen text-center md:p-8 pt-[180px]'>
        <h1 className='text-center font-bold text-3xl p-8 '>Time is running out. <br /> Grab your spot fast!</h1>
      <Times  expiryTimestamp={time} />
      <Button>Register Now at 499&nbsp;<span className='line-through'>&nbsp;1999 </span></Button>
    </div>
  );
}
   
  