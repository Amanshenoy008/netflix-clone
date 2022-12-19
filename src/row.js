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
    <div className=''>
        <h2 className='font-extrabold p-2 text-center '> {title}</h2>
         <div  className='flex gap-2 overflow-x-scroll overflow-y-hidden p-2 no-scrollbar '>
          {
            movies &&
            movies.results.map((d)=>(
                
                <img  key={d.id}src={baseurl+(islargerow ? d.poster_path : d.backdrop_path)} alt={d.name} width='100' height='100' className='hover:scale-110 hover:ease-in duration-300' />



            ))
          }
          
         </div>
         </div>
    </>
  )
}

export default Row
