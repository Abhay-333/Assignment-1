import React, { useState } from "react";
import image2 from "../Resources/image 2.png";
import CatCard from "./CatCard";
import { useEffect } from "react";

const CatList = () => {
  const [cats, setCats] = useState(null);

  const fetchCatData = async () => {
    try {
      const response = await fetch(
        `https://api.freeapi.app/api/v1/public/cats?page=1&limit=4`
      );
      const catInfo = await response.json();
      setCats(catInfo.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCatData();
  }, []);

  const handleLogoClick = ()=>{
    window.location.href = `https://chaicode.com`
  }

  return (
    <div className="h-[92vh] relative min-w-full">
        <img onClick={handleLogoClick}
          className="absolute top-[-8%] right-[6%]"
          src={`${image2}`}
          alt=""
        />
      <div className="parent h-full w-full flex items-center justify-start gap-5 overflow-x-auto">
        {cats && cats.map((cat) => <CatCard key={cat.id} cat={cat} />)}
      </div>
    </div>
  );
};

export default CatList;
