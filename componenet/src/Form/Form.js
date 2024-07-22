import React, { useState } from 'react'


const Form = () => {
  //  function myform  (){
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("")
  const [arr, setArr] = useState([])
  const done = (event) => {
    event.preventDefault();
    setArr([...arr, { name, pwd }]);
    setName("")
    setPwd("")

  }

  return (
    <div class="container mt-3">
      <h2>Stacked form</h2>
      <form onSubmit={done}>
        <div class="mb-3 mt-3">
          <label for="email">Email:</label>
          <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div class="mb-3">
          <label for="pwd">Password:</label>
          <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" value={pwd} onChange={(e) => setPwd(e.target.value)} />
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      <h2>Submitted Data</h2>
      <table class="table table-bordered">
        <tr>
          <th>Email:</th>
          <th>Password:</th>
        </tr>
        {arr.map((val, index) => (
          <tr key={index}>
            <td>{val.name}</td>
            <td>{val.pwd}</td>
          </tr>
        ))}
      </table>

    </div>

  )


}

export default Form