import {Link} from 'react-router-dom'

const Signup= () => {
    return (
        <div className='flex flex-col justify-center h-screen '>
        <h1 className='text-2xl font-bold opacity-75 pb-2 '>Sign Up 
            </h1>
        <div>
            <form className='flex flex-col w-1/4 m-auto justify-between pt-2 '>
                <input type='text' placeholder='Enter your name ' className='border border-gray-300 text-sm rounded-lg p-3 my-2 focus:outline-none'/>
                <input type='email' placeholder='Enter your email' className='border border-gray-300 text-sm rounded-lg p-3 my-2 focus:outline-none'/>
                <input type='number' placeholder='Enter your phone number'  className='border border-gray-300 text-sm rounded-lg p-3 my-2 focus:outline-none'/>
                <div className="flex flex-row w-full">
            
                <input type='password' placeholder='Enter your password' className='border border-r-0 border-gray-300 rounded-md p-3 text-sm my-2 focus:outline-none w-3/4 rounded-r-none'/>
                <div className="border border-gray-300 w-1/4 focus:outline-none p-3 my-2 rounded-lg border-l-0 rounded-l-none ">

                </div>
                </div>
                <button className='bg-blue-500 text-white rounded-lg p-2 my-2 focus:outline-none'>Sign Up</button>
            <div className="flex flex-row justify-evenly pt-4       ">
                <div>
                   Already have an account?
                </div>
                <div className="text-[#2F89FC]" ><Link to ="/login">
                Login
                </Link>
                </div>
            </div>
            </form>
        </div>
    </div>
    );
};

export default Signup;