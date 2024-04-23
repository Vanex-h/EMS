
import './App.css'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='home' element={<div className='flex flex-col justify-center h-screen text-3xl'> Hello there 👋🏽</div>}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='signup' element={<Signup />}></Route>
      </Routes>
      </BrowserRouter>
        
    </>
  )
}

export default App
