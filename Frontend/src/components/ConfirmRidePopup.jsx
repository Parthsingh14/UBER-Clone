import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function ConfirmRidePopup(props) {

    const [OTP,setOTP] = useState('');


    const submitHandler = (e)=>{
        e.preventDefault();
    }


    return (
        <div>
        <h5 onClick={()=>{}} className="p-1 text-center w-[93%] absolute top-0"><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Confirm this ride to Start!!</h3>

        <div className="flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4">
            <div className="flex items-center gap-3">
                <img className="h-12 w-12 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1XcY3kldqRD2y9c44DDoi8XNmJqFx_aFD0Q&s"></img>
                <h2 className="text-lg font-medium">Nico Robin</h2>
            </div>
            <h5 className="text-lg font-semibold">2.2KM</h5>
        </div>
    

        <div className='flex flex-col gap-2 justify-between items-center'>

            <div className='w-full mt-5'>

                <div className='flex items-center gap-5 p-3 border-b-1'>
                    <i className='ri-map-pin-2-fill text-lg'></i>
                    <div>
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm text-gray-600'>Kankariya Talab, Bhopal</p>
                    </div>
                </div>


                <div className='flex items-center gap-5 p-3 border-b-1'>
                    <i className='ri-map-pin-2-fill text-lg'></i>
                    <div>
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm text-gray-600'>Kankariya Talab, Bhopal</p>
                    </div>
                </div>



                <div className='flex items-center gap-5 p-3'>
                    <i className='ri-currency-line text-lg'></i>
                    <div>
                        <h3 className='text-lg font-medium'>$125</h3>
                        <p className='text-sm text-gray-600'>Cash</p>
                    </div>
                </div>
            </div>
            <div className='mt-6 w-full'>
                <form value={OTP} onChange={(e)=> setOTP(e.target.value)} onSubmit={(e)=>submitHandler(e)}>
                    <input type=" text" placeholder='Enter OTP' className='bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-3' />
                <Link to='/captain-riding' className='mt-5 flex justify-center w-full bg-green-600 text-white font-semibold p-2 rounded-lg'>Confirm</Link>
                <button onClick={()=>{
                    props.setConfirmridePopupPanel(false)
                    props.setridePopupPanel(false)
                }} className='w-full mt-1 bg-red-600 text-white font-semibold p-2 rounded-lg'>Cancel</button>
                </form>
                
            </div>
        </div>
    </div>
    )
};
ConfirmRidePopup.propTypes = {
    setConfirmridePopupPanel: PropTypes.func.isRequired,
    setridePopupPanel: PropTypes.func.isRequired,
};


export default ConfirmRidePopup
