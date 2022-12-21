import {useState, useEffect} from 'react'
import axios from './axios.js'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

function Row({title , fetchUrl , islargerow}) {

    const [movies,setmovies] = useState()
    const baseurl = 'https://image.tmdb.org/t/p/original/'

    useEffect(()=>{
      axios.get(fetchUrl)
      .then(d=>{
        setmovies(d.data)
        
        
      })
    },[fetchUrl])
    
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: '#000',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        color:'#fff'
      }


  return (
    <>
    <div className=' text-white bg-black'>
        <h2 className='font-extrabold p-2 text-start  text-xl '> {title}</h2>
         <div  className='flex gap-2 overflow-x-scroll overflow-y-hidden p-2 no-scrollbar ml-3 border-solid border-white'>
          {
            movies &&
            movies.results.map((d)=>(
                <>
              <img  key={d.id} src={baseurl+(islargerow ? d.poster_path : d.backdrop_path)} alt={d.name}  onClick={handleOpen} className='cursor-pointer w-1/5 hover:scale-110 hover:ease-in duration-300 p-2 rounded' />
              
      <Modal
        open={open}
        onClose={handleClose} >
        <Box sx={style}>
          Hi
        </Box>
      </Modal>
              </>

            ))
          }
          
         </div>
         </div>
    </>
  )
}

export default Row
