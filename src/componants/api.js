import React from "react";
import moment from "moment/moment";
import "./about/about.css"
import { useState, useEffect } from "react";
import axios from "axios";
import "moment/dist/locale/ar-dz";
import { Link } from "react-router-dom"; 
import { MdOutlineArrowCircleLeft } from "react-icons/md"; 
moment.locale('ar');
const Api = () => {
  const getTiming = async () => {
    const date = await axios.get( 
      `https://api.aladhan.com/v1/timingsByCity/:date?city=${city.apiName}&country=EG`
    );
    const time = setTimings(date.data.data.timings);
    console.log(date.data.data.timings);
  };
  const [timings, setTimings] = useState({
    Fajr: "04:46",
    Dhuhr: "11:38",
    Asr: "14:39",
    Maghrib: "16:59",
    Isha: "18:19",
  });
  const [onday,setOnDay]=useState("")
  const [city, setCity]= useState({
    displayName:"الزقازيق",
    apiName:"Zaqazig"
  })
  const cityList=[
    {
      displayName:"الزقازيق",
      apiName:"Zaqazig"
    },
    {
      displayName:"القاهرة",
      apiName:"Cairo"
    },{
      displayName:"الاسكندرية",
      apiName:"Alexandria"
    },{
      displayName:"الاسماعلية",
      apiName:"Ismailia"
    },{
      displayName:"الجيزة",
      apiName:"Giza"
    }
    ,{
      displayName:"السويس",
      apiName:"Suez"
    }
    ,{
      displayName:"طنطا",
      apiName:"Tanta"
    }
    ,{
      displayName:"زفتا",
      apiName:"Zefta"
    }
    ,{
      displayName:"المحله الكبري",
      apiName:"El Mahalla El Kubra"
    }
    ,{
      displayName:"بور سعيد",
      apiName:"Port Said"
    }
    ,{
      displayName:"كفر الشيخ",
      apiName:"Kafr El Sheikh"
    }
    ,{
      displayName:"اسوان الجديده",
      apiName:"New Aswan"
    }
    ,{
      displayName:"القاهرة الجديده",
      apiName:"New Cairo"
    }
    ,{
      displayName:"بني سويف",
      apiName:"Beni Suef"
    }
  ]
  useEffect(() => {
    const day =moment();
    setOnDay(day.format("MMM : Do Y | h:m a"))
      getTiming();
  }, [city]);
  const handleCityChange=(event)=>{
    console.log(event.target.value)
    const citySelected = cityList.find((city)=>{
     return city.apiName == event.target.value;
    }
    
    )
    setCity(citySelected)
  }
  return (
    <div className=" pra-ti text-end  flex relative bottom-80 w-96">
        <div className=" relative bottom-24 left-8 bg-slate-300 block h-24 w-14 rounded-2xl"><Link className=" relative right-2 text-black " to={"../about"}><MdOutlineArrowCircleLeft className=" relative top-10 left-7"></MdOutlineArrowCircleLeft>Back</Link></div>
      <div className="head relative left-80">
        <big id="text-add" className=" relative bottom-28 left-44 ">
          مواقيت الصلواة
        </big>
        <br />
        <br />
        <h1 className="relative bottom-28 left-52">{onday}</h1>
        <br />
        <h1 className=" relative bottom-28 left-40 ">مصر::{city.displayName}</h1>
      </div>
      <div className="prayers text-end flex gap-6 justify-end absolute -right-full top-7">
        <div className="isha">
          <label>العشاء</label>
          {/* <br/><br/> */}
          <h1 id="isha-timing" className=" relative top-0 right-0">
            {timings.Isha}
          </h1>
        </div>
        <div className="dhuhr">
          <label>المغرب</label>
          {/* <br/><br/> */}
          <h1 id="magrp-timing" className=" relative top-0 right-0">
            {timings.Maghrib}
          </h1>
        </div>
        <div className="asr">
          <label>العصر</label>
          {/* <br/><br/> */}
          <h1 id="asr-timing" className=" relative top-0 right-0">
            {timings.Asr}
          </h1>
        </div>
        <div className="magrb">
          <label>الظهر</label>
          {/* <br/><br/> */}
          <h1 id="dhuhr-timing" className=" relative top-0 right-0">
            {timings.Dhuhr}
          </h1>
        </div>
        <div className="fajr">
          <label id="fajr-name">الفجر</label>
          {/* <br/><br/> */}
          <h1 id="fajr-timing">{timings.Fajr}</h1>
        </div>
      </div>
      <div className="city"><select className=" select-pra relative top-28 left-96 text-black" onChange={handleCityChange}>
        {cityList.map((city)=>{
          return(
          <option value={city.apiName} key={city.apiName}>{city.displayName}</option>
        )

        })}
        </select></div>
    </div>
  );
};

export default Api;
