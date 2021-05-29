import React from 'react'
import './Authentication.css'
import { projectAuth } from "../firebase/config";
import CloseIcon from "@material-ui/icons/Close";
import {useState} from 'react'
const Authentication = ({setAuthenticate , email,
    password,
    setEmail,
    setPassword,}) =>{
    const [loginMessage, setLoginMessage] = useState("");
const letsSignIn = () =>{
        projectAuth.signInWithEmailAndPassword(email , password ).then((user)=>{
            setLoginMessage("Success");
            setEmail("");
            setPassword("");
            setAuthenticate(false);
        })
        .catch((err)=>{
            setLoginMessage(err.message)
        });
};

const letsSignup = () =>{
    projectAuth.createUserWithEmailAndPassword(email , password).then(()=>{
    setLoginMessage("Success");
    setEmail("");
    setPassword("");
    setAuthenticate(false);
    }).catch((err)=>{
        setLoginMessage(err.message)
    })

}
return (
    <div className="main">
    <div className="inside">
    <CloseIcon className = "closebtn"
        onClick = {()=>setAuthenticate(false)}
    />
        <h2>Sign in</h2>
        <hr/>
        <p className = "text">{loginMessage}</p>
        <p className = "text">test@gamil.com</p>
        <p className = "text">123456</p>
        <form>
        <input 
        type="email"
        placeholder="Enter Your Email" 
        onChange = {(e)=>setEmail(e.target.value)}
        />
        <input 
        type="password" 
        placeholder="Enter your pass"
        onChange = {(e)=>setPassword(e.target.value)}
        />
        </form>
        <div className = "buttons">
        <button
        onClick = {letsSignIn}
        >Sign in</button>
        <button
        onClick = {letsSignup}
        >Sign up</button>
    </div>
    </div>
    </div>
)
}
export default Authentication