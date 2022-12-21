import {useState ,useEffect} from 'react'
import axios from './axios'
import requests from './request'
import Navbar from './navbar'

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
    <>
    
    <header className=' text-white  w-screen h-screen  bg-cover bg-no-repeat	 '  style={{backgroundImage:`url(${bg})`}}>
      <Navbar />
      
      <div className=' p-3 pl-7 flex flex-col h-screen justify-center '>
      <h1 className=' text-start font-bold text-5xl'>{ (load ? 'loading' : movies?.title|| movies?.name || movies?.original_name)}</h1>
      <div className='flex gap-5  font-bold text-white p-3'>
        <button className='bg-slate-800 opacity-75 px-3  text-center'>Play</button>
        <button className=' bg-slate-800 opacity-75 px-3 text-center'>My List</button>
      </div>
      <p className='text-justify w-1/2'>{ (load ? 'loading' : movies.overview)}</p>
      </div>


    </header>
    </>
  )
}

export default Banner
