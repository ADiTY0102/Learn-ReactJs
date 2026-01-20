import React from 'react'
import { ArrowRight } from 'lucide-react'
const ImageCards = (props) => {
    return (
        <div className='h-full w-70 rounded-3xl bg-black overflow-hidden relative'>
            <img className='h-full w-full object-cover opacity-50 hover:blur-xs' src={props.img} alt="first" />
            <div className='absolute h-full w-full left-0 top-0 p-8 flex flex-col justify-between '>
                <h2 className=' bg-white text-black rounded-full w-8 h-8 font-semibold flex items-center justify-center'>{props.id}</h2>
                <div className=''>
                    <p className='text-white font-semibold'>{props.data}</p>
                    <div className='mt-5 flex'>
                        <button className={`${props.btn === "Satisfied" || props.btn === "Underserved" ? "bg-indigo-500 text-white" : "bg-[#c9f95f] text-black"} rounded-4xl px-5 py-0 font-semibold cursor-pointer`}>
                            {props.btn}
                        </button>
                        <button className={`${props.btn === "Satisfied" || props.btn === "Underserved" ? "bg-indigo-500" : "bg-[#c9f95f]"} ml-2 rounded-full cursor-pointer`}>
                            <ArrowRight  size={44} color="#000000" strokeWidth={1.5} />
                        </button>
                    </div>
                </div>
            </div>
        </div> // 
    )
}

export default ImageCards