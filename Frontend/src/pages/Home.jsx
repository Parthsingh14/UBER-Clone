import { useEffect, useRef, useState } from "react";
import axios from 'axios';
import {useGSAP} from '@gsap/react';
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
import LookingforaDriver from "../components/LookingforaDriver";
import WaitForDriver from "../components/WaitForDriver";

function Home() {

    const [pickup,setPickup] = useState('');
    const [destination,setDestination] = useState('');
    const [panelOpen,setpanelOpen] = useState(false);
    const panelRef = useRef(null);
    const panelCloseRef = useRef(null);
    const [vehiclePanel,setvehiclePanel] = useState(false)
    const vehiclepanelRef = useRef(null);
    const [confirmRidePanel, setconfirmRidePanel] = useState()
    const confirmRidePanelRef = useRef(null);
    const [vehicleFound, setvehicleFound] = useState(false);
    const vehicleFoundRef = useRef(null);
    const [waitingfordriver, setwaitingfordriver] = useState(false);
    const waitingfordriverRef = useRef(null);
    const [ pickupSuggestions, setPickupSuggestions ] = useState([]);
    const [ destinationSuggestions, setDestinationSuggestions ] = useState([])
    const [ activeField, setActiveField ] = useState(null)

    const submitHandler = (e)=>{
        e.preventDefault();
    }

    useGSAP(function(){
        if(panelOpen){
            gsap.to(panelRef.current,{
                height: '70%',
                padding: '25px',

            })
            gsap.to(panelCloseRef.current,{
                opacity: 1
            })
        } else {
            gsap.to(panelRef.current,{
                height: '0%',
                padding: '0',
            })
            gsap.to(panelCloseRef.current,{
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

    useGSAP(function(){
        if(vehicleFound){
            gsap.to(vehicleFoundRef.current,{
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(vehicleFoundRef.current,{
                transform: 'translateY(100%)'
            })
        }
    },[vehicleFound])

    useGSAP(function(){
        if(waitingfordriver){
            gsap.to(waitingfordriverRef.current,{
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(waitingfordriverRef.current,{
                transform: 'translateY(100%)'
            })
        }
    },[waitingfordriver])


    const handlePickupChange = async (e) => {
        setPickup(e.target.value)
        
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
                params: { input: e.target.value },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            
            setPickupSuggestions(response.data)
        } catch (error) {
            console.error("API Error:", error.response?.data || error.message);
            console.error("Error Details:", error.response); 
        }
        
    }


    const handleDestinationChange = async (e) => {
        setDestination(e.target.value)
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
                params: { input: e.target.value },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            console.log(response.data)
            setDestinationSuggestions(response.data)
        } catch(error) {
            console.error("API Error:", error.response?.data || error.message);
            console.error("Error Details:", error.response); 
        }
    }


    async function findTrip() {
        setvehiclePanel(true)
        setpanelOpen(false)

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/ride/create`, {
            params: { pickup, destination , vehicleType: 'bike' },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        console.log(response.data)


    }



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
                    <h5 ref={panelCloseRef} onClick={()=>{setpanelOpen(false)}} className="absolute right-6 top-6 text-2xl opacity-0">
                        <i className="ri-arrow-down-wide-line"></i>
                    </h5>
                    <h4 className="text-2xl font-semibold">Find a trip</h4>
                    <form onSubmit={(e)=>{submitHandler(e)}}>
                        <div className="absolute h-16 w-1 bg-gray-900 rounded-full top-[45%] left-10"></div>
                        <input value={pickup} onClick={()=> {
                            setpanelOpen(true)
                            setActiveField('pickup')
                            }} onChange={(e)=> {handlePickupChange(e)}} className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5" type="text" placeholder="Add a pick-up location" />
                        <input value={destination} onClick={()=>{
                            setpanelOpen(true)
                            setActiveField('destination')
                            }} onChange={(e)=>{handleDestinationChange(e)}} className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3" type="text" placeholder="Enter your destination"/>
                    </form>
                    <button
                        onClick={findTrip}
                        className='bg-black text-white px-4 py-2 rounded-lg mt-3 w-full'>
                        Find Trip
                    </button>
               </div>
               <div ref={panelRef} className="h-[70%] bg-white">
                <LocationSearchPanel suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions} setpanelOpen={setpanelOpen} setvehiclePanel={setvehiclePanel} setPickup={setPickup} setDestination={setDestination} activeField={activeField}/>
               </div>
            </div>

             {/* Choose Your Vehicle Div */}
            <div ref={vehiclepanelRef} className="fixed z-10 bg-white px-3 py-6 pt-12 bottom-0 w-full translate-y-full">
                <VehiclePanel setconfirmRidePanel={setconfirmRidePanel} setvehiclePanel={setvehiclePanel} setpanelOpen={setpanelOpen} />
            </div>

            <div ref={confirmRidePanelRef} className="fixed z-10 bg-white px-3 py-6 pt-12 bottom-0 w-full translate-y-full">
                <ConfirmedRide setvehicleFound={setvehicleFound} setconfirmRidePanel={setconfirmRidePanel} />
            </div>

            <div ref={vehicleFoundRef} className="fixed z-10 bg-white px-3 py-6 pt-12 bottom-0 w-full translate-y-full">
                <LookingforaDriver setvehicleFound={setvehicleFound} setconfirmRidePanel={setconfirmRidePanel} setvehiclePanel={setvehiclePanel} />

            </div>
            
            <div ref={waitingfordriverRef} className="fixed z-10 bg-white px-3 py-6 pt-12 bottom-0 w-full">
                <WaitForDriver setwaitingfordriver={setwaitingfordriver}  />
            </div>

            
            

        </div>
    )
}

export default Home
