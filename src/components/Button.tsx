import React from 'react'

interface Props {
    text:string;
    style?:string;// ? significa "opcional"
}


const Button = ({text,style=''}:Props) => {
  return (
    <button className={`bg-linear-to-b from-teal-200 to-cyan-500 text-center h-12 hover:to-teal-200 
    ${style} rounded-3xl`}>
      {text}
    </button>
  )
}

export default Button
