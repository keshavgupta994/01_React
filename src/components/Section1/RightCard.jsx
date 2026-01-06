import React from 'react'
import {ArrowRight} from 'lucide-react'

const RightCard = (props) => {
  return (
    <div className='h-full w-80 bg-red-500 rounded-3xl overflow-hidden relative shrink-0'>
      <img src={props.data.img} alt="" className='h-full w-full object-cover'/>
      <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
        <h2 className='bg-white rounded-full h-12 w-12 flex justify-center items-center text-2xl font-bold'>{props.id+1}</h2>
        <p className='text-lg leading-normal text-white mt-30'>{props.data.intro}</p>
        <div className='flex justify-between'>
            <button className='bg-blue-600 text-white font-medium px-7 py-3 rounded-full font-lg'>{props.data.tag}</button>
            <button className='bg-blue-600 text-white font-medium px-3 py-3 rounded-full font-lg'><ArrowRight /></button>
        </div>
      </div>
    </div>
  )
}

export default RightCard
