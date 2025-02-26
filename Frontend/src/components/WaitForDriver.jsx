import PropTypes from 'prop-types';

function WaitForDriver(props) {
    return (
        <div>
        <h5 onClick={()=> props.setwaitingfordriver(true)} className="p-1 text-center w-[93%] absolute top-0"><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>

       <div className="flex items-center justify-between">
            <img className='h-15' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTWeN3hcqn-G2idpfomts-GZ5JWzcIhFKpyCmnMU9cz8wOiAwNCNRFsl5C-nkHGEYCPos&usqp=CAU" alt="" />
            <div className="text-right">
                <h2 className="text-lg font-medium">Parth</h2>
                <h4 className="text-xl font-semibold -mt-2 -mb-1">UP52-BJ1203</h4>
                <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
           </div>

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
        </div>
    </div>
    )

};

WaitForDriver.propTypes = {
    setwaitingfordriver: PropTypes.func.isRequired,
}



export default WaitForDriver
