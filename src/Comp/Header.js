import React from "react";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { projectAuth } from "../firebase/config";
const Header = ({ setAuthenticate, description, click, setClick , setShowError }) => {
  const [user] = useAuthState(projectAuth);
  // const handleSingIn = () =>{
  // console.log("click")
  // !user ? projectAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()) : projectAuth.signOut();
  // }

  const handleSingup = () => {
    // console.log("click")
    user ? projectAuth.signOut() : setAuthenticate(true);
    setClick(false);
    //show signup box make val true
  };

  return (
    <div>
      <div className="header">
        <h2>PhotoGram</h2>
        <div className="btn">
          <button
            onClick={() => {
              setClick(!click);
              !user &&   setShowError(true);
            }}
          >
            {!click ? "Your post" : "Public"}
          </button>
          <button
            onClick={handleSingup} //lets show popup box
          >
            {user ? "Sign Out" : "Sign In"}
          </button>
        </div>
      </div>
      <hr></hr>
      <div className="title">
        <h2>{click ? "Your Post" : "Public Post"}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default Header;
