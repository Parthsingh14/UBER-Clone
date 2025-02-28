import PropTypes from 'prop-types';

function ConfirmedRide(props) {
    return (
        <div>
            <h5 onClick={()=> props.setconfirmRidePanel(false) } className="p-1 text-center w-[93%] absolute top-0"><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Confirm your Ride</h3>

            <div className='flex flex-col gap-2 justify-between items-center'>
                <img className='h-20' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTWeN3hcqn-G2idpfomts-GZ5JWzcIhFKpyCmnMU9cz8wOiAwNCNRFsl5C-nkHGEYCPos&usqp=CAU" alt="" />

                <div className='w-full mt-5'>

                    <div className='flex items-center gap-5 p-3 border-b-1'>
                        <i className='ri-map-pin-2-fill text-lg'></i>
                        <div>
                            <h3 className='text-lg font-medium'>{props.pickup}</h3>
                            <p className='text-sm text-gray-600'>Kankariya Talab, Bhopal</p>
                        </div>
                    </div>


                    <div className='flex items-center gap-5 p-3 border-b-1'>
                        <i className='ri-map-pin-2-fill text-lg'></i>
                        <div>
                            <h3 className='text-lg font-medium'>{props.destination}</h3>
                            <p className='text-sm text-gray-600'>Kankariya Talab, Bhopal</p>
                        </div>
                    </div>



                    <div className='flex items-center gap-5 p-3'>
                        <i className='ri-currency-line text-lg'></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹{props.fare[props.vehicleType]}</h3>
                            <p className='text-sm text-gray-600'>Cash</p>
                        </div>
                    </div>
                </div>
                <button onClick={()=> { 
                    props.setvehicleFound(true)
                    props.setconfirmRidePanel(false)
                }} className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Confirm</button>
            </div>
        </div>
    )
}

ConfirmedRide.propTypes = {
    setconfirmRidePanel: PropTypes.func.isRequired,
    setvehicleFound: PropTypes.func.isRequired,
    pickup: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    fare: PropTypes.object.isRequired,
    vehicleType: PropTypes.string.isRequired,
};

export default ConfirmedRide

