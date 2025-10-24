import React from 'react'

const MoreInformation = () => {
  return (
    <div className='mt-40'>
      <img src='public/images/illustration-stay-productive.png' alt='stay-productive' className='mb-20'/>
      <h2 className='font-bold mb-4'> 
  Stay productive, wherever you are
      </h2>

      <p className='text-sm mb-4'>
    Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
  storage needs.
      </p>

      <p className='text-sm mb-4'>
     Securely share files and folders with friends, family and colleagues for live collaboration. No email 
  attachments required.
      </p>
        <a href='#' className='text-teal-200 flex items-center gap-2'>
          <p>See how Fylo works</p>
          <img src='/public/images/icon-arrow.svg' alt='arrow'/>
        </a>
    </div>
  )
}

export default MoreInformation
