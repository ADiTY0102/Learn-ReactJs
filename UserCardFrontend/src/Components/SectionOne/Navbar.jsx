import React from 'react'
import { CornerDownRight } from 'lucide-react'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-10 py-5'>
        <h4 className='text-white bg-black p-3 rounded-full font-semibold tracking-widest uppercase'>Investment Module</h4>
        <button className='text-black bg-gray-100 px-6 py-3 flex items-center gap-1 font-semibold rounded-full hover:cursor-pointer tracking-widest'><CornerDownRight size={16} strokeWidth={2} /> Digital Banking Platform</button>
    </div>
  )
}

export default Navbar