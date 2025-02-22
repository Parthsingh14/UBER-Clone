import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Context_captain_data } from "../context/Context_captain";

function CaptainLogin() {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const navigate = useNavigate();
        const {setCaptain} = useContext(Context_captain_data);
    
        const submitHandler = async (e)=>{
            e.preventDefault();
           const captainData = {
                email: email,
                password: password
           }
           const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/login`,captainData);
           if(response.status === 200){
               const data = response.data;
               setCaptain(data.captain);
               localStorage.setItem('token', data.token);
               navigate('/captain-home');
           }
            setEmail(""); //set email to empty
            setPassword("");// set password to empty
        }

        
    return (
        <div className="h-screen p-7 flex flex-col justify-between">
            <div>
               <img className="w-20 mb-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCO4w_adxK32rCXFeKq3_NbLcR9b_js14w&s" alt="" />
               <form onSubmit={(e)=>{submitHandler(e)}} action="" >
                <h3 className="text-lg font-medium mb-2">Whats your email</h3>
                <input required value={email} onChange={(e)=> setEmail(e.target.value)} className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base" type="email" placeholder="email@example.com" />
                <h3 className="text-lg font-medium mb-2">Enter Password</h3>
                <input required value={password} onChange={(e)=> setPassword(e.target.value)} className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base" type="password" placeholder="password" />
                <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">Login</button>
               </form>
               <p className="text-center">Join a fleet? <Link to='/captain-signup' className="text-blue-600">Register as a Captain</Link> </p>
            </div>

            <div>
                <Link to='/login' className="bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base">Sign in as User</Link>
            </div>
        </div>
    )
}

export default CaptainLogin
