import { useState } from 'react';
import axios from '../../node_modules/axios/index';

const Signup = () => {
  const [userData, setUserData] = useState({ username: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSignup = () => {
   axios
      .post('https://64ed1562f9b2b70f2bfb4482.mockapi.io/courses', userData)
      .then((response) => {
        console.log('User signed up:', response.data);
        // Redirect to the login page after successful sign-up
        history.push('/login');
      })
      .catch((error) => {
        console.error('Error signing up:', error);
      });
    localStorage.setItem('user', JSON.stringify(userData));

    // TODO: Send user data to your API for permanent storage using Axios
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleSignup}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
