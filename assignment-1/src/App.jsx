import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/layout/navbar";
import "./App.css";
import Home from "./components/home/Home";

function App() {

  return (
    <>
     <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path="/" element={<Home />}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
