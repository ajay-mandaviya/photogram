import "./App.css";
import React, { useState } from "react";
import Header from "./Comp/Header";
import ImageGrid from "./Comp/ImageGrid";
import Modal from "./Comp/Modal";
import UploadForm from "./Comp/UploadForm";
import Authentication from "./Comp/Authentication";
import { useAuthState } from "react-firebase-hooks/auth";
import { projectAuth } from "./firebase/config";
import Error from './Comp/Error'
// import useState from 'react'
function App() {
  const [authenticate, setAuthenticate] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [user] = useAuthState(projectAuth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [click, setClick] = useState(false);
  const [showError , setShowError] = useState(false);

  return (
    <div className="App">
      <Header
        setAuthenticate={setAuthenticate}
        description={
          user
            ? "Upload Your Best Photos and Share With Your Friends"
            : "Sign In to Upload and Share  photos with friends"
        }
        click = {click}
        setClick = {setClick}
        setShowError = {setShowError}
        showError = {showError}
      />

      {authenticate && (
        <Authentication
          setAuthenticate={setAuthenticate}
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
        />
      )}
          { showError && <Error
            setShowError = {setShowError}
            showError = {showError}
            setClick = {setClick}
          />}
      {user && <UploadForm />}
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
