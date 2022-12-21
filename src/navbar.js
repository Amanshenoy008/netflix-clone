import React from 'react'
import Avatar from './assests/avatar.svg'
import Netflix from './assests/netflix.svg'

export default function Navbar() {
  return (
    <nav className='flex justify-between align-top '>
       
        <img src={Netflix} alt='Netflix logo' width='140' height='100' className=' scale-275 pl-6'  />
        <img src={Avatar} alt='Avatar image' className='w-9 mr-5   ' />
      

    </nav>
  )
}
