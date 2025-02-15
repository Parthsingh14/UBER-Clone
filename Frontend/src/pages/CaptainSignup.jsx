import { useState } from "react";
import { Link } from "react-router-dom"

function CaptainSignup() {

    const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [firstname, setFirstname] = useState('');
        const [lastname, setlastname] = useState('');
        const [userData, setUserData] = useState({});
    
    
        const submitHandler = (e)=>{
            e.preventDefault();
            setUserData({
                fullname: {
                    firstname: firstname,
                    lastname: lastname
                },
                email: email,
                password: password
            });
            console.log(userData);
            setEmail('');
            setPassword('');
            setFirstname('');
            setlastname('');
        }


    return (
        <div className="h-screen p-7 flex flex-col justify-between">
            <div>
               <img className="w-16 mb-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCO4w_adxK32rCXFeKq3_NbLcR9b_js14w&s" alt="" />

               <form action="" onSubmit={(e)=>{submitHandler(e)}} > 
               <h3 className="text-base font-medium mb-2">Whats your name</h3> 

               <div className="flex gap-4 mb-5">
                    <input required value={firstname} onChange={(e)=> setFirstname(e.target.value)} className="bg-[#eeeeee]  w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm" type="text" placeholder="firstname" />
                    <input required value={lastname} onChange={(e)=> setlastname(e.target.value)} className="bg-[#eeeeee]  w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm" type="text" placeholder="lastname" />
               </div> 
           
                <h3 className="text-base font-medium mb-2">Whats your email</h3>
                <input required value={email} onChange={(e)=> setEmail(e.target.value)} className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm" type="email" placeholder="email@example.com" />

                <h3 className="text-base font-medium mb-2">Enter Password</h3>
                <input required value={password} onChange={(e)=> setPassword(e.target.value)} className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm" type="password" placeholder="password" />

                <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">Register</button>
               </form>

               <p className="text-center">Already have a account? <Link to='/captain-login' className="text-blue-600">Login Here</Link> </p>

            </div>

            <div>
                <p className="text-[10px] leading-tight">This site is protected by reCAPTCHA and the Google <span className="underline">Privacy Policy</span> and <span className="underline">Terms of Services</span> apply</p>

            </div>
        </div>
    )
}

export default CaptainSignup
