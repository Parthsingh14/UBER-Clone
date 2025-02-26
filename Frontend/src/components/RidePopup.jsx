import PropTypes from 'prop-types';

function RidePopup(props) {
    return (
        <div>
            <h5 onClick={()=>{props.setridePopupPanel(false)}} className="p-1 text-center w-[93%] absolute top-0"><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>New Ride Available!</h3>

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
                <div className='flex justify-between items-center w-full mt-5'>
                    <button onClick={()=>{props.setridePopupPanel(false)}} className='mt-1 bg-gray-300 text-gray-700 font-semibold p-3 px-10 rounded-lg'>Ignore</button>
                    <button onClick={()=> {props.setConfirmridePopupPanel(true)}} className='bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Accept</button>
                </div>
            </div>
        </div>
    )

};

RidePopup.propTypes = {
    setridePopupPanel: PropTypes.func.isRequired,
    setConfirmridePopupPanel: PropTypes.func.isRequired,
};
export default RidePopup
