import React from "react";
import { accordionData } from "../data/ourData";


type Props = {
  title: string;
  content: string;
};

const Awards = (props: Props) => {

  return (
    <>




        <div className="bg-gradient-to-r from-[#000022] to-[#35bfe4] py-4  ">
        <div className="container mx-auto">
          <h2 className="text-white font-bold text-3xl mx-5 lg:mx-12 pt-10 pb-5">
            Awards & Recognition
          </h2>

          <div className="flex flex-col justify-start items-start pt-0 pb-5 mx-5 lg:mx-12  text-white">


          {accordionData.map((one) =>  {
            return (
              <>
                            <span className="text-3xl font-bold">{one.title}</span>
              <span className="text-base">{one.content}</span>
              </>

            )

          }
          )}

          </div>
        </div>
      </div>
    </>
  );
};

export default Awards;