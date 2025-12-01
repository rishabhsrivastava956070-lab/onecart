import React from 'react';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import google from '../assets/google.png';

function Registration() {
  let navigate = useNavigate();

  return (
    <div>
      <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-white flex flex-col items-center justify-start">

        {/* Logo Section */}
        <div
          className="w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer"
          onClick={() => navigate('/')}
        >
          <img className="w-[40px]" src={logo} alt="" />
          <h1 className="text-[22px] font-sans">oneCart</h1>
        </div>

        {/* Header Text */}
        <div className="w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]">
          <span className="text-[25px] font-semibold">Registration Page</span>
          <span className="text-[16px]">Welcome to oneCart, Place your order</span>
        </div>

        {/* Registration Box */}
        <div className="max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border-[1px] border-[#96969635] backdrop-blur-2xl rounded-lg shadow-lg flex items-center justify-center">

          <form className="w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]">

            {/* Google Login */}
            <div className="w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer">
              <img src={google} alt="" className="w-[20px]" />
              Registration with Google
            </div>

            {/* OR Divider */}
            <div className="w-[100%] h-[20px] flex items-center justify-center gap-[10px]">
              <div className="w-[40%] h-[1px] bg-[#96969635]"></div>
              OR
              <div className="w-[40%] h-[1px] bg-[#96969635]"></div>
            </div>
            <div className="w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px]">
              <input
  type="text"
  className="w-[100%] h-[50px] border-[2px] border-[#96969635] 
             backdrop:blur-sm rounded-lg shadow-lg bg-transparent 
             placeholder-[#ffffffc7] px-[20px] font-semibold"
  placeholder="UserName"
  required
/>

<input
  type="text"
  className="w-[100%] h-[50px] border-[2px] border-[#96969635] 
             backdrop:blur-sm rounded-lg shadow-lg bg-transparent 
            placeholder-[#ffffffc7] px-[20px] font-semibold"
  placeholder="Email"
  required
/>
<input
  type="password"
  className="w-[100%] h-[50px] border-[2px] border-[#96969635] 
             backdrop:blur-sm rounded-lg shadow-lg bg-transparent 
            placeholder-[#ffffffc7] px-[20px] font-semibold"
  placeholder="Password"
  required
/>
 
              </div>
               

          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
