import React, { useState } from 'react';

function AddProduct() {
    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [category,setCategory]=useState('');
    const [company,setCompany]=useState('');

    const addProduct=async ()=>{
        // console.log(name,price,category,company);

        const userId=JSON.parse(localStorage.getItem('user'))._id;
        let result=await fetch('http://localhost:5000/add-product',{
            method:"post",
            body:JSON.stringify({name,price,category,userId,company}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        result=await result.json();
        console.log(result);
    }

    return (
        <div className='product-form'>
            <h1>Add Product</h1>
            <input type='text' onChange={(e)=>setName(e.target.value)} value={name} placeholder='Enter Product Name' ></input><br />
            <input type='text' onChange={(e)=>setPrice(e.target.value)} value={price}  placeholder='Enter Product Price' ></input><br />
            <input type='text' onChange={(e)=>setCategory(e.target.value)} value={category}  placeholder='Enter Product Category' ></input><br />
            <input type='text' onChange={(e)=>setCompany(e.target.value)} value={company}  placeholder='Enter Product Company' ></input><br />
            <button onClick={addProduct}>Add Product</button>
        </div>
    )
}

export default AddProduct;