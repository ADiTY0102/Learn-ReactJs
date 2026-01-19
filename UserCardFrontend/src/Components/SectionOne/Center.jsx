import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Center = () => {
  return (
    <div className='py-10 px-10 h-[90vh] flex gap-10  items-center'>
      <LeftContent/>
      <RightContent/>
    </div>
  )
}

export default Center