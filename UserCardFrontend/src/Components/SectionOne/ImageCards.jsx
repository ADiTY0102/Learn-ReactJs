import React from 'react'
import { ArrowRight } from 'lucide-react'
const ImageCards = () => {
  return (
    <div className='h-full w-70 rounded-3xl overflow-hidden relative'>
        <img className='h-full w-full object-cover' src="https://i.pinimg.com/736x/22/5a/ac/225aacc16c95e9fd86b30c68d3e2a3ad.jpg" alt="first" />
        <div className='absolute h-full w-full left-0 top-0 px-3 py-3 flex flex-col justify-between '>
            <h2 className=' bg-white text-black rounded-full w-6 pl-1.5'>1</h2>
            <div className=''>
                <p className='text-white font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum laborum obcaecati excepturi?</p>
                <div className='mt-5 flex'>
                    <button className='bg-blue-500 rounded-4xl px-7 font-semibold text-white'>Satisfied</button>
                    <button className='ml-2 rounded-full bg-blue-500 cursor-pointer'><ArrowRight size={44} color="#ffffff" strokeWidth={1.5} /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ImageCards