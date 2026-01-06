import React from 'react'
import RightCard from './RightCard.jsx'

const RightContent = (props) => {
  return (
    <div className='h-full w-3/4 p-6 flex gap-8 flex-nowrap overflow-x-auto rounded-4xl' id='right'>
        {props.users.map(function(elem, idx){
            return <RightCard data={elem} id={idx}/>
        })}
    </div>
  )
}

export default RightContent