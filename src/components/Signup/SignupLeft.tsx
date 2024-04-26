import React, { FormEvent, useState } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { Link, Navigate, useNavigate } from "react-router-dom";
const SignupLeft = () => {

    const [passwordVisible, setPasswordVisible] = useState(false);
    // const [formData, setFormData] = useState({
    //   email: '',
    //   password: ''
    // })
  
    // const  handleChange = (e: FormEvent<HTMLInputElement>) => {
    //   const data = e.target as HTMLInputElement
    //   setFormData(prevData => {
    //     return { ...prevData, [data.name]: data.value }
    //   })
    // }
  
    // const navigate = useNavigate()
  
    // const loginUser = async(e: FormEvent<HTMLFormElement>) => {
    //   e.preventDefault()
    //   try {
    //     const response = await PUBLIC_URL.post('/auth/login', {
    //         email_or_username_or_phone_number: formData.email,
    //         password: formData.password
    //     })
    //     localStorage.setItem('ff_access_token', response.data.data.access_token)
    //     navigate('/dashboard')
    //   } catch (error) {
    //     toast.error('Invalid credentials. try again !!')
    //   }
    // }
  
    return (
      <div className="bg-white w-[60%] lg:h-full p-8">
        <div className="leading-6 mx-auto w-[85%] ">
          <h1 className="text-[#0469a3c2] text-2xl lg:font-bold py-4 ">
            Sign Up  <span className="text-[#0469a3c2]"></span>
          </h1>
        </div>
        <div className="mx-auto w-[85%] pt-3 flex flex-col justify-evenly h-[40%] gap-4">
          <form className="h-[60%] flex flex-col justify-evenly" >
            <div className="">
                
              <input
                className="outline-none p-3 bg-[#F6F6F6] mb-6 w-full pl-4 text-sm h-[60px] focus:bg-[white] focus:border-2"
                type="text"
                placeholder="Names"
                required
                name="Names"
               
              />
            </div>
            <div className="">
                
              <input
                className="outline-none p-3 bg-[#F6F6F6] mb-6 w-full pl-4 text-sm h-[60px] focus:bg-[white] focus:border-2"
                type="text"
                placeholder="Email Address"
                required
                name="email"
               
              />
            </div>
            <div className="">
                
              <input
                className="outline-none p-3 bg-[#F6F6F6] mb-6 w-full pl-4 text-sm h-[60px] focus:bg-[white] focus:border-2"
                type="text"
                placeholder="Telephone Number"
                required
                name="telephone_number"
               
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
            
            <button className="h-[70px] mt-3 outline-none p-3 bg-[#0469a3c2] text-[white] text-center border-0 rounded-none font-bold">
              Sign Up
            </button>
          </form>
        </div>
        <div className="w-[85%] mx-auto flex justify-center inset-x-0 h-[80%]">
          <div className="w-full flex justify-end">
            <section className="w-[85%] self-center bg-transparent">
              Already have an account?{" "}
              <Link to="/login" className="text-[#0469a3c2]">
                {" "}
                Log in
              </Link>
            </section>
          </div>
        </div>
      </div>
    )
}
export default SignupLeft;