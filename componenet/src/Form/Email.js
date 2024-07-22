import React, { useState } from 'react'
import './Bill.css'

const Email = () => {
    const [email,setEmail]=useState("");
    const [pswd,setPswd]=useState("");
    const [arr,setArr]=useState([]);
    function sub(event){
        event.preventDefault();
        setArr([...arr,{email,pswd}])
    }
  return (
    <div>
          <div class="container mt-3">
              <h1>Email login</h1>
              <form onSubmit={sub}>
                  <div class="mb-3 mt-3">
                      <label for="email">Email:</label>
                      <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                  </div>
                  <div class="mb-3">
                      <label for="pwd">Password:</label>
                      <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" value={pswd} onChange={(e)=>setPswd(e.target.value)}/>
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
              </form>
          </div>
          <div  className="table-container">
            <table class="container mt-3" className="curved-table">
                <tr>
                    <th>Email</th>
                    <th>Password</th>
                </tr>
                {arr.map((a,b)=>(
                <tr key={b}>
                    <td>{a.email}</td>
                    <td>{a.pswd}</td>
                </tr>
                ))}
            </table>
          </div>
    </div>
  )
}

export default Email