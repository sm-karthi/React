import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import './App.css'
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"

function App() {


  return (
    <>

      <BrowserRouter>

        <ul className='flex gap-4 justify-center mt-10'>

          <li className='buttons'>
            <Link to={"/"}>Home</Link>
          </li>

          <li className='buttons'>
            <Link to={"/about"}>About</Link>
          </li>

          <li className='buttons'>
            <Link to={"/contact"}>Contact</Link>
          </li>

        </ul>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
