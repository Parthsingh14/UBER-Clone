import PropTypes from 'prop-types';

function LookingforaDriver(props) {
    return (
        <div>
            <h5 onClick={()=> props.setvehicleFound(false) } className="p-1 text-center w-[93%] absolute top-0"><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Looking for a Driver . . .</h3>

            <div className='flex flex-col gap-2 justify-between items-center'>
                <img className='h-20' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTWeN3hcqn-G2idpfomts-GZ5JWzcIhFKpyCmnMU9cz8wOiAwNCNRFsl5C-nkHGEYCPos&usqp=CAU" alt="" />

                <div className='w-full mt-5'>

                    <div className='flex items-center gap-5 p-3 border-b-1'>
                        <i className='ri-map-pin-2-fill text-lg'></i>
                        <div>
                            <h3 className='text-lg font-medium'>Pick-Up Location</h3>
                            <p className='text-sm text-gray-600'>{props.pickup}</p>
                        </div>
                    </div>


                    <div className='flex items-center gap-5 p-3 border-b-1'>
                        <i className='ri-map-pin-2-fill text-lg'></i>
                        <div>
                            <h3 className='text-lg font-medium'>Drop-off Location</h3>
                            <p className='text-sm text-gray-600'>{props.destination}</p>
                        </div>
                    </div>



                    <div className='flex items-center gap-5 p-3'>
                        <i className='ri-currency-line text-lg'></i>
                        <div>
                            <h3 className='text-lg font-medium'>Ride-Fare</h3>
                            <p className='text-sm text-gray-600'>₹{props.fare[props.vehicleType]}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

};
LookingforaDriver.propTypes = {
    setvehicleFound: PropTypes.func.isRequired,
    pickup: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    fare: PropTypes.object.isRequired,
    vehicleType: PropTypes.string.isRequired,
}

export default LookingforaDriver
