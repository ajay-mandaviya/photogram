import React from 'react'
import useStorage from '../Hook/useStorage';
import {useEffect} from 'react'
import './ProgressBar.css';
import {motion} from 'framer-motion'

const ProgressBar = ({file , setFile}) =>{
    
    const {url , progress} = useStorage(file)
    // console.log(url , progress)

   useEffect(()=>{
       if(url){
           setFile(null)
       }
   } , [url , setFile])
   

    return (
        <motion.div className = "progress-bar"
            initial = {{width : 0}}
            animate = {{width: progress + "%"}}
            
         ></motion.div>
    )
}
export default ProgressBar
