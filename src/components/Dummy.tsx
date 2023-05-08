import React from 'react'
import { FcSimCardChip } from 'react-icons/fc';
import { MdWorkOutline } from 'react-icons/md';
const  gyan  = require('../images/p7.jpg');



type Props = {}

const Dummy = (props: Props) => {
  return (
//     <div className="py-52  bg-[url('https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')]  ">
//       <div className="bg-white backdrop-blur-lg bg-opacity-50 border-2 border-cyan-400 rounded-xl m-44 p-20 flex flex-col justify-center items-center space-y-5">
//         <img  className='h-32 rounded-3xl shadow-2xl  ' src={gyan} alt="pic" />
//         <span className="text-5xl text-gray-300  font-extrabold uppercase tracking-wider ">Gyanindra Yadav</span>
//         <span className="text-5xl animate-bounce text-transparent bg-clip-text bg-gradient-to-br from-purple-900 to-pink-700 font-extrabold uppercase tracking-wide flex flex-row justify-center items-center space-x-5"><span>&#10094;</span><span>Frontend Developer</span><span>&#47;</span><span>&#10095;</span></span>
// </div>




  <div className=" font-poppins  container relative py-72 mx-auto bg-black  flex flex-row justify-center items-center">
    {/* <div className="absolute bg-red-500 h-32 w-32 rounded-full top-16 left-[420px] "></div> */}
    <div className="absolute  bg-red-500 h-32 w-32 rounded-full transform translate-x-[-157px] translate-y-[-75px]  "></div>
    <div className="card p-4 absolute text-white backdrop-filter backdrop-blur-lg shadow-xl  rounded-xl z-10 bg-white/20 h-40 w-80 flex flex-col justify-start items-start space-y-1">


      <div className="grid grid-cols-2 gap-60">
        <div className='flex flex-row justify-start items-center space-x-1'>
               <span className='text-lg'><MdWorkOutline/></span>
              <span className='text-sm font-bold flex flex-row justify-start items-center space-x-1'><span>HIRE</span> <span>ME</span></span>
        </div>
       <span><FcSimCardChip/></span>
      </div>

      <span className="name text-sm font-bold tracking-widest uppercase pt-4">Gyanindra Yadav</span>
       <span className="text-sm font-semibold uppercase tracking-wide flex flex-row justify-center items-center space-x-1"><span>&#10094;</span><span>Frontend Developer</span><span>&#47;</span><span>&#10095;</span></span>
    <div className="grid grid-cols-2 gap-[102px]">
      <div className="exp flex flex-col justify-start items-start space-x-1">
        <span className='text-sm '>Experience</span>
        <span className='text-sm '>3<sup>+</sup> Years</span>
      </div>
      <div className="notice flex flex-col justify-end items-end space-x-1">
        <span className='text-sm '>Notice Period</span>
        <span className='text-sm '>2 Months</span>
      </div>
    </div>

    </div>
    <div className="absolute bg-yellow-500 h-32 w-32 rounded-full transform translate-x-[157px] translate-y-[75px] "></div>
  </div>

    // </div>
  )
}

export default Dummy