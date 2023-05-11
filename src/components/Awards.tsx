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
        <span>{title}</span>
        <span>
          {isActive ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />}
        </span>
      </h2>

      {isActive && <p>{content}</p>}
    </>
  );
};

export default Awards;
