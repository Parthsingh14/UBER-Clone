import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { Context_user_data } from "../context/Context_user";
import axios from "axios";
function UserLogin() {
    //two-way binding with react because react dont know what we are actually typing in the form
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {setUser} = useContext(Context_user_data);
    const navigate = useNavigate();

    const submitHandler = async (e)=>{
        e.preventDefault();
        const userData = {
            email: email,
            password: password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);
        if(response.status === 200){
            const data = response.data;
            setUser(data.user);
            localStorage.setItem('token', data.token);
            navigate('/home');
        }


        //reset the form after successful login
        setEmail(""); //set email to empty
        setPassword("");// set password to empty
    }





    
    return (
        <div className="h-screen p-7 flex flex-col justify-between">
            <div>
               <img className="w-16 mb-10" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
               <form onSubmit={(e)=>{submitHandler(e)}} action="" >
                <h3 className="text-lg font-medium mb-2">Whats your email</h3>
                <input required value={email} onChange={(e)=> setEmail(e.target.value)} className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base" type="email" placeholder="email@example.com" />
                <h3 className="text-lg font-medium mb-2">Enter Password</h3>
                <input required value={password} onChange={(e)=> setPassword(e.target.value)} className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base" type="password" placeholder="password" />
                <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">Login</button>
               </form>
               <p className="text-center">New Here? <Link to='/signup' className="text-blue-600">Create new Account</Link> </p>
            </div>

            <div>
                <Link to='/captain-login' className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base">Sign in as Captain</Link>
            </div>
        </div>
    )
}

export default UserLogin
