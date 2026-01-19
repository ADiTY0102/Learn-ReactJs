import React from 'react'
import { Zap } from 'lucide-react'
import BottomCard from './BottomCard'
const LeftContent = () => {
    return (
        <div className='h-full w-1/2 flex flex-col justify-between'>
            <div className='px-3 py-2 mr-10'>
                <h1 className='text-black text-5xl font-bold'>
                    E-com market is expected to exceeds <span className='text-[#c9f95f]'>$300B</span> in 2027
                </h1>
                <div className='flex flex-row gap-5 py-10'>
                    <div className='mt-8.5'>
                        <Zap size={35} color="#6366f1" strokeWidth={1.5} />
                    </div>
                    <div>
                        <p className='mt-7 text-gray-500 text-xl font-lg'>In India MSME contribution to eTelling Sales is expected to
                            grow between 60-70% annually to reach $300B in 2027.
                        </p>
                    </div>
                </div>
                <BottomCard/>
            </div>
        </div>
    )
}

export default LeftContent