import { useRef, useState } from "react";
import {useGSAP} from '@gsap/react';
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";

function Home() {

    const [pickup,setpickup] = useState('');
    const [destination,setdestination] = useState('');
    const [panelOpen,setpanelOpen] = useState(false);
    const panelRef = useRef(null);
    const panelOpenRef = useRef(null);
    const [vehiclePanel,setvehiclePanel] = useState(false)
    const vehiclepanelRef = useRef(null);
    const [confirmRidePanel, setconfirmRidePanel] = useState()
    const confirmRidePanelRef = useRef(null);

    const submitHandler = (e)=>{
        e.preventDefault();
    }

    useGSAP(function(){
        if(panelOpen){
            gsap.to(panelRef.current,{
                height: '70%',
                padding: '25px',

            })
            gsap.to(panelOpenRef.current,{
                opacity: 1
            })
        } else {
            gsap.to(panelRef.current,{
                height: '0%',
                padding: '0',
            })
            gsap.to(panelOpenRef.current,{
                opacity: 0
            })
        }
    },[panelOpen])


    useGSAP(function(){
        if(vehiclePanel){
            gsap.to(vehiclepanelRef.current,{
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(vehiclepanelRef.current,{
                transform: 'translateY(100%)'
            })
        }
    },[vehiclePanel])


    useGSAP(function(){
        if(confirmRidePanel){
            gsap.to(confirmRidePanelRef.current,{
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(confirmRidePanelRef.current,{
                transform: 'translateY(100%)'
            })
        }
    },[confirmRidePanel])




    return (
        <div  className="h-screen relative overflow-hidden">
            <img className="w-16 absolute left-5 top-5" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

            {/*Map Image Panel*/}
            <div className="h-screen w-screen">
                {/* Image for temporary use */}
                <img className="h-full w-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-o_2s3RDzPvv5OSRUe8lqiRp_FqtBExlQvA&s" alt="" />
            </div>

            {/* pickup and destination panel */}
            <div className=" h-screen absolute flex flex-col justify-end top-0 w-full " >
               <div className="h-[30%] bg-white  p-5 relative">
                    <h5 ref={panelOpenRef} onClick={()=>{setpanelOpen(false)}} className="absolute right-6 top-6 text-2xl opacity-0">
                        <i className="ri-arrow-down-wide-line"></i>
                    </h5>
                    <h4 className="text-2xl font-semibold">Find a trip</h4>
                    <form onSubmit={(e)=>{submitHandler(e)}}>
                        <div className="absolute h-16 w-1 bg-gray-900 rounded-full top-[45%] left-10"></div>
                        <input value={pickup} onClick={()=>setpanelOpen(true)} onChange={(e)=>setpickup(e.target.value)} className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5" type="text" placeholder="Add a pick-up location" />
                        <input value={destination} onClick={()=>setpanelOpen(true)} onChange={(e)=>{setdestination(e.target.value)}} className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3" type="text" placeholder="Enter your destination"/>
                    </form>
               </div>
               <div ref={panelRef} className="h-[0] bg-white">
                <LocationSearchPanel setpanelOpen={setpanelOpen} setvehiclePanel={setvehiclePanel} />
               </div>
            </div>

             {/* Choose Your Vehicle Div */}
            <div ref={vehiclepanelRef} className="fixed z-10 bg-white px-3 py-10 bottom-0 w-full translate-y-full">
                <VehiclePanel setconfirmRidePanel={setconfirmRidePanel} setvehiclePanel={setvehiclePanel} setpanelOpen={setpanelOpen} />
            </div>

            <div ref={confirmRidePanelRef} className="fixed z-10 bg-white px-3 py-10 bottom-0 w-full translate-y-full">
                <ConfirmedRide setconfirmRidePanel={setconfirmRidePanel} />
            </div>

        </div>
    )
}

export default Home
