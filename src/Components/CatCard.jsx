import React from "react";

const CatCard = () => {
  return (
    <div className="h-[80vh] w-[30vw] text-black bg-blue-400 rounded-xl shadow-lg shadow-black flex-shrink-0 overflow-hidden">
      <div className="catImage bg-green-400 h-[53%] w-full">
        <img src="" alt="" />
      </div>

      <div className="catDetails px-3 py-2">
        <h1 className="catName text-[2vw] font-semibold">Lorem</h1>

        <div className="catDescr text-[1vw]">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem saepe
            possimus eaque beatae necessitatibus omnis quos tempora molestiae
          </p>
        </div>

        <div className="catOrigin flex text-[1vw] mt-2 gap-5 items-center">
          <i className="font-semibold text-[1vw]">Origin</i>
          <p>Thailand</p>
        </div>

        <i className="font-semibold text-[1vw]">Temperament</i>
        <div className="temperament ">
          <span className="px-[0.6vw] ml-[0vw] py-[0.2vw] font-semibold bg-gray-300 rounded-full text-[0.9vw]">
            Independent
          </span>
          <span className="px-[0.6vw] ml-[0.5vw] py-[0.2vw] font-semibold bg-gray-300 rounded-full text-[0.9vw]">
            Highly Intelligent
          </span>
          <span className="px-[0.6vw] ml-[0.5vw] py-[0.2vw] font-semibold bg-gray-300 rounded-full text-[0.9vw]">
            Clever
          </span>
        </div>

        <div className="catLife text-[1vw] mt-2 flex gap-5">
          <i className="life font-semibold">Life Span</i>
          <span className="font-semibold">15-20 years</span>
        </div>

        <div className="more text-[1vw] mt-1">
            <a>Learn More</a>
        </div>

      </div>
    </div>
  );
};

export default CatCard;
