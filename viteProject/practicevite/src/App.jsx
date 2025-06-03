import { Link } from 'react-router-dom'
import './App.css'

function App() {

  return (

    <div>

      <h1>React Router Example</h1>

      <div>
        <nav className='flex flex-col gap-5 mt-10'>

          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>

        </nav>
      </div>

    </div>

  )
}

export default App
