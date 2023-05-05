import React from "react";
import { AiOutlineLock, AiOutlineRadarChart } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { SiDatabricks } from "react-icons/si";
import { GiSandsOfTime } from "react-icons/gi";
import { clients, events, products } from "../data/ourData";

type Props = {};

type Client = {
  name: string;
  email: string;
};

type Product = {
  title: string;
  desc: string;
};

type Event = {
  type: string;
  title: string;
  image: string;
};

const CompTwo = (props: Props) => {
  return (
    <>
      <div className="bg-white">
        {/* Statistics */}

        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-5 lg:gap-5 mx-5 my-10">
            <div className="flex flex-col justify-center items-center">
              <span className="text-cyan-500 font-bold text-2xl lg:text-3xl">
                2.6+ Billion
              </span>
              <span className="text-sm text-gray-800 text-center">
                People reached
              </span>
            </div>

            <div className="flex flex-col justify-center items-center">
              <span className="text-cyan-500 font-bold text-2xl lg:text-3xl">
                100M
              </span>
              <span className="text-sm text-gray-800 text-center">
                Endpoints secured
              </span>
            </div>

            <div className="flex flex-col justify-center items-center">
              <span className="text-cyan-500 font-bold text-2xl lg:text-3xl">
                1.5M
              </span>
              <span className="text-sm text-gray-800 text-center">
                LOC scanned
              </span>
            </div>

            <div className="flex flex-col justify-center items-center">
              <span className="text-cyan-500 font-bold text-2xl lg:text-3xl">
                $30M
              </span>
              <span className="text-sm text-gray-800 text-center">
                New self-service portal
              </span>
            </div>

            <div className="flex flex-col justify-center items-center">
              <span className="text-cyan-500 font-bold text-2xl lg:text-3xl">
                26K
              </span>
              <span className="text-sm text-gray-800 text-center">
                Employees supported
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Our Areas of Expertise */}

      <div className="bg-gray-300">
        <div className="container mx-auto py-10">
          <h2 className="text-gray-800 font-semibold text-xl lg:text-3xl text-center">
            Our Areas of Expertise
          </h2>
          <p className="text-gray-700 text-base lg:text-2xl text-center my-4 mx-4 lg:mx-14">
            We deliver software that fulfills the transformative needs of
            clients around the world.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-[2px] mx-5 lg:mx-16 my-5">
            <div className="bg-[#14142b] hover:bg-cyan-700 text-white flex flex-col justify-start items-start space-y-3 p-5 rounded-tl-lg rounded-bl-lg">
              <span className="text-3xl text-cyan-500">
                <AiOutlineRadarChart />
              </span>

              <span className="text-2xl lg:text-3xl">AI & Automation</span>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit exercitationem accusamus autem qui nihil fugiat eaque
                ea consequuntur harum, inventore aliquam nulla perferendis
                officia laboriosam illo veritatis quidem commodi odio.
              </p>

              <span className="flex flex-row justify-start items-center space-x-1">
                <span className="hidden lg:block">Learn More</span>{" "}
                <span className="">
                  <BsArrowRight />
                </span>
              </span>
            </div>

            <div className="bg-[#14142b] hover:bg-cyan-700 text-white flex flex-col justify-start items-start space-y-3 p-5 ">
              <span className="text-3xl text-cyan-500">
                <SiDatabricks />
              </span>

              <span className="text-2xl lg:text-3xl">Data & Analytics</span>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit exercitationem accusamus autem qui nihil fugiat eaque
                ea consequuntur harum, inventore aliquam nulla perferendis
                officia laboriosam illo veritatis quidem commodi odio.
              </p>

              <span className="flex flex-row justify-start items-center space-x-1">
                <span className="hidden lg:block">Learn More</span>{" "}
                <span className="">
                  <BsArrowRight />
                </span>
              </span>
            </div>

            <div className="bg-[#14142b] hover:bg-cyan-700 text-white flex flex-col justify-start items-start space-y-3 p-5 ">
              <span className="text-3xl text-cyan-500">
                <GiSandsOfTime />
              </span>

              <span className="text-2xl lg:text-3xl">Transformation</span>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit exercitationem accusamus autem qui nihil fugiat eaque
                ea consequuntur harum, inventore aliquam nulla perferendis
                officia laboriosam illo veritatis quidem commodi odio.
              </p>

              <span className="flex flex-row justify-start items-center space-x-1">
                <span className="hidden lg:block">Learn More</span>{" "}
                <span className="">
                  <BsArrowRight />
                </span>
              </span>
            </div>

            <div className="bg-[#14142b] hover:bg-cyan-700 text-white flex flex-col justify-start items-start space-y-3 p-5 rounded-tr-lg rounded-br-lg">
              <span className="text-3xl text-cyan-500">
                <AiOutlineLock />
              </span>

              <span className="text-2xl lg:text-3xl">Security</span>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit exercitationem accusamus autem qui nihil fugiat eaque
                ea consequuntur harum, inventore aliquam nulla perferendis
                officia laboriosam illo veritatis quidem commodi odio.
              </p>

              <span className="flex flex-row justify-start items-center space-x-1">
                <span className="hidden lg:block">Learn More</span>{" "}
                <span className="">
                  <BsArrowRight />
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Our Clients */}

      <div className="bg-white">
        <div className="container mx-auto py-10">
          <h2 className="text-gray-800 font-semibold text-xl lg:text-3xl text-center">
            Our Clients
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-5 lg:gap-5 mx-5 lg:mx-16 my-5">
            {clients.map((client: Client) => {
              return (
                <span
                  className="uppercase text-2xl text-gray-700 font-bold"
                  key={client.email}
                >
                  {client.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="bg-[#14142b]">
        <div className="container mx-auto">
          <h2 className="text-white font-bold text-xl lg:text-3xl text-left px-5 py-10 lg:px-14 lg:py-12">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-5 mx-5 lg:mx-14">
            {products.map((product: Product, i) => {
              return (
                <div
                  key={i}
                  className="group bg-white text-gray-800 p-5 rounded-lg  hover:bg-gradient-to-br hover:from-cyan-200 hover:via-cyan-100 hover:to-cyan-500 flex flex-col justify-start items-start"
                >
                  <h3 className="text-xl font-bold">{product.title}</h3>
                  <p className="text-gray-700 text-lg">{product.desc}</p>
                  <span className="text-lg flex flex-row justify-center items-center space-x-2">
                    <span className="">Learn More</span>{" "}
                    <span className=" inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                      <BsArrowRight />
                    </span>
                  </span>
                </div>
              );
            })}
          </div>

          {/* <a href="http://www.gyanindra.com" className="text-white  text-right px-0 py-10 lg:px-0 lg:py-12" target="_blank" rel="noopener noreferrer">See all products</a> */}
          <h2 className="text-white font-bold text-base underline text-right px-0 py-10 lg:px-0 lg:py-12">
            See all products
          </h2>
        </div>
      </div>

      {/* Insights and Events */}

      <div className="bg-gray-200 pt-5 pb-10">
        <div className="container mx-auto">
          <h2 className="text-gray-700 font-bold text-xl lg:text-3xl text-left px-5 py-10 lg:px-14 lg:py-10">
            Insights and Events
          </h2>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 mx-5 lg:mx-14 pb-10 lg:pb-10">
            {events.map((event: Event, i) => {
              return (
                <div
                  key={i}
                  className=" group flex flex-col justify-start items-start space-y-3 pb-5 rounded-b-sm bg-white hover:bg-gray-300"
                >
                  <img className="h-52 w-full lg:h-52 rounded-t-lg  " src={event.image} alt={event.title} />
                  <span  className="text-sm indent-3 ">{event.type}</span>
                  <span className="text-lg indent-3  ">{event.title}</span>
                  <span className="text-sm indent-3  flex flex-row justify-center items-center space-x-2">
                    <span className="">Learn More</span>{" "}
                    <span className=" inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                      <BsArrowRight />
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Careers at HCL Softwares */}
      <div className="bg-white">
        <div className="container mx-auto py-10 text-gray-800">
          <h2 className=" font-semibold text-xl lg:text-3xl text-center">
            Careers at HCL Softwares
          </h2>

          <div className="bg-gray-200 flex flex-col lg:flex-row justify-around items-center mx-5 lg:mx-16 my-7">
            <div className="flex flex-col justify-start items-start p-4 space-y-2 lg:space-y-5 lg:mx-10">
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
  );
};

export default CompTwo;
