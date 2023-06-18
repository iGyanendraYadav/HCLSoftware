import React from 'react'
import { BsArrowRight } from 'react-icons/bs';

type Props = {}

const Software = (props: Props) => {
  return (
    <>
    
                {/* HCL Software */}
                <div className="bg-gradient-to-r from-cyan-400 via-blue-950 to-blue-500 py-10">
                <div className="container mx-auto flex flex-col lg:flex-row justify-center  lg:justify-around items-center space-x-0 lg:space-x-96 space-y-3 lg:space-y-0 ">
                  <span className="text-white text-4xl font-extrabold">
                    HCLSoftware
                  </span>
                  <button className="bg-white text-xl font-bold text-emerald-700 hover:bg-cyan-200  p-2 rounded-lg flex flex-row justify-center items-center space-x-3 group">
                    <span>Contact Us</span>{" "}
                    <span className="group-hover:transition-transform group-hover:translate-x-1">
                      <BsArrowRight />
                    </span>
                  </button>
                </div>
              </div>
              </>
  )
}

export default Software