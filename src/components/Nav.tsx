import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineSetting, AiOutlineUser } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';

type Props = {}

const Nav = (props: Props) => {
  return (
    
    <div className="ModernNav w-full fixed bottom-3 lg:bottom-2">
  <div className="container mx-auto">
        <div className="flex flex-row items-center justify-center space-x-3 bg-gray-400 py-2 mx-20 lg:mx-[520px] bg-opacity-50 backdrop-filter backdrop-blur-2xl rounded-xl">
          <span className=" bg-cyan-600 p-2 rounded-xl"><Link to="/"><span className='text-2xl text-white'><AiOutlineHome/></span></Link></span>
          <span className="  bg-cyan-600 p-2 rounded-xl"><Link to="/services"><span className='text-2xl text-white'><AiOutlineSetting/></span></Link></span>
          <span className="  bg-cyan-600 p-2 rounded-xl"><Link to="/contact"><span className='text-2xl text-white'><BsTelephone/></span></Link></span>
          <span className="  bg-cyan-600 p-2 rounded-xl"><Link to="/aboutus"><span className='text-2xl text-white'><AiOutlineUser/></span></Link></span>
        </div>
  </div>
</div>
  )
}

export default Nav