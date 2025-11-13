import axios from 'axios';
import React, { useState } from 'react'

const Entry = () => {
    const [name,setName]=useState("");
    const [pass,setPass]=useState("");
    const handleform=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/login/",{
            name,
            pass
        })
        .then((response)=>{
            console.log(response.data);
            if(response.data.status==="success"){
                window.location.href="/list";
            }else{
                alert("Invalid Credentials");
            }
        })
    }
  return (
    <>
    <div className="flex items-center justify-center">
     <div className=" bg-gray-600 w-4xl max-w-2xs p-6 rounded-xl shadow-lg">
    <form className="flex flex-col items-center justify-center mx-auto gap-3 text-white rounded-lg">
     <input type="text" className="border-2 border-gray-300 p-2 rounded-lg bg-gray-500" placeholder='Username..' value={name} onChange={(e)=>setName(e.target.value)}></input>
        <input type="password" className='border-2 border-gray-300 p-2 rounded-lg bg-gray-500' placeholder='Password..' value={pass} onChange={(e)=>setName(e.target.value)}></input>
        <button type="submit" className='bg-blue-500 p-2 rounded-lg' onclick={handleform} >Login</button>
        <p className=''>Don't have an account? <a href="/form">Register</a></p>
   
    </form>
     </div>

     </div>

    </>
  )
}

export default Entry
