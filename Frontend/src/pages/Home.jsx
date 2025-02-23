import { useRef, useState } from "react";
import {useGSAP} from '@gsap/react';
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";

function Home() {

    const [pickup,setpickup] = useState('');
    const [destination,setdestination] = useState('');
    const [panelOpen,setpanelOpen] = useState(false);
    const panelRef = useRef(null);
    const panelOpenRef = useRef(null);
    const [vehiclePanel,setvehiclePanel] = useState(false)
    const vehiclepanelRef = useRef(null);

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




    return (
        <div  className="h-screen relative overflow-hidden">
            <img className="w-16 absolute left-5 top-5" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

            <div className="h-screen w-screen">
                {/* Image for temporary use */}
                <img className="h-full w-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-o_2s3RDzPvv5OSRUe8lqiRp_FqtBExlQvA&s" alt="" />
            </div>


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
                <LocationSearchPanel setpanelOpen={setpanelOpen} vehiclePanel={vehiclePanel} setvehiclePanel={setvehiclePanel} />
               </div>
            </div>


            <div ref={vehiclepanelRef} className="fixed z-10 bg-white px-3 py-10 bottom-0 w-full translate-y-full">
                <h5 onClick={()=>{
                    setpanelOpen(false);
                    setvehiclePanel(false);
                }} className="p-3 text-center w-full absolute top-0"><i className="ri-arrow-down-wide-line text-3xl text-gray-200 pt-14"></i></h5>
                <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>

                <div className="flex p-3 items-center justify-between w-full active:border-black border-2 border-gray-200 rounded-xl mb-2">
                    <img className="h-12" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTWeN3hcqn-G2idpfomts-GZ5JWzcIhFKpyCmnMU9cz8wOiAwNCNRFsl5C-nkHGEYCPos&usqp=CAU" alt="" />
                    <div className="ml-2 w-1/2">
                        <h4 className="font-medium text-base">UberGo <span><i className="ri-user-3-line"></i></span>4</h4>
                        <h5 className="font-medium text-sm">2 mins away</h5>
                        <p className="font-normal text-xs text-gray-600">Affordable, compact rides</p>
                    </div>
                    <h2 className="text-lg font-semibold">$193.20</h2>
                </div>

                <div className="flex p-3 items-center justify-between w-full  active:border-black border-2 border-gray-200 rounded-xl mb-2">
                    <img className="h-12" src="data:image/jpeg;base64,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" alt="" />
                    <div className="ml-2 w-1/2">
                        <h4 className="font-medium text-base">Bike <span><i className="ri-user-3-line"></i></span>1</h4>
                        <h5 className="font-medium text-sm">3 mins away</h5>
                        <p className="font-normal text-xs text-gray-600">Affordable, Motorcycle rides</p>
                    </div>
                    <h2 className="text-lg font-semibold">$96.20</h2>
                </div>

                <div className="flex p-3 items-center justify-between w-full active:border-black border-2 border-gray-200  rounded-xl mb-2">
                    <img className="h-12" src="data:image/jpeg;base64,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" alt="" />
                    <div className="ml-2 w-1/2">
                        <h4 className="font-medium text-base">UberAuto <span><i className="ri-user-3-line"></i></span>3</h4>
                        <h5 className="font-medium text-sm">2 mins away</h5>
                        <p className="font-normal text-xs text-gray-600">Affordable, compact rides</p>
                    </div>
                    <h2 className="text-lg font-semibold">$110.20</h2>
                </div>
            </div>

        </div>
    )
}

export default Home
