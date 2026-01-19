import React from 'react'
import { ArrowUpRight } from 'lucide-react'
const BottomCard = () => {
    return (
        <div className='flex gap-15'>
            <div className="relative rounded-3xl flex flex-col bg-[#4363FF] text-white px-4 py-6 w-50">
                <div className='absolute top-0 right-0 rounded-bl-full bg-white h-20 w-20 flex items-center p-1 justify-center'>
                    <div className='absolute rounded-full flex items-center justify-center top-0 right-0 border h-15 w-15 bg-white border-black'>
                        <ArrowUpRight className='rounded-full' size={44} color="#000000" strokeWidth={2} />
                    </div>
                </div>
                <p className="text-6xl font-bold mt-20">26.7%</p>
                <p className="mt-2 text-xs font-medium tracking-wide opacity-80">
                    Expected annual growth of eCom market size
                </p>
            </div>

            <div className="relative rounded-3xl flex flex-col text-white px-4 py-6 w-50 bg-[#C9F95F] text-black px-3 w-50 py-6">
                <div className='absolute top-0 right-0 rounded-bl-full bg-white h-20 w-20 flex items-center p-1 justify-center'>
                    <div className='absolute rounded-full flex items-center justify-center top-0 right-0 border h-15 w-15 bg-white border-black'>
                        <ArrowUpRight className='rounded-full' size={44} color="#000000" strokeWidth={2} />
                    </div>
                </div>
                <p className="text-6xl font-bold mt-20 text-black">25%</p>
                <p className="mt-2 text-xs font-medium tracking-wide text-black">
                    E-com share of the organized retail in 2020
                </p>
            </div>
        </div>
    )
}

export default BottomCard