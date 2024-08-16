import React from "react";
import image2 from "../Resources/image 2.png";
import CatCard from "./CatCard";

const CatList = () => {
  return (
    <div className="h-[92vh] w-full">
      

      <div className="parent h-full w-full flex items-center justify-center gap-5">
      <CatCard />
      <CatCard />
      <CatCard />

      </div>

      {/* <div className="catNav flex items-center justify-center gap-[56vw]">
        <h1 className="text-[2vw] font-semibold">Cats around Us</h1>
        <img src={`${image2}`} alt="" />
      </div> */}


    </div>
  );
};

export default CatList;
