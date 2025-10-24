import React from 'react'
import { TestimonialCard } from './TestimonialCard';
interface Testimonial {
    name: string;
    role: string;
    image: string;
    quote: string
}

const testimonials: Testimonial[] = [
   { name:'Eliaz Bobadilla',
    role:'Founder & CEO, Bobadilla technologies',
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
    <div className='flex flex-col gap-6 items-center pt-6 relative'>
        <img src='/public/images/bg-quotes.png' alt='bg-quotes' className='size-6 absolute left-8'/>
      {
        testimonials.map((testimonial: Testimonial) => (
           <TestimonialCard  {...testimonial}/>
        ))
      }
    </div>
  )
}

export default Testimonials


