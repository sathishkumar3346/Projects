import React, { useState } from 'react'
import './Bill.css'

const Image = () => {
    const[title,setTitle]=useState("")
    const[para,setPara]=useState("")
    const [imageUrl, setImageUrl] = useState("");
    const[arr,setArr]=useState([])
    function done(event){
        event.preventDefault();
        setArr([...arr,{title,para,imageUrl}])
    }
  return (
    <div>
        <div>
            <form onSubmit={done}>
                <label>Enter a Tittle</label><br/>
                <input type='text' value={title} onChange={(e)=> setTitle(e.target.value)}/>
                <br/>
                <label>Enter a Para</label><br/>
                <input type='text' value={para} onChange={(e)=> setPara(e.target.value)}/>
                <br/>
                <label>Enter a URL</label><br/>
                <input type='link'  value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}/>
                <br/><br/>
                
                <input type="submit" value="Submit"/>
            </form>
        </div>
        <div className="table-container">
            <table  class="container mt-3, curved-table">
                <tr>
                    <th>Tittle</th>
                    <th>Para</th>
                    <th>Image</th>
                </tr>
                {arr.map((a,b)=>(
                <tr key={b}>
                   <td>{<h1>{a.title}</h1>}</td>
                    <td>{<p>{a.para}</p>}</td>
                   <td>{ <img src={a.imageUrl} alt="User provided" width="20%" height="70px"/>}</td>
                </tr>    
                ))}
            </table>
        </div>    
    </div>
  )
}

export default Image