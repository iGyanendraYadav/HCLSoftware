import React from 'react'

type Props = {}

const CompOne = (props: Props) => {
  return (
    <div className='text-center bg-blue-700 text-white'>
      <div className=" container mx-auto flex flex-row justify-center items-center py-10 ">
        <span className="text-5xl lg:text-9xl font-extrabold uppercase">Welcome</span>
      </div>
    </div>
  )
}

export default CompOne