import {useState, useEffect} from 'react'
import axios from './axios.js'

function Row({title , fetchURL}) {

    const [movies,setmovies] = useState([])

    useEffect(()=>{
         async function fetchdata(){
            const request = await axios.get(fetchURL)
            console.log(request.data.results)
            setmovies(request.data.results)

            return request
         }
         fetchdata()


    },[])
    

  return (
    <>
        <h2> {title }</h2>
         <div className=' '>
          
          
         </div>
    </>
  )
}

export default Row
