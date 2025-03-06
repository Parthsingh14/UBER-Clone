import { useNavigate } from "react-router-dom"
import PropTypes from 'prop-types';
import { useEffect,useState,useContext } from "react";
import axios from "axios";
import { Captain_Data_Context } from '../context/CapatainContext';


function CaptainProtectWrapper({children}) {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const { setCaptain } = useContext(Captain_Data_Context)
    const [ isLoading, setIsLoading ] = useState(true)


    useEffect(() => {
        if (!token) {
            navigate('/captain-login')
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            if (response.status === 200) {
                setCaptain(response.data.captain)
                setIsLoading(false)
            }
        })
            .catch(err => {

                localStorage.removeItem('token')
                navigate('/captain-login')
                console.log(err);
            })
    }, [ token ])



    if (isLoading) {
        return (
            <div>Loading...</div>
        )
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

