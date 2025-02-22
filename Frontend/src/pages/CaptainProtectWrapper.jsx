import { useNavigate } from "react-router-dom"
import PropTypes from 'prop-types';
import { useEffect,useState,useContext } from "react";
import axios from "axios";
import { Context_captain_data } from "../context/Context_captain";



function CaptainProtectWrapper({children}) {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const [isLoading,setIsLoading] = useState(true);
    const {setCaptain} = useContext(Context_captain_data);

    useEffect(()=>{
        if(!token){
            navigate('/captain-login') // Redirect to login page if no token found in local storage.
        }
    }, [token, navigate])

    
    axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    }).then((response)=>{
        if(response.status === 200){
            const data = response.data;
            setCaptain(data.captain);
            setIsLoading(false);
        }
    }).catch((error)=>{
        console.error(error);
        navigate('/captain-login') // Redirect to login page if error occurred while fetching captain data.
    })



    if(isLoading){
        return <div>Loading...</div>
    }


    return (
        <>
            {children}
        </>
    )
}
CaptainProtectWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default CaptainProtectWrapper

