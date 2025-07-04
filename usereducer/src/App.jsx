
import { useReducer } from 'react'
import './App.css'
import Welcome from './components/Welcome'
import Home from './components/Home';
import About from './components/About';

function reducer(state, action) {

  switch (action.screen) {
    case "WELCOME":
      return { screen: "WELCOME" }
    case "HOME":
      return { screen: "HOME" }
    case "ABOUT":
      return { screen: "ABOUT" }
    default:
      return state;
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, {
    screen: "WELCOME"
  })


  return (

    <div>

      {
        state.screen === "WELCOME" && <Welcome dispatch={dispatch} />
      }

      {
        state.screen === "HOME" && <Home dispatch={dispatch} />
      }

      {
        state.screen === "ABOUT" && <About dispatch={dispatch} />
      }

    </div>
  )
}

export default App
