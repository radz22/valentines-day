import React, { useState } from "react";

const ValentinesPage = () => {
  const [value, setValue] = useState<string>("top-[75%]");
  const [done, setDone] = useState<boolean>(false);

  const position = [
    "top-[0%] ",
    "bottom-[0%]",
    "left-[0%]",
    "right-[0%]",
    "top-[10%] ",
    "bottom-[10%]",
    "left-[10%]",
    "right-[10%]",
    "top-[20%] ",
    "bottom-[20%]",
    "left-[20%]",
    "right-[20%]",
    "top-[30%] ",
    "bottom-[30%]",
    "left-[30%]",
    "right-[30%]",
    "top-[40%] ",
    "bottom-[40%]",
    "left-[40%]",
    "right-[40%]",
    "top-[50%] ",
    "bottom-[50%]",
    "left-[50%]",
    "right-[50%]",
    "top-[60%] ",
    "bottom-[60%]",
    "left-[60%]",
    "right-[60%]",
    "top-[70%] ",
    "bottom-[70%]",
    "left-[70%]",
    "right-[70%]",
    "top-[80%] ",
    "bottom-[80%]",
    "left-[80%]",
    "right-[80%]",
    "top-[90%] ",
    "bottom-[90%]",
    "left-[90%]",
    "right-[90%]",
  ];
  const handleRandom = () => {
    const randomPosition = Math.floor(Math.random() * position.length);

    const random = position[randomPosition];

    setValue(random);
    return random;
  };

  const handleHover = () => {
    handleRandom();
  };

  const handleDone = () => {
    setDone(true);
  };

  console.log(value);
  return (
    <div className="w-full h-screen flex items-center justify-center bg flex-col px-12">
      <div className={`${done ? "hidden" : "block"}`}>
        <div className="relative">
          <div className="flex items-center justify-center">
            <img
              src="https://media.tenor.com/y1et82rwFeAAAAAi/bear-love-you.gif "
              className=" w-80			h-80	max-xl:w-72	 max-xl:h-72	max-sm:w-60	max-sm:h-60	 max-[430px]:w-52	  max-[430px]:h-52	"
            />
          </div>
          <div className="mt-10">
            <h1 className="text-6xl font-bold	 font-serif		max-xl:text-3xl	text-center  max-[430px]:text-xl	">
              Will you be my Valentine? 💐
            </h1>
          </div>
        </div>

        <div className="flex items-center justify-center mt-10 ">
          <div>
            <button
              className="text-4xl bg-lime-500	 py-4 px-4 text-white w-56	font-semibold cursor-pointer	 	max-xl:text-3xl	max-sm-[2px] max-[430px]:text-xl	"
              onClick={handleDone}
            >
              Yes
            </button>
          </div>

          <div className={` absolute ${value}`}>
            <button
              onMouseEnter={handleHover}
              className={` text-4xl bg-red-700	cursor-pointer			 py-4 px-4 text-white w-56	font-semibold  max-xl:text-3xl max-[430px]:text-xl `}
            >
              No
            </button>
          </div>
        </div>
      </div>

      <div
        className={`flex items-center justify-center flex-col ${
          done ? "block" : "hidden"
        }`}
      >
        <div>
          <img
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif "
            className=" w-96		h-96 max-xl:w-72	 max-xl:h-72	max-sm:w-60	max-sm:h-60	 max-[430px]:w-52	  max-[430px]:h-52"
          />
        </div>
        <div className="mt-20">
          <h1 className="ml-20 text-5xl font-bold	 font-serif max-xl:text-3xl	text-center  max-[430px]:text-xl">
            Ok See You !! 💘{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ValentinesPage;
