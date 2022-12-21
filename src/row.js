import {useState, useEffect} from 'react'
import axios from './axios.js'

function Row({title , fetchUrl , islargerow}) {

    const [movies,setmovies] = useState()
    const baseurl = 'https://image.tmdb.org/t/p/original/'

    useEffect(()=>{
      axios.get(fetchUrl)
      .then(d=>{
        setmovies(d.data)
        
        
      })
    },[fetchUrl])
    
  
  return (
    <>
    <div className=' text-white bg-black'>
        <h2 className='font-extrabold p-2 text-start  text-xl '> {title}</h2>
         <div  className='flex gap-2 overflow-x-scroll overflow-y-hidden p-2 no-scrollbar ml-3 border-solid border-white'>
          {
            movies &&
            movies.results.map((d)=>(
                
              <img  key={d.id} src={baseurl+(islargerow ? d.poster_path : d.backdrop_path)} alt={d.name}   className=' w-1/5 hover:scale-110 hover:ease-in duration-300 p-2 rounded' />



            ))
          }
          
         </div>
         </div>
    </>
  )
}

export default Row
