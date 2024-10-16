import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
const BackButton = ({description='/'}) => {
  return (
    <div className='flex'>
        <Link to={description}
        className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>
            <BsArrowLeft className='text-2xl'/>
        
        </Link>
</div>
  )
}

export default BackButton