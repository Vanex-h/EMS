import React, { FormEvent, useState } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'


const LoginRight = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const navigate=useNavigate();
  const [isLoading,setisLoading]= useState(false);
  const [username, setusername]= useState("");
  const [password, setpassword]= useState("");
  const [error, seterror]= useState("");
  const empLogin=async ()=>{
      setisLoading(true)
      let response= await fetch("http://localhost:1500/auth/login",{
          method:"POST",
          body: JSON.stringify({
              username,
              password,
          }),
          headers:{
              "Content-Type": "application/json"
      },})
      setisLoading(false)
      if(response.status==200){
          const data= await response.json();
          localStorage.setItem('token', data.token)
          navigate('/home')
      }
      else{
          seterror("Something is wrong");
          setTimeout(()=>{
              seterror("");
          },3000)
      }
  }



  return (
    <div className="bg-white w-[60%] lg:h-full p-8">
      <div className="leading-6 mx-auto w-[85%] ">
        <h1 className="text-[#0469a3c2] text-2xl lg:font-bold py-4 ">
          Login  <span className="text-[#0469a3c2]"></span>
        </h1>
      </div>
      <div className="mx-auto w-[85%] pt-3 flex flex-col justify-evenly h-[40%] gap-4">
        <form className="h-[60%] flex flex-col justify-evenly" >
          <div className="">
            <input
              className="outline-none p-3 bg-[#F6F6F6] mb-6 w-full pl-4 text-sm h-[60px] focus:bg-[white] focus:border-2"
              type="text"
              placeholder="Email Address"
              required
              name="email"
              onChange={(e)=>setusername(e.target.value)}
            />
          </div>
          <div className="">

          <div className=" h-fit relative flex items-center justify-end">
            <input
              className="outline-none p-3 bg-[#F6F6F6] w-full pl-4 text-sm h-[60px] focus:bg-[white] focus:border-2"
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Password"
              required
              name="password"
              onChange={(e)=>setpassword(e.target.value)}
              />
            {passwordVisible ? (
              <FiEyeOff
              className="w-5 h-5 text-gray-500 absolute self-center top-5 right-7"
              onClick={() => setPasswordVisible((prev) => !prev)}
              />
            ) : (
              <FiEye
              className="w-5 h-5 text-gray-500 absolute self-center top-5 right-7"
              onClick={() => setPasswordVisible((prev) => !prev)}
              />
            )}
            </div>
          </div>
          <div className="w-[85%] pl-4 text-[#0469a3c2] m-3 cursor-pointer">Forgot password?</div>
          <button className="h-[70px] outline-none p-3 bg-[#0469a3c2] text-[white] text-center border-0 rounded-none font-bold cursor-pointer" disabled={isLoading} onClick={empLogin}>
          {isLoading?"Loading...":"Login"}
          </button>
        </form>
      </div>
      <div className="w-[85%] mx-auto flex justify-center inset-x-0 h-[80%]">
        <div className="w-full flex justify-end">
          <section className="w-[85%] self-center bg-transparent">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#0469a3c2]">
              {" "}
              Sign up
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};
export default LoginRight;
