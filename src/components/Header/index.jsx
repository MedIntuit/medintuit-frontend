// import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './header.css'
// const Dropdown =()=>{
//   const[selectedOption,setSelectedOption] =useState('');
//   const handelSelectChange =(e)=>{
//     setSelectedOption(e.target.value)
//   };
//   return (
//     <div>
      
//     </div>
//   )
// }

// const toggleMenu = () => {
//   setIsOpen(!isOpen);
// };


export default function Header() {
  const navigate = useNavigate();
  return (
    <div className='header'>
      <h1 className='name' onClick={() => navigate('/')}>HealthCare</h1>
      <ul>
        <li htmlFor='channel'>Channels </li>
        <select name='channel' id='channel'>
              <option value='myChannel'>My Channel</option>
              <option value='Public Channel'>Public Channel</option>
              <option value='Private Channel'>Private Channel</option>
        </select>
       
        
        <li>App</li>
        <li>Community</li>
        <li>Support</li>
        
      </ul>
      <div className='login-button' onClick={() => navigate('/login')}>Login</div>
    </div>
  )
}
