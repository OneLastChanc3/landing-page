import React from 'react'
interface Feature {
    text:string;
    description:string;
    iconURL:string;
}
const features: Feature[] = [
    {
        text:"Access your files anywhere",
        description:" The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
        iconURL:'/public/images/icon-access-anywhere.svg'
    },
    {
        text:"  Security you can trust",
        description:"2-factor authentication and user-controlled encryption are just a couple of the security  features we allow to help secure your files.",
        iconURL:'/public/images/icon-access-anywhere.svg'
    },
    {
        text:" Real-time collaboration",
        description:" Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
        iconURL:'/public/images/icon-access-anywhere.svg'
    },
    {
        text:"Store any type of file",
        description:" Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to securely stored and shared.",
        iconURL:'/public/images/icon-access-anywhere.svg'
    }
]

const Features = () => {
  return (
    <div>
      
    </div>
  )
}

export default Features
