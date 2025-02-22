import { useNavigate } from "react-router-dom"
import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from "react";
import { Context_user_data } from "../context/Context_user";
import axios from "axios";

function UserProtectWrapper({children}) {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const {setUser} = useContext(Context_user_data);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(()=>{
        if(!token){
            navigate('/login') // Redirect to login page if no token found in local storage.
        }
    }, [token, navigate])

    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    }).then((response)=>{
        if(response.status === 200){
            const data = response.data;
            setUser(data.user);
            setIsLoading(false);
        }
    }).catch((error)=>{
        console.error(error);
        navigate('/login') // Redirect to login page if error occurred while fetching captain data.
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
UserProtectWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default UserProtectWrapper

