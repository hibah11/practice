import axios from "../../node_modules/axios/index";
import { useState } from "react";

export default function LoginPage() {
    const [userData, setUserData] = useState({ username: '', password: '' });

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setUserData({ ...userData, [name]: value });
    };
axios.get('https://fakestoreapi.com/users')

  return (
    <div>
      <div className = 'flex flex-col items-center justify-center gap-10'>
      <h1 className = 'text-center text-4xl pt-4'>Login to Amazon</h1>
      <input onChange = {handleInputChange} placeholder = 'username' className = 'bg-[#131921] w-1/3 rounded p-4 text-white' type = 'text'></input>
      <input onChange = {handleInputChange} placeholder = 'Password' className = 'bg-[#131921] w-1/3 rounded p-4 text-white' type = 'text'></input>
      <button className = 'p-3 bg-gray-500 rounded text-white'>Sign up</button>
    </div>
    </div>
  )
}


