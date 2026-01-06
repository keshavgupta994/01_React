import React from 'react'
import {MoveUpRight} from 'lucide-react'

const LeftContent = () => {
  return (
    <div className='h-full w-1/4 flex flex-col justify-between'>
      <div className='p-4'>
        <h3 className='text-5xl font-medium mb-7'>Prospective <br /><span className='text-gray-600'>Customer</span><br />Segmentation</h3>
        <p className='text-lg text-gray-700'>Depending on customer satisfaction and access to banking products, potential target audience can be divided into three groups</p>
      </div>
      <div className='p-4'><MoveUpRight className='h-12 w-12'/></div>
    </div>
  )
}

export default LeftContent
