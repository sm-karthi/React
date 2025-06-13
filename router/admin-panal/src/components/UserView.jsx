import React from 'react'
import { useParams } from 'react-router-dom'

function UserView() {
    let { id } = useParams();

    return (


        <h1 className='flex items-center justify-center h-screen'>UserView - {id}</h1>
    )
}

export default UserView
