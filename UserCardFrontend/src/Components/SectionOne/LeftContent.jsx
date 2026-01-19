import React from 'react'
import { ArrowUpRight } from 'lucide-react'
const LeftContent = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between'>
        <div className='px-3 py-2 mr-10'>
            <h1 className='text-black text-6xl font-semibold'>
                Prospective <br />Customer<br /> Segmentation
            </h1>
            <p className='mt-7 text-gray-400 text-xl'>Depending upon customer satisfaction and access to the banking 
                products, potential target audience can be divided into three groups.
            </p>
        </div>
        <div>
            <ArrowUpRight size={100} color="#000000" strokeWidth={2} />
        </div>
    </div>
  )
}

export default LeftContent