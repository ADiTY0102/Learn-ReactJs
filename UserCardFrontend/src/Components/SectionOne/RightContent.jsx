import React from 'react'
import ImageCards from './ImageCards'

const RightContent = () => {
    const cardData = [
        {
            id: 1,
            description: "Prime Customers that have access to bank credit and are satidfied with the current product.",
            image: "https://i.pinimg.com/736x/22/5a/ac/225aacc16c95e9fd86b30c68d3e2a3ad.jpg",
            btn: "Satisfied"
        },
        {
            id: 2,
            description: "Prime coustomers who have access to bank credit and are not satisfied with the current service",
            image: "https://i.pinimg.com/736x/e1/6b/c1/e16bc159664fcebe95f1a93ef6c7affa.jpg",
            btn: "Underserved"
        }, {
            id: 3,
            description: "Customers from near-prime and sub-prime segments with no access to bank credit.",
            image: "https://i.pinimg.com/1200x/e3/82/9f/e3829f3f5aeeacc813cd0a0a8eebc8ac.jpg",
            btn: "Underbanked"
        }
    ]
    return (
        <div className='h-full p-5 w-2/3 flex flex-nowrap gap-3 justify-evenly' >
            {cardData.map(function (data) {
                return <ImageCards
                    id={data.id}
                    data={data.description}
                    img={data.image}
                    btn={data.btn} 
                />
            })}
        </div>
    )
}

export default RightContent