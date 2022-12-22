import {useState , useEffect} from 'react'
import Avatar from './assests/avatar.svg'
import Netflix from './assests/netflix.svg'

export default function Navbar() {

  const [show, handleshow]= useState(false)

    useEffect(()=>{
      window.addEventListener('scroll',()=>{
        if(window.scrollY > 100){
          handleshow(true)
        }else handleshow(false)
      })
      
    }, [])
    
  return (
    <nav className={'flex justify-between align-top '}>
       
        <img src={Netflix} alt='Netflix logo' width='140' height='100' className=' cursor-pointer scale-275 pl-6'  />
        <img src={Avatar} alt='Avatar image' className='w-9 mr-5 cursor-pointer  ' />
      

    </nav>
  )
}
