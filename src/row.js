import {useState, useEffect} from 'react'
import axios from './axios.js'

function Row({title , fetchUrl}) {

    const [movies,setmovies] = useState()


    useEffect(()=>{
      axios.get(fetchUrl)
      .then(d=>{
        setmovies(d.data)
        console.log(d.data)
      })
    },[fetchUrl])
    
  
  return (
    <>
    <div className=''>
        <h2> {title}</h2>
         <div className=' '>
          
          
         </div>
         </div>
    </>
  )
}

export default Row
