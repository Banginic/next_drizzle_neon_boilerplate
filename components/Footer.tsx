import { metaData } from '@/assets/data'
import React from 'react'
import  DeveloperLink  from '@/components/developer/DeveloperLink'

function Footer() {
  return (
    <footer className='bg-black/70 text-amber-100' id='footer py-12'>
      
      <div className='py-4'>
        <hr  className='w-4/5 mx-auto my-4'/>
        <div className='flex items-center justify-around gap-8 text-sm'>
          <p className='text-neutral-400'>© {new Date().getFullYear()} {metaData.title}. All rights reserverd.</p>
        <DeveloperLink />
        </div>
      </div>
    </footer>
  )
}

export default Footer
