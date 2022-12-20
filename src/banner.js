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

   })
  
   },[])
    console.log(movies)

    
   
  return (
    <header className='' >
      <div>
      { /* title*/ movies.title}
      

      </div>


    </header>
  )
}

export default Banner
