import { useRef, useState } from "react";
import {useGSAP} from '@gsap/react';
import gsap from "gsap";

function Home() {

    const [pickup,setpickup] = useState('');
    const [destination,setdestination] = useState('');
    const [panelOpen,setpanelOpen] = useState(false);
    const panelRef = useRef(null);

    const submitHandler = (e)=>{
        e.preventDefault();
    }

    useGSAP(function(){
        if(panelOpen){
            gsap.to(panelRef.current,{
                height: '70%'
            })
        } else {
            gsap.to(panelRef.current,{
                height: '0%'
            })
        }
    },[panelOpen])



    return (
        <div className="h-screen relative">
            <img className="w-16 absolute left-5 top-5" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

            <div className="h-screen w-screen">
                {/* Image for temporary use */}
                <img className="h-full w-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-o_2s3RDzPvv5OSRUe8lqiRp_FqtBExlQvA&s" alt="" />
            </div>
            <div className=" h-screen absolute flex flex-col justify-end top-0 w-full " >
               <div className="h-[30%] bg-white p-5 relative">
                    <h4 className="text-2xl font-semibold">Find a trip</h4>
                    <form onSubmit={(e)=>{submitHandler(e)}}>
                        <div className="absolute h-16 w-1 bg-gray-900 rounded-full top-[45%] left-10"></div>
                        <input value={pickup} onClick={()=>setpanelOpen(true)} onChange={(e)=>setpickup(e.target.value)} className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5" type="text" placeholder="Add a pick-up location" />
                        <input value={destination} onClick={()=>setpanelOpen(true)} onChange={(e)=>{setdestination(e.target.value)}} className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3" type="text" placeholder="Enter your destination"/>
                    </form>
               </div>
               <div ref={panelRef} className="h-[0] bg-red-300">

               </div>
            </div>
        </div>
    )
}

export default Home
