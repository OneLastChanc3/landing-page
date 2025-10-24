import React from 'react'

interface Props {
    name: string;
    role: string;
    image: string;
    quote: string
}


export const TestimonialCard = ({name,role,image,quote}:Props) => {
  return (
    <div className='bg-navy-850 rounded-sm p-6 w-[280px]'>
                <p className='text-[12px] mb-4'>{quote}</p>
                <div className='flex gap-2'>
                    <img className='size-6 rounded-full' src={image} alt={name}/>
                    <div>
                        <h3 className='font-bold text-[12px]'>{name}</h3>
                        <p className='text-[7px]'>{role}</p>
                    </div>
         </div> 
    </div> 
  )
}


