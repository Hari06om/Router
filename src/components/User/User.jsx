import React from 'react'
import { useParams} from 'react-router-dom'


function User() {
    const { userid } = useParams()

      return (
    <div
    className=' user-profile 
    border-4  border-gray-300  shadow-md  rounded-md  overflow-hidden  max-w-sm  mx-auto  p-6  transition-
    bg-yellow-500  text-center  text-3xl p-4  rounded-3  bg-light  shadow-sm  text-dark  mb-3  w-100  mx-auto'
    >
      User : {userid}
    </div>
  )
}

export default User
