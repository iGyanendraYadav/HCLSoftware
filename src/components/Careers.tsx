import React from 'react'
import { BsArrowRight } from "react-icons/bs";

type Props = {}

const Careers = (props: Props) => {
  return (
    <>
          {/* Careers at HCL Softwares */}
          <div className="bg-white">
        <div className="container mx-auto py-10 text-gray-800">
          <h2 className=" font-semibold text-xl lg:text-3xl text-center">
            Careers at HCL Softwares
          </h2>

          <div className="bg-gray-200 flex flex-col lg:flex-row justify-around items-center mx-5 lg:mx-10 my-7">
            <div className="flex flex-col justify-start items-start p-4 space-y-2 lg:space-y-5 lg:mx-5">
              <h3 className="text-xl lg:text-3xl font-bold">Our Careers</h3>
              <p className="text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae, vel optio cumque ipsam commodi iure! Recusandae
                provident blanditiis maiores, possimus ex illum, adipisci atque
                distinctio molestias quis error dignissimos. Debitis.
              </p>
              <button className="bg-emerald-800 hover:bg-emerald-900 p-2 text-white font-bold rounded-lg flex flex-row justify-center items-center space-x-2 group">
                <span>Find Out More</span>{" "}
                <span className="group-hover:transition-transform group-hover:translate-x-1">
                  <BsArrowRight />
                </span>
              </button>
            </div>
            <img
              className=""
              src="https://www.hcltechsw.com/wps/wcm/connect/79208fb8-0a37-46bd-b53f-73c6c5dacef4/careers-img.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-79208fb8-0a37-46bd-b53f-73c6c5dacef4-ogYiHIU"
              alt="hcl"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Careers