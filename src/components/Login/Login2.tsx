// import { FiEyeOff, FiEye } from "react-icons/fi"
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <div className='flex flex-col justify-center h-screen '>
            <h1 className='text-2xl font-bold opacity-75 '>LOGIN <br/> <div className="text-lg">
                Welcome Back !
                </div>
                </h1>
            <div>
                <form className='flex flex-col w-1/4 m-auto justify-between pt-2 '>
                    <input type='text' placeholder='Enter your username' className='border border-gray-300 text-sm rounded-lg p-3 my-2 focus:outline-none'/>
                    <div className="flex flex-row w-full">

                    <input type='password' placeholder='Enter your password' className='border border-r-0 border-gray-300 rounded-md p-3 text-sm my-2 focus:outline-none w-3/4 rounded-r-none'/>
                    <div className="border border-gray-300 w-1/4 focus:outline-none p-3 my-2 rounded-lg border-l-0 rounded-l-none ">

                    </div>
                    </div>
                    <div className="text-[#2F89FC] p-2 cursor-pointer">Forgot password?</div>
                    <button className='bg-blue-500 text-white rounded-lg p-2 my-2 focus:outline-none'>Login</button>
                <div className="flex flex-row justify-evenly pt-4       ">
                    <div>
                        Don't have an account?
                    </div>
                    <div className="text-[#2F89FC]" ><Link to ="/signup">
                    Signup
                    </Link>
                    </div>
                </div>
                </form>
            </div>
        </div>
    );
};

export default Login;