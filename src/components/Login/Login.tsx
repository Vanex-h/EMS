
import LoginLeft from "./LoginLeft";
import LoginRight from "./LoginRight";
const Login= ()=>{
    return(
        <div className="lg:h-screen lg:w-screen flex items-center justify-center flex-row bg-white">
        <div className='w-9/12 h-[87.5%] flex flex-row '>
    
       <LoginLeft  />
       <LoginRight />
        </div>
        </div>
    )
}
export default Login;