import React from 'react'
import UserCard from '../Components/UserCard'
const UserPage = () => {
  return (
    <div className='bg-black h-screen p-5 mb-5 items-center '>
        <h1 className='text-center text-white font-bold text-2xl'>Profiles(27)</h1>
        <UserCard />
    </div>
  )
}

export default UserPage