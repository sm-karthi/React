import React from 'react'

function Welcome({dispatch}) {
  return (
    <div>
      <h1>Welcome</h1>

      <button className='bg-blue-500 py-1 px-3 shadow-md text-white 
      font-semibold rounded hover:bg-blue-700 duration-150' 
      onClick={() => dispatch({screen : "HOME"})}>Home</button>
    </div>
  )
}

export default Welcome
