import React, { useEffect, useState } from "react";
import Group from "../Resources/Group.png";
import refresh from "../Resources/refresh.png";
import Group1 from "../Resources/Group 1.png";
import Group2 from "../Resources/Group 2.png";
import image2 from "../Resources/image 2.png";

const RandomUser = () => {
  const [name, setName] = useState(null);
  const [userName, setUserName] = useState(null);
  const [city, setCity] = useState(null);
  const [nation, setNation] = useState(null);
  const [dob, setDOB] = useState(null);
  const [timeZ, setTimeZ] = useState(null);
  const [phone, setPhone] = useState(null);
  const [registered, setRegistered] = useState(null);
  const [image, setImage] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [refreshBtn, setRefreshBtn] = useState(false)

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.freeapi.app/api/v1/public/randomusers/user/random`
      );
      const info = await response.json();

      setName(`${info.data.name.first} ${info.data.name.last}`);
      setUserName(`${info.data.login.username}`);
      setCity(`${info.data.location.city}`);
      setNation(`${info.data.location.country}`);
      setPhone(`${info.data.phone}`);

      const dobDate = new Date(info.data.dob.date);
      setDOB(`${dobDate.toDateString()}`);

      setTimeZ(
        `${info.data.location.timezone.offset} ${info.data.location.timezone.description}`
      );

      const registeredDate = new Date(info.data.registered.date);
      setRegistered(`${registeredDate.toDateString()}`);

      setImage(`${info.data.picture.medium}`);

      setLatitude(`${info.data.location.coordinates.latitude}`);
      setLongitude(`${info.data.location.coordinates.longitude}`);
    } catch (error) {
      console.error(error);
    }
  };

  const openGoogleMap = () => {
    const mapURL = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(mapURL, "_blank");
  };

  const handleLogo = () => {
    window.location.href = "https://www.chaicode.com"; 
  };

  const handleRefresh = ()=>{
    setRefreshBtn(prev=>!prev)
  }

  useEffect(() => {
    fetchData();
  }, [refreshBtn]);

  return (
    <div className="h-[92vh] w-full flex items-center text-black justify-center">
      <div className="box bg-[#B6B3F3] h-[85vh] w-[26vw] rounded-[15px] border-[7px] border-[white] p-3 flex flex-col">
        <div className="randomUserNav h-[8vh] flex items-center justify-center gap-[5vw]">
          <img className="cursor-pointer w-[5%]" src={`${Group}`} alt="" />

          <h1 className="font-bold text-[16px] text-[rgba(0, 0, 0, 0.7)]">
            Profile Overview
          </h1>

          <img
            onClick={handleRefresh}
            className="cursor-pointer w-[6.5%] "
            src={`${refresh}`}
            alt=""
          />
        </div>

        <div className="userName&ProfilePic flex h-[23vh] items-center justify-center flex-col">
          <div className="profilePic h-[12vh] flex-shrink-0 w-[6vw] rounded-full shadow-md shadow-black">
            <img
              className="h-full w-full rounded-full object-cover object-center"
              src={`${image}`}
              alt=""
            />
          </div>

          <h1 className="text-2xl font-bold mt-2">{name}</h1>
          <div className="userName font-semibold mt-1">{userName}</div>
        </div>

        <hr className="border-gray-400 border-t-3 mt-3 mb-2" />

        <div className="locaCont  flex items-center gap-5 justify-center h-[6vh]">
          <div
            className="location flex gap-2 item-center justify-center w-fit cursor-pointer"
            onClick={openGoogleMap}
          >
            <img className="flex-grow-0 self-center" src={`${Group1}`} alt="" />
            <p className="self-center text-[1vw]">Location</p>
          </div>

          <div className="contact flex gap-2 item-center justify-center w-fit">
            <img className="self-center flex-grow-0" src={`${Group2}`} alt="" />
            <p className="text-[1vw] self-center">Call Me</p>
          </div>
        </div>

        <hr className="border-gray-400 border-t-3 mt-2" />

        <div className="userDetails">
          <div className="flexbox flex flex-wrap gap-3 text-[1vw] mt-3">
            <div className="city flex-shrink-0 w-[11vw]">
              <p>City</p>
              <p className="text-[1.2vw]">{city}</p>
            </div>

            <div className="Nationality  flex-shrink-0 w-[11vw]">
              <p>Nationality</p>
              <p className="text-[1.2vw]">{nation}</p>
            </div>

            <div className="DOB  flex-shrink-0 w-[11vw]">
              <p>Date of Birth</p>
              <p className="text-[1.2vw]">{dob}</p>
            </div>

            <div className="Phone  flex-shrink-0 w-[11vw]">
              <p>Phone No.</p>
              <p className="text-[1.2vw]">{phone}</p>
            </div>

            <div className="TimeZone  flex-shrink-0 w-[11vw]">
              <p>Time Zone</p>
              <p className="text-[1.2vw]">{timeZ}</p>
            </div>

            <div className="Registered  flex-shrink-0 w-[11vw]">
              <p>Registered Since</p>
              <p className="text-[1.2vw]">{registered}</p>
            </div>
          </div>
        </div>

        <img
          onClick={handleLogo}
          className="flex-grow-0 w-[20%] self-end cursor-pointer mt-3"
          src={`${image2}`}
          alt=""
        />
      </div>
    </div>
  );
};

export default RandomUser;
