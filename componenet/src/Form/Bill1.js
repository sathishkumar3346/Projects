import React, { useState } from 'react'
import'./Bill.css'

const Bill1 = () => {
    const[product,setProduct]=useState("")
    const[quantity,setQuantity]=useState("")
    const [price,setPrice]=useState("")
    const[arr,setArr]=useState([])
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    function handleSubmit(event) {
        event.preventDefault();
        if (isEditing) {
          handleUpdate();
        } else {
          setArr([...arr, { product, quantity, price }]);
        }
        setProduct('');
        setQuantity('');
        setPrice('');
        setIsEditing(false);
        setEditIndex(null);
      }
    
    
  function dlt(index) {
    console.log(index)
    const newArr = arr.filter((val,i) => i !== index);
    setArr(newArr);
  }
  function handleEdit(index) {
    const item = arr[index];
    setProduct(item.product);
    setQuantity(item.quantity);
    setPrice(item.price);
    setIsEditing(true);
    setEditIndex(index);
  }

  function handleUpdate() {
    const updatedArr = arr.map((item, index) =>
      index === editIndex ? { product, quantity, price } : item
    );
    setArr(updatedArr);
  }
    
  return (
    <div>
        <h1>Bill Registered</h1>
        <div id="f" class="container mt-3, ">
            <form onSubmit={handleSubmit}>

                <label>Product</label>
                <input type='text' value={product}  class="form-control" onChange={(e)=>setProduct(e.target.value)}/>

                <label>Quantity</label>
                <input type='text' value={quantity}  class="form-control" onChange={(e)=>setQuantity(e.target.value)} />

                <label>Price</label>
                <input type='text' value={price}  class="form-control" onChange={(e)=>setPrice(e.target.value)}/>

                <button type="submit" className="mt-2">
            {isEditing ? 'Update' : 'Submit'}
          </button>
            </form>
        </div>   
        <h1>Bill Listing</h1>
        <div id='t' class="container mt-3"> 
            <table class="table table-striped, bg-warning">
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th>Delete</th>
                </tr>
                {arr.map((note,index)=>(
                <tr key={index}>
                    <td>{note.product}</td>
                    <td>{note.quantity}</td>
                    <td>{note.price}</td>
                    <td>{note.quantity*note.price}</td>
                    <td>
                        <button onClick={() => dlt(index)}>Delete</button>
                        <button onClick={() => handleEdit(index)}>Edit</button>
                        </td>
                </tr>
                ))}

            </table>
        </div>    
    </div>
  )
}

export default Bill1