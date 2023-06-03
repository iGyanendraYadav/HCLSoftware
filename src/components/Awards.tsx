import React from "react";


type Props = {
  title: string;
  content: string;
};

const Awards = (props: Props) => {
  const { title, content } = props;

  return (
    <>
   
      <h2

        className="flex flex-row justify-center items-center space-x-3 text-xl font-bold"
      >
        <span className="">{title}</span>

      </h2>

    <p className=" p-4">{content}</p>
    </>
  );
};

export default Awards;