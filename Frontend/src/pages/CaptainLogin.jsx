import { Link } from "react-router-dom"
import { useState } from "react"

function CaptainLogin() {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [captainData, setCaptainData] = useState({});
    
        const submitHandler = (e)=>{
            e.preventDefault();
            setCaptainData({
                email: email,
                password: password
            })
            console.log(captainData);
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
