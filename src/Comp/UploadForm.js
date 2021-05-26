import React from 'react'
import {useState} from  'react'
import './UploadForm.css'
import ProgressBar from './ProgressBar'
const Uploadform = () =>{

    const [file , setFile]  = useState(null)
    const [error , setError]  = useState(null)
    const  changeHandler = (e) =>{
        // conosole.log("file selected")
        let selected  =  e.target.files[0];

        const types = ['image/png' , 'image/jpeg'];
        // console.log(selected)
        if(selected && types.includes(selected.type)){
            setFile(selected)
            setError('')
        }else{
            setFile(null)
            setError("Please Select and Image file png or jpeg")
            alert("Please Select and Image file png or jpeg")
        }
    }

    return (
        <form>
        <div className  = "input_section">
            <label><input type = "file" onChange = {changeHandler}/><span>+</span></label>
        </div>
            <div className = "output">
            {error && <div className = "error">{error}</div>}
            {file && <div className  = "">{file.name}</div>}
            {file && <ProgressBar  file = {file} setFile = {setFile}/> }
            </div>
        </form>
    )
}
export default Uploadform;