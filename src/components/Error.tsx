import React from 'react'

type Props = {}

const Error = (props: Props) => {
  return (
    <div className='container mx-auto'>
          <div className="flex flex-col justify-center items-center space-y-3 text-5xl lg:text-9xl font-extrabold py-14">
            <span className="text-gray-700 tracking-widest">ERROR</span>
            <span className="text-red-600 tracking-widest">404</span>
          </div>
    </div>
  )
}

export default Error