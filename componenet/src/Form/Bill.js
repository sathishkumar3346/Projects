import React, { useState } from 'react'
import'./Bill.css'

const Bill = () => {
    const[product,setProduct]=useState("");
    const[quantity,setQuantity]=useState("");
    const[price,setPrice]=useState("");
    const [arr, setArr] = useState([])


    function done(event){
        event.preventDefault()
            setArr([...arr, { product,quantity,price }]); 
            setProduct("")
            setQuantity("")
            setPrice("")
    }
  return (
    <div>
            <h1>Bill Registered</h1>
        <div class="container mt-3 , bg-secondary p-3">
                <form onSubmit={done}>
                    <div class="mb-3 mt-3">
                        <label for="product">Product:</label>
                        <input type="text" class="form-control" id="email" placeholder="Enter Product" name="product" value={product} onChange={(e)=> setProduct(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                        <label for="quentity">Quantity:</label>
                        <input type="text" class="form-control" id="pwd" placeholder="Enter Quantity" name="quantity" value={quantity} onChange={(e)=> setQuantity(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                        <label for="pwd">Price:</label>
                        <input type="price" class="form-control" id="pwd" placeholder="Enter price" name="price" value={price} onChange={(e)=> setPrice(e.target.value)}/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
        <h1>List the billing</h1>
        <div class="container mt-3 , bg-danger p-3">    
                <table class="table table-bordered">
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                    {arr.map((val, index) => (
                        <tr key={index}>
                            <td class="text-warning">{val.product}</td>
                            <td class="text-primary">{val.quantity}</td>
                            <td class="text-success">{val.price}</td>
                            <td class="text-info">{val.quantity*val.price}</td>
                        </tr>
                        ))}
                </table>
        </div>
   </div>    
  )
}

export default Bill