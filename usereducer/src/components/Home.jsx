import React from 'react'

function home({ dispatch }) {
    return (
        <div>
            <h1>Home page</h1>

            <button className='bg-blue-500 py-1 px-3 shadow-md text-white 
      font-semibold rounded hover:bg-blue-700 duration-150'
            onClick={() => dispatch({screen : "WELCOME"})}>Welcome</button>

            <button className='bg-blue-500 py-1 px-3 shadow-md text-white 
      font-semibold rounded hover:bg-blue-700 duration-150 ml-10 mt-10'
                onClick={() => dispatch({ screen: "ABOUT" })}>About</button>
        </div>
    )
}

export default home
