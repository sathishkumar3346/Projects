import React, { useState } from 'react'
import'./Bill.css'
const Name = () => {
    const[fname,setFname]=useState("")
    const[lname,setLname]=useState("")
    const[arr,setArr]=useState([])
    function done(event){
        event.preventDefault();
    setArr([...arr, { fname, lname }]);
        setFname("")
        setLname("")
    }
  return (
   <div >
        <div class="container mt-3">
        <h1>Name Register</h1>
        <form onSubmit={done} class="bg-warning">
            <label for="fname">First name:</label><br/>
            <input type="text" id="fname" name="fname" value={fname} onChange={(e)=>setFname(e.target.value)}/><br/>
            <label for="lname">Last name:</label><br/>
            <input type="text" id="lname" name="lname" value={lname} onChange={(e)=>setLname(e.target.value)}/><br/>
            <br/>
            <input type="submit" value="Submit"/>
        </form> 
    </div>
    <div className="table-container">
            <table class="container mt-3, curved-table">
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                </tr>
                {arr.map((a,b)=>(
                <tr key={b}>
                    <td>{a.fname}</td>
                    <td>{a.lname}</td>
                </tr>
            ) )}
            </table>
    </div>        
   </div>
  )
}

export default Name