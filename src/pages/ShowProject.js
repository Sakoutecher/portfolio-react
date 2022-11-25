import React from 'react'
import { useParams } from 'react-router-dom'

function ShowProject() {
   const page = useParams()
   console.log(page)

    return (
        <div>Bonjour le monde</div>
    )
}

export default ShowProject