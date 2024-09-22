import {useState} from 'react';
import './Form.css';

export default function Form() {
let [fullName,setFullName]=useState("");
let handelNameChange =(event)=>{
    setFullName(event.target.value);
}

  return (
    <div className='form'>
    <form>
      <label htmlFor='name'>Name : </label>
      <input type='text' placeholder='Dew Point Measurement' value={fullName} onChange={handelNameChange}/><br></br><br></br>

      <label htmlFor='field1'>Field 1 : </label>
      <input type='text' placeholder='Enter your field 1'/><br></br><br></br>

      <label htmlFor='field2'>Field 2 : </label>
      <input type='text' placeholder='Enter your field 2'/><br></br><br></br>

      <label htmlFor='field3'>Field 3 : </label>
      <input type='text' placeholder='Enter your field 3'/><br></br><br></br>

      <label htmlFor='field4'>Field 4 : </label>
      <input type='text' placeholder='Enter your field 4'/><br></br><br></br>

      <button type='button'>Save Channel</button>

    </form>
 </div>
  )
}

