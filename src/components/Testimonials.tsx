import React from 'react'
interface Testimonial {
    name: string;
    role: string;
    image: string;
    quote: string
}

const testimonial: Testimonial[] = [
   { name:'Eliaz Bobadilla',
    role:'Founder & CEO, Huddle',
    image:'/images/profile-1.jpg',
    quote:'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.'
    },
    { name:'Leonardo Estacio',
    role:'Founder & CEO, Huddle',
    image:'/images/profile-2.jpg',
    quote:'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.'
    },
    { name:'Miguel Tintaya',
    role:'Founder & CEO, Huddle',
    image:'/images/profile-3.jpg',
    quote:'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.'
    },

]
const Testimonials = () => {
  return (
    <div className='flex flex-col gap-6 items-center'>
        <img src='/public/images/bg-quotes.png' alt='bg-quotes' className='size-6'/>
      {
        testimonial.map(({name,role,image,quote}:Testimonial) => (
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
        ))
      }
    </div>
  )
}

export default Testimonials


