import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='bg-blue-900 text-gray-300'>
      <div className="mx-auto container py-10">
          <footer className='grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 mx-5 lg:mx-12'>
                <div className="flex flex-col justify-center items-center space-y-1">
                    <h2 className='text-lg font-bold'>Company</h2>
                    <span className="text-sm">About</span>
                    <span className="text-sm">Careers</span>
                    <span className="text-sm">Blog</span>
                    <span className="text-sm">Brands</span>
                </div>

                <div className="flex flex-col justify-center items-center space-y-1">
                    <h2 className='text-lg font-bold'>Help center</h2>
                    <span className="text-sm">About</span>
                    <span className="text-sm">Careers</span>
                    <span className="text-sm">Blog</span>
                    <span className="text-sm">Brands</span>
                </div>

                <div className="flex flex-col justify-center items-center space-y-1">
                    <h2 className='text-lg font-bold'>Legal</h2>
                    <span className="text-sm">About</span>
                    <span className="text-sm">Careers</span>
                    <span className="text-sm">Blog</span>
                    <span className="text-sm">Brands</span>
                </div>

                <div className="flex flex-col justify-center items-center space-y-1">
                    <h2 className='text-lg font-bold'>Download</h2>
                    <span className="text-sm">About</span>
                    <span className="text-sm">Careers</span>
                    <span className="text-sm">Blog</span>
                    <span className="text-sm">Brands</span>
                </div>
          </footer>

          <hr className='my-5 mx-12 lg:mx-24' />

          <span className="text-sm flex justify-center pb-10">All rights reserved. &#64; 2023</span>
      </div>

    </div>

    


  )
}

export default Footer