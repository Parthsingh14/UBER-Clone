import PropTypes from 'prop-types';

function LocationSearchPanel(props) {
    // sample array for location
    const locations = [
        "Sindhi Mill Colony, Deoria, Uttar Pradesh",
        "Abubkar Nagar, Near Railway Station,Uttar Pradesh",
        "Bindki Road, Fatehfue, Kanpur,Uttar Pradesh"
    ]
    return (
        <div>
            {
                locations.map((item,index)=>{
                    return <div onClick={()=>{
                        props.setvehiclePanel(true)
                        props.setpanelOpen(false)
                        }} key={index} className="flex border-2 border-gray-100 p-3 active:border-black rounded-xl items-center justify-start gap-4 my-2">
                    <h2 className="bg-[#eee] h-8 w-10 flex items-center justify-center rounded-full"><i className="ri-map-pin-line"></i></h2>
                    <h4 className="font-medium text-base">{`${item}`}</h4>
                </div>
                })
            }
        </div>
    )
}

LocationSearchPanel.propTypes = {
    setvehiclePanel: PropTypes.func.isRequired,
    setpanelOpen: PropTypes.func.isRequired,
};

export default LocationSearchPanel
