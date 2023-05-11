import Header from "./components/Header.tsx";
import CompOne from "./components/CompOne.tsx";
import CompTwo from "./components/CompTwo.tsx";
import Dummy from "./components/Dummy.tsx";
import Awards from "./components/Awards.tsx";
import { accordionData  } from "./data/ourData.js";

function App() {

  return (
    <>
      {/* <Header/>
  <CompOne/>
  <CompTwo/> */}

      {/* <Dummy/> */}

      {/* Awards & Recognition */}

      <div className="bg-gradient-to-r from-[#000022] to-[#35bfe4] h-96 ">
        <div className="container mx-auto">
          <h2 className="text-white font-bold text-3xl mx-5 lg:mx-12 pt-10 pb-5">
            Awards & Recognition
          </h2>

          <div className="flex flex-col justify-start items-start pt-0 pb-10 mx-5 lg:mx-12 w-auto lg:w-1/2 text-white">


          {accordionData.map(({ title, content }) => (
            <Awards title={title} content={content} />
          ))}

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
