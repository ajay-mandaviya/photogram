import React from 'react'
import useFireStore from '../Hook/useFireStore'
import {motion} from 'framer-motion'
import './ImageGrid.css'

const ImageGrid = ({setSelectedImg}) => {
    const {docs}  = useFireStore('images');
    console.log(docs);
    return (
        <div className = "img-grid">
            {docs && docs.map(doc=>(
                <motion.div className = "image-wrap" key =  {doc.id}
                layout
                whileHover = {{opacity : 1}}
                onClick = {()=>{setSelectedImg(doc.url)}}
                >
                    <motion.img src={doc.url} alt = "upload pic"
                        initial = {{opacity :0}}
                        animate = {{opacity :1}}
                        transition = {{delay : 1}}
                    />
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid


