import React, { useState } from 'react'
import './Bill.css'

const Mark = () => {
    const[name,setName]=useState("")
    const[tamil,setTamil]=useState()
    const[english,setEnglish]=useState()
    const[maths,setMaths]=useState()
    const[science,setScience]=useState()
    const[socialscience,setSocialscience]=useState()
    const[arr,setArr]=useState([])

    const calculateTotalMarks = (marks) => {
        let total = 0;
        for (let mark of marks) {
            total += parseInt(mark);
        }
        return total;
    };

    function done(event){
        event.preventDefault();
        const total = calculateTotalMarks([tamil, english, maths, science, socialscience]);
      
        setArr([...arr,{name,tamil,english,maths,science,socialscience,total}])
    }
    
  return (
    <div>
        <div class="container mt-3">
            <form onSubmit={done} class="bg-primary">
                <label>Student Name</label>
                <input type='text' value={name} name='name' onChange={(e)=>setName(e.target.value)}/>  <br/>
              
                    <label>Tamil</label> <br/>
                    <input type='text' value={tamil} name='tamil' onChange={(e)=>setTamil(e.target.value)}/> <br/>
               
                    <label>English</label> <br/>
                    <input type='text' value={english} name='english' onChange={(e)=>setEnglish(e.target.value)}/>
                <br/>
                    <label>Maths</label> <br/>
                    <input type='text' value={maths} name='maths' onChange={(e)=>setMaths(e.target.value)}/>
                <br/>
                    <label>Science</label> <br/>
                    <input type='text' value={science} name='science' onChange={(e)=>setScience(e.target.value)}/>
                <br/>
                    <label>Social Science</label> <br/>
                    <input type='text' value={socialscience} name='socialscience' onChange={(e)=>setSocialscience(e.target.value)}/> <br/> <br/>

                    <input type="submit" value="Submit"/>

            </form>
        </div>
        <div  className="table-container">
            <table  class="container mt-3, curved-table">
                <tr>
                    <th>StudentName</th>
                    <th>Tamil</th>
                    <th>English</th>
                    <th>Maths</th>
                    <th>Science</th>
                    <th>Social science</th>
                    <th>Total</th>
                </tr>
                {arr.map((a,b)=>(
                    <tr key={b}>
                        <td>{a.name}</td>
                        <td>{a.tamil}</td>
                        <td>{a.english}</td>
                        <td>{a.maths}</td>
                        <td>{a.science}</td>
                        <td>{a.socialscience}</td>
                        <td>{a.total}</td>
                    </tr>
                  ))}
                
            </table>
        </div>
    </div>
  )
}

export default Mark