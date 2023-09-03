import { useState } from "react"
import axios from "../../node_modules/axios/index";
import { Link } from "../../node_modules/react-router-dom/dist/index";

export default function SignupPage() {
    const [userData, setUserData] = useState({ username: '', password: '' });

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setUserData({ ...userData, [name]: value });
    };
  
    const handleSignup = () => {
     axios
        .post('https://fakestoreapi.com/users', userData)
        .then((response) => {
          console.log(response.data);

        })
        .catch((error) => {
          console.error(error);
        });
      localStorage.setItem('user', JSON.stringify(userData));
  
    };
  
    return (
      <div >
        
        <form className = 'flex flex-col items-center justify-center h-screen gap-5 '>
        <h2>Sign Up</h2>
          <input
          className = 'bg-[#131921] w-1/3 rounded p-4 text-white'
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleInputChange}
          />
          <input
          className = 'bg-[#131921] w-1/3 rounded p-4 text-white'
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleInputChange}
          />
          <Link to = "/LoginPage">
          <button type="button" className = 'p-3 bg-gray-500 rounded text-white' onClick={handleSignup}>
            Sign Up
          </button>
          </Link>
        </form>
      </div>
    );
  };



