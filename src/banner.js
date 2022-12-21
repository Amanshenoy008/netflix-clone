import {useState ,useEffect} from 'react'
import axios from './axios'
import requests from './request'


function Banner() {

  const [movies,setmovies] = useState()
  const [load,setload] = useState(true)
  const baseurl = 'https://image.tmdb.org/t/p/original/'

   useEffect(()=>{
   
   axios.get(requests.fetchnetflixoriginal)
   .then(d =>{
    //setm(d.data.results)
    setmovies(d.data.results[Math.floor(Math.random() * d.data.results.length)])
    //console.log(movies)
    setload(false)
   })
  
   },[])
    console.log(movies)
   const bg = (load ? '': baseurl+movies.backdrop_path)

   
  return (
    <header className=' text-white w-screen h-screen  bg-cover bg-no-repeat	border-solid border-black border-2'  style={{backgroundImage:`url(${bg})`}}>
      <div>
      <h1 className=' text-start '>{ (load ? 'loading' : movies.title)}</h1>
      <div className='flex gap-3  font-bold text-white'>
        <button className='bg-slate-600 opacity-50'>Play</button>
        <button className=' bg-slate-600 opacity-50'>My List</button>
      </div>
      <p className='text-justify w-2/3'>{ (load ? 'loading' : movies.overview)}</p>
      </div>


    </header>
  )
}

export default Banner
