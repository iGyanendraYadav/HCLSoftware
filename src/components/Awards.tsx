import React, { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

type Props = {
  title: string;
  content: string;
};

const Awards = (props: Props) => {
  const { title, content } = props;
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <h2
        onClick={() => setIsActive(!isActive)}
        className="flex flex-row justify-center items-center space-x-3 cursor-pointer text-xl font-bold"
      >
        <span className="">{title}</span>
        <span >
          {isActive ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />}
        </span>
      </h2>

      {isActive && <p className=" uppercase bg-gradient-to-br from-cyan-600 to-cyan-900  rounded-xl p-4">{content}</p>}
    </>
  );
};

export default Awards;