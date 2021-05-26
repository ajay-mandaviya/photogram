import React from 'react'
import './Header.css'
const Header = () =>{


    return (
        <div >
        <div className  = "header">
        <h2>PhotoGram</h2>
        <div className   = "btn">
            <button>Sign in</button>
            <button>Sign up</button>
        </div>
        </div>
        <hr></hr>
        <div className = "title">
            <h2>Your Picture</h2>
            <p>Upload Your Best Picture and Share With Your Friends</p>
        </div>
        </div>
    )
}
export default Header