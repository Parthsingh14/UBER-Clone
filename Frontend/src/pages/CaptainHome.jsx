import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopup from "../components/RidePopup";
import ConfirmRidePopup from "../components/ConfirmRidePopup";
import { useRef, useState } from "react";
import {useGSAP} from '@gsap/react';
import gsap from "gsap";
function CaptainHome() {


  const [ridePopupPanel,setridePopupPanel] = useState(true);
  const ridePopupPanelRef = useRef(null);

  const [ConfirmridePopupPanel,setConfirmridePopupPanel] = useState(false);
  const ConfirmridePopupPanelRef = useRef(null);




  useGSAP(function(){
    if(ridePopupPanel){
        gsap.to(ridePopupPanelRef.current,{
            transform: 'translateY(0)'
        })
    } else {
        gsap.to(ridePopupPanelRef.current,{
            transform: 'translateY(100%)'
        })
    }
},[ridePopupPanel])

useGSAP(function(){
  if(ConfirmridePopupPanel){
      gsap.to(ConfirmridePopupPanelRef.current,{
          transform: 'translateY(0)'
      })
  } else {
      gsap.to(ConfirmridePopupPanelRef.current,{
          transform: 'translateY(100%)'
      })
  }
},[ConfirmridePopupPanel])




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



      <div className="h-3/5 ">
        <img
          className="h-full w-full object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-o_2s3RDzPvv5OSRUe8lqiRp_FqtBExlQvA&s"
          alt=""
        />
      </div>


      <div className="h-2/5 p-6">
        <CaptainDetails/>
      </div>

      <div ref={ridePopupPanelRef} className="fixed w-full z-10 bottom-0 bg-white px-3 py-10 pt-12">
        <RidePopup setridePopupPanel={setridePopupPanel} setConfirmridePopupPanel={setConfirmridePopupPanel}/>
      </div>


      <div ref={ConfirmridePopupPanelRef} className="fixed h-screen w-full z-10 bottom-0 bg-white px-3 py-10 pt-12">
        <ConfirmRidePopup setConfirmridePopupPanel={setConfirmridePopupPanel} setridePopupPanel={setridePopupPanel}/>
      </div>

    </div>
  );
}

export default CaptainHome;
