import './App.css';
import  React , {useState} from 'react'
import Header from './Comp/Header'
import ImageGrid from './Comp/ImageGrid';
import Modal from './Comp/Modal';
import UploadForm from './Comp/UploadForm'
// import useState from 'react'
function App() {

  const [selectedImg , setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Header/>
      <UploadForm/>
      <ImageGrid setSelectedImg = {setSelectedImg}/>
      { selectedImg &&<Modal selectedImg = {selectedImg} setSelectedImg = {setSelectedImg}/>}
    </div>
  );
}

export default App;
