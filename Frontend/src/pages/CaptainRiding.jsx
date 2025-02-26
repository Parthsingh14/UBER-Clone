import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {useGSAP} from '@gsap/react';
import gsap from "gsap";
import FinishRide from "../components/FinishRide";

function CaptainRiding() {

    const [finishRidePanel,setfinishRidePanel] = useState(false);
    const finishRidePanelRef = useRef(null);

    useGSAP(function(){
        if(finishRidePanel){
            gsap.to(finishRidePanelRef.current,{
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(finishRidePanelRef.current,{
                transform: 'translateY(100%)'
            })
        }
    },[finishRidePanel])



  return (
    <div className="h-screen">
      

      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png "
          alt=""
        />
        <Link
          to="/home"
          className=" h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="ri-logout-box-r-line text-lg font-medium"></i>
        </Link>
      </div>

      <div className="h-4/5 ">
        <img
          className="h-full w-full object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-o_2s3RDzPvv5OSRUe8lqiRp_FqtBExlQvA&s"
          alt=""
        />
      </div>

      <div onClick={()=> setfinishRidePanel(true)} className="h-1/5 p-6 bg-yellow-400 flex items-center justify-between relative">
        <h5 onClick={() => {}} className="p-1 text-center w-[93%] absolute top-0"><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
        <h4 className="font-semibold text-xl">4 KM Away</h4>
        <button className="bg-green-600 text-white font-semibold p-3 px-10 rounded-lg">
          Complete Ride
        </button>
      </div>

      <div ref={finishRidePanelRef} className="fixed w-full z-10 translate-y-full bottom-0 bg-white px-3 py-10 pt-12">
        <FinishRide setfinishRidePanel={setfinishRidePanel}  />
            </div>
    </div>
  );
}

export default CaptainRiding;
