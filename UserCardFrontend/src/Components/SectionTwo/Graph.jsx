import React from 'react'

const Graph = () => {
    return (
        <div className="flex-1 rounded-3xl px-8 py-6 flex flex-col justify-between">
        
            <div className="flex items-center justify-end">
                <span className="rounded-full bg-black text-white text-[10px] font-semibold px-3 py-1">
                    26.7% CAGR
                </span>
            </div>

            
            <div className="mt-4 flex-1 flex items-end justify-between gap-2">
                {[
                    { year: "2019", h: "16" },
                    { year: "2020", h: "70" },
                    { year: "2021", h: "132" },
                    { year: "2022", h: "330" },
                    { year: "2023", h: "100" },
                    { year: "2024", h: "264" },
                    { year: "2025", h: "370" },
                    { year: "2027", h: "430" },
                ].map((item) => (
                    <div key={item.year} className="flex flex-col items-center flex-1 border-b">
                        <div
                            className="w-4 rounded-full bg-black"
                            style={{ height: `${item.h}px` }}
                        />
                        <span className="mt-2 text-[10px] text-gray-400">
                            {item.year}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Graph