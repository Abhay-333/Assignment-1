import React, { useEffect } from "react";
import Elon from "../Resources/image 3.png";
import { useState } from "react";

const RandomJoke = () => {
  const [joke,setJoke] = useState(null)
  const [randomDate, setRandomDate] = useState("")
  const [randomTime, setRandomTime] = useState("")
  const [analitics, setAnalitics] = useState({})

  const fetchJoke = async ()=>{
      const response = await fetch(`https://api.freeapi.app/api/v1/public/randomjokes/joke/random`) 
      const joke = await response.json()
      setJoke(joke.data.content)
  }

  const dateStamp = (startDate, endDate)=>{
    const start = startDate.getTime()
    const end = endDate.getTime()
    const date = new Date(start + Math.random()* (end-start))
    return date.toDateString()
  }

  const timeStamp = ()=>{
    const time = new Date()
    const randomHours = Math.floor(Math.random()*24)
    const randomMinutes = Math.floor(Math.random()*60)

    time.setHours(randomHours)
    time.setMinutes(randomMinutes)

    const formattedTime = time.toLocaleTimeString(`en-GB`,{
      hour:`2-digit`,
      minute:`2-digit`
    })
    
    return formattedTime
  } 

  const getAnalitics = ()=>{
    const min = 1
    const max = 100000000
    const views = Math.floor(Math.random()*(max - min + 1) + min)
    const comments = Math.floor(Math.random()*(max-min+1) +min)
    const repost = Math.floor(Math.random()*(max-min+1) +min)
    const likes = Math.floor(Math.random()*(max-min+1) +min)
    const save = Math.floor(Math.random()*(max-min+1) +min)

    return {
      views: formatNumber(views) + `Views`,
      comments: formatNumber(comments),
      repost: formatNumber(repost),
      likes: formatNumber(likes),
      save: formatNumber(save),
    }

  }

  const formatNumber = (nums)=>{
    
    if(nums >= 100000000){
      return (Math.floor((nums / 1000000).toFixed(2))+'M')
    }
    else if(nums >= 1000){
      return (Math.floor((nums / 100000).toFixed(2))+'K')
    }else{
      return (nums.toString())
    }

  }


  const startDate = new Date("2024-01-01")
  const endDate = new Date()

  useEffect(()=>{
    fetchJoke()
    const date = dateStamp(startDate,endDate)
    setRandomDate(date)

    setRandomTime(timeStamp())

    setAnalitics(getAnalitics())
  },[])


  return (
    <div className="h-[92vh] w-full flex items-center justify-center text-white">
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

        <div className="joke h-[10vh] w-full  mt-4 mb-5 text-[1vw]">
          <p>
            {joke}
          </p>
        </div>

        <div className="views text-[#969696] text-[0.9vw] flex gap-2 mb-1">
          <p id="time">{randomTime}</p>
          <p id="date">{randomDate}</p>
          <p id="views">{analitics.views}</p>
        </div>

        <div className="analytics text-[#969696] text-[0.9vw] flex items-center justify-around border-[#46494D] border-y mt-0 mb-0 p-2">
          <div className="comment flex item-center justify-center gap-1">
            <i className="ri-chat-1-line text-[1.2vw]"></i>
            <p className="self-center">{analitics.comments}</p>
          </div>

          <div className="repost flex item-center  justify-center gap-1">
            <i className="ri-repeat-2-line text-[1.2vw]"></i>
            <p className="self-center">{analitics.repost}</p>
          </div>

          <div className="like flex item-center  justify-center gap-1">
            <i className="ri-heart-3-line text-[1.2vw]"></i>
            <p className="self-center">{analitics.likes}</p>
          </div>

          <div className="save flex item-center  justify-center gap-1">
            <i className="ri-bookmark-line text-[1.2vw]"></i>
            <p className="self-center">{analitics.save}</p>
          </div>

          <div className="upload flex item-center  justify-center gap-1">
            <i className="ri-upload-2-fill text-[1.2vw]"></i>
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
