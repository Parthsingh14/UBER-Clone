
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Captain_Data_Context } from '../context/CapatainContext'
import axios from "axios";


function CaptainSignup() {
  const navigate = useNavigate();
  const {setCaptain} = useContext(Captain_Data_Context);

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')

  const [ vehicleColor, setVehicleColor ] = useState('')
  const [ vehiclePlate, setVehiclePlate ] = useState('')
  const [ vehicleCapacity, setVehicleCapacity ] = useState('')
  const [ vehicleType, setVehicleType ] = useState('')
  
  
  const submitHandler = async (e) => {
    e.preventDefault()
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }

        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`, captainData);
            if (response.status === 201) {
              const data = response.data;
              setCaptain(data.captain);
              localStorage.setItem('token', data.token);
              navigate('/captain-login');              
            }
          } catch (error) {
            console.error("Signup failed:", error.response?.data?.message || error.message);
          }

        setEmail("");
        setPassword("");
        setFirstName('')
        setLastName('')
        setVehicleColor("");
        setVehiclePlate("");
        setVehicleType("");
        setVehicleCapacity("");
    };

    

  return (
    <div className="h-screen p-7 flex flex-col justify-between">
      <div>
        <img
          className="w-12 mb-3"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCO4w_adxK32rCXFeKq3_NbLcR9b_js14w&s"
          alt=""
        />

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-base font-medium mb-2">Whats your name</h3>

          <div className="flex gap-4 mb-5">
            <input
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="bg-[#eeeeee]  w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm"
              type="text"
              placeholder="firstname"
            />
            <input
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="bg-[#eeeeee]  w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm"
              type="text"
              placeholder="lastname"
            />
          </div>

          <h3 className="text-base font-medium mb-2">Whats your email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="text-base font-medium mb-2">Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            type="password"
            placeholder="password"
          />

          <h3 className="text-base font-medium mb-2">Vehicle Information</h3>
          <div className="flex gap-4 ">
          <input
            required
            value={vehicleColor}
            onChange={(e) => setVehicleColor(e.target.value)}
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm"
            type="text"
            placeholder="Vehicle Color"
          />

          <input
            required
            value={vehiclePlate}
            onChange={(e) => setVehiclePlate(e.target.value)}
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm"
            type="text"
            placeholder="vehicle Number"
          />
            </div>
            <div className="flex gap-4">
          
          <input
            required
            value={vehicleCapacity}
            onChange={(e) => setVehicleCapacity(e.target.value)}
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm"
            type="number"
            placeholder="Vehicle Capacity"
          />
          <select 
              required
              className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
          >
            <option value="" disabled>Select Vehicle Type</option>
            <option value="Car">Car</option>
            <option value="Bike">Bike</option>
            <option value="Auto">Auto</option>
          </select>
          </div>

          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Register
          </button>
        </form>

        <p className="text-center mb-2">
          Already have a account?{" "}
          <Link to="/captain-login" className="text-blue-600">
            Login Here
          </Link>{" "}
        </p>
      </div>

      <div>
        <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the Google{" "}
          <span className="underline">Privacy Policy</span> and{" "}
          <span className="underline">Terms of Services</span> apply
        </p>
      </div>
    </div>
  );
}

export default CaptainSignup;
