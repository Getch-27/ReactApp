import React from 'react'
import { useState } from 'react';

export default function LogInPage() {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  const [signupForm, setSignupForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [signupFormVisible, setSignupFormVisible] = useState(false);

  const [error, setError] = useState('');

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
    
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    // Check if name, email, or password is empty
    if (signupForm.name.trim() === '' || signupForm.email.trim() === '' || signupForm.password.trim() === '' || signupForm.confirmPassword.trim() === '') {
      setError('Please fill in all the required fields.');
      return;
    }

    // Perform validation
    const nameCheck = /^[a-zA-Z0-9_]{1,10}$/;
    const passwordCheck = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameCheck.test(signupForm.name)) {
      setError('Username must contain only letters, numbers, and underscores (up to 10 characters).');
      return;
    }
    if (!passwordCheck.test(signupForm.password)) {
      setError('Password must be at least 8 characters long and include at least one letter, one number, and one special character.');
      return;
    }
    if (!emailCheck.test(signupForm.email)) {
      setError('Invalid email address.');
      return;
    }

    // Check if password and confirm password match
    if (signupForm.password !== signupForm.confirmPassword) {
      setError('Confirm your password correctly.');
      return;
    }

    console.log("Success!", signupForm.name, signupForm.email, signupForm.password, signupForm.confirmPassword)
    // Handle signup form submission
    // signup logic here
  };

  const toggleSignupForm = () => {
    setSignupFormVisible(!signupFormVisible);
  };

  return (
    <div className=" text-white">
      {signupFormVisible ? (
        <div className="flex items-center justify-center h-screen">
          <div className='text-center p-5'>
          <div className='text-transparent bg-gradient-to-r from-midnight to-tahiti bg-clip-text text-3xl font-bold font-nunito mb-3'>Signup</div>
          <div>
          <form onSubmit={handleSignupSubmit}>
          <div>
        <input
          type="text"
          name="name"
          value={signupForm.name}
          onChange={handleSignupChange}
          placeholder="Display Name"
          className="m-2 h-10 w-64 rounded-xl border-2 placeholder text-black outline-none indent-2"
          style={{ fontSize: '16px' }}
        />
        </div>
          <div>
          <input
          type="email"
          name="email"
          value={signupForm.email}
          onChange={handleSignupChange}
          placeholder="Email"
          className="m-2 h-10 w-64 rounded-xl border-2 placeholder text-black outline-none indent-2"
        />
        </div>
        <div>
        <input
          type="password"
          name="password"
          value={signupForm.password}
          onChange={handleSignupChange}
          placeholder="Password"
          className="m-2 h-10 w-64 rounded-xl border-2 placeholder text-black outline-none indent-2"
        />
        </div>
        <div>
        <input
          type="password"
          name="confirmPassword"
          value={signupForm.confirmPassword}
          onChange={handleSignupChange}
          placeholder="Confirm Password"
          className="m-2 h-10 w-64 rounded-xl border-2 placeholder text-black outline-none indent-2"
        />
        </div>
        <div>
        <p className=' text-tahiti m-1 text-xs'>{error}</p>
          <button type="submit" className='m-2 h-10 w-64 rounded-xl border-2 placeholder text-white outline-none'>Signup</button>
          </div>
          </form>
          </div>
          <div>
          <p>
            Already have an account?{' '}
            <button onClick={toggleSignupForm} className='text-transparent bg-gradient-to-r from-midnight to-tahiti bg-clip-text text-lg font-bold font-nunito mb-3'> | Login</button>
          </p>
          </div>
          </div>
        </div>

      ) : (

        <div className="flex items-center justify-center h-screen"> 
        <div className=' p-5 text-center'>
          <div className='text-transparent bg-gradient-to-r from-midnight to-tahiti bg-clip-text text-3xl font-bold font-nunito mb-3'>Login</div>
          <div>
          <form onSubmit={handleLoginSubmit}>
          <div>
          <input
          type="email"
          name="email"
          value={loginForm.email}
          onChange={handleLoginChange}
          placeholder="Email"
          className="m-2 h-10 w-64 rounded-xl border-2 placeholder text-black outline-none indent-2"
        />
        </div>
        <div>
        <input
          type="password"
          name="password"
          value={loginForm.password}
          onChange={handleLoginChange}
          placeholder="Password"
          className="m-2 h-10 w-64 rounded-xl border-2 placeholder text-black outline-none indent-2"
        />
        </div>
        <div>
            <button type="submit" className='m-2 h-10 w-64 rounded-xl border-2 placeholder text-white outline-none'>Login</button>
            </div>
          </form>
          </div>
          <div>
          <p>
            Don't have an account?{' '}
            <button onClick={toggleSignupForm} className='text-transparent bg-gradient-to-r from-midnight to-tahiti bg-clip-text text-lg font-bold font-nunito mb-3'>  | Signup</button>
          </p>
          </div>
        </div>
        </div>

      )}
    </div>
  );
}
