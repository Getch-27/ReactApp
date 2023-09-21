import React from 'react'
import { useState } from 'react';

export default function LogInPage() {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  const [signupForm, setSignupForm] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [signupFormVisible, setSignupFormVisible] = useState(false);

  const handleLoginChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    //console.log(loginForm.email, loginForm.password)
    console.log(loginForm)
  };

  const handleSignupChange = (e) => {
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value });
    console.log(signupForm.email, signupForm.password, signupForm.confirmPassword)
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Success!", loginForm.email, loginForm.password)
    // Handle login form submission
    // login logic here
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log("Success!", signupForm.email, signupForm.password, signupForm.confirmPassword)
    // Handle signup form submission
    // signup logic here
  };

  const toggleSignupForm = () => {
    setSignupFormVisible(!signupFormVisible);
  };

  return (
    <div className="text-white">
      {signupFormVisible ? (
        <div className="flex items-center justify-center h-screen">
          <div className='border p-5 text-center'>
          <div>Signup</div>
          <div>
          <form onSubmit={handleSignupSubmit}>
          <div>
          <input
          type="email"
          name="email"
          value={signupForm.email}
          onChange={handleSignupChange}
          placeholder="Email"
          className="m-2"
        />
        </div>
        <div>
        <input
          type="password"
          name="password"
          value={signupForm.password}
          onChange={handleSignupChange}
          placeholder="Password"
          className="m-2"
        />
        </div>
        <div>
        <input
          type="password"
          name="confirmPassword"
          value={signupForm.confirmPassword}
          onChange={handleSignupChange}
          placeholder="Confirm Password"
          className="m-2"
        />
        </div>
        <div>
          <button type="submit">Signup</button>
          </div>
          </form>
          </div>
          <div>
          <p>
            Already have an account?{' '}
            <button onClick={toggleSignupForm}>Login</button>
          </p>
          </div>
          </div>
        </div>

      ) : (

        <div className="flex items-center justify-center h-screen"> 
        <div className='border p-5 text-center'>
          <div>Login</div>
          <div>
          <form onSubmit={handleLoginSubmit}>
          <div>
          <input
          type="email"
          name="email"
          value={loginForm.email}
          onChange={handleLoginChange}
          placeholder="Email"
          className="m-2"
        />
        </div>
        <div>
        <input
          type="password"
          name="password"
          value={loginForm.password}
          onChange={handleLoginChange}
          placeholder="Password"
          className="m-2"
        />
        </div>
        <div>
            <button type="submit">Login</button>
            </div>
          </form>
          </div>
          <div>
          <p>
            Don't have an account?{' '}
            <button onClick={toggleSignupForm}>Sign Up</button>
          </p>
          </div>
        </div>
        </div>

      )}
    </div>
  );
}
