import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <div>
      <section className='relative z-10 -mt-12'>
        <h1 className='text-center font-bold font-raleway text-2xl px-4 '>
            All you files in one secure location, accessible anywhere</h1>
        <p className='text-ceter text-sm mt-6 px-4'>Fylo stores all your most important files in one secure location.
            Acces them wherever yo need, share and collaborate with friends,
            and co-workers</p>
        <div className='text-center mt-6 mb-10'>
            <Button text='Get started' style='w-[240px]'/>
        </div>
      </section>
      
    </div>
  )
}

export default Hero
