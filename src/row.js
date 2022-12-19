import {useState, useEffect} from 'react'
import axios from './axios.js'

function Row({title , fetchUrl}) {

    const [movies,setmovies] = useState()
    const baseurl = 'https://image.tmdb.org/t/p/original/'

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
        <h2 className='font-extrabold  '> {title}</h2>
         <div className='flex '>
          {
            movies &&
            movies.results.map((d)=>(
              
                <img src={baseurl+d.poster_path} alt={d.name} width='80' />



            ))
          }
          
         </div>
         </div>
    </>
  )
}

export default Row
