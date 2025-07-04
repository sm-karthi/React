import React from 'react'

function about({ dispatch }) {
    return (
        <div>
            <h1>About page</h1>

            <button className='bg-blue-500 py-1 px-3 shadow-md text-white 
      font-semibold rounded hover:bg-blue-700 duration-150'
                onClick={() => dispatch({ screen: "WELCOME" })}>Welcome</button>

            <button className='bg-blue-500 py-1 px-3 shadow-md text-white 
      font-semibold rounded hover:bg-blue-700 duration-150 mt-10 ml-10'
                onClick={() => dispatch({ screen: "HOME" })}>Home</button>
        </div>
    )
}

export default about
