import React from "react";
import Elon from "../Resources/image 3.png";

const RandomJoke = () => {
  return (
    <div className="h-[91vh] w-full flex items-center justify-center text-white">
      <div className="tweetCard bg-[#000000] w-[45vw] h-[45vh] rounded-xl px-8 py-3 relative">
        <div className="post flex gap-3">
          <i className="ri-arrow-left-line text-1xl"></i>
          <h1>Post</h1>
        </div>

        <div className="profile flex gap-4 w-full mt-3">
          <img className="w-[9%]" src={`${Elon}`} alt="" />

          <div className="name">
            <div className="flex gap-2">
              <h1>Elon Musk</h1>
              <i className="ri-verified-badge-fill text-[#1C9BEF]"></i>
            </div>

            <div className="userName text-[#969696]">@elonMusk</div>
          </div>

          {/* <div className="threeDots flex justify-self-end">...</div> */}
        </div>

        <div className="joke mt-4 mb-5 text-[1vw]">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            nesciunt consequatur in accusantium alias! Voluptatum aperiam. Lorem
            ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Ipsum, vero.
          </p>
        </div>

        <div className="views text-[#969696] text-[0.9vw] flex gap-2 mb-1">
          <p id="time">11:30 PM Jul 30, 2024</p>
          <p id="views">20.5M Views</p>
        </div>

        <div className="analytics text-[#969696] text-[0.9vw] flex items-center justify-around border-[#46494D] border-y mt-0 mb-0 p-2">
          <div className="comment flex item-center justify-center gap-1">
            <i className="ri-chat-1-line text-[1.2vw]"></i>
            <p className="self-center">4.9k</p>
          </div>

          <div className="repost flex item-center  justify-center gap-1">
            <i className="ri-repeat-2-line text-[1.2vw]"></i>
            <p className="self-center">4.9k</p>
          </div>

          <div className="like flex item-center  justify-center gap-1">
            <i className="ri-heart-3-line text-[1.2vw]"></i>
            <p className="self-center">4.9k</p>
          </div>

          <div className="save flex item-center  justify-center gap-1">
            <i className="ri-bookmark-line text-[1.2vw]"></i>
            <p className="self-center">4.9k</p>
          </div>

          <div className="upload flex item-center  justify-center gap-1">
            <i className="ri-upload-2-fill text-[1.2vw]"></i>
            <p className="self-center">4.9k</p>
          </div>
        </div>

        <p className="text-[#969696] text-[0.9vw] absolute bottom-3 left-[50%] -translate-x-[50%]">
          @chai aur code
        </p>

      </div>
    </div>
  );
};

export default RandomJoke;
