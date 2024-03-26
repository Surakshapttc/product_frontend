import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';

const Update = () => {
     const {id} = useParams();
    const navigate = useNavigate();
    
    const [pnumber, setNumber] = useState("")
    const [pname, setName] = useState("")
    const [buyingprice, setBuyingPrice] =useState("")
    const [bought, setBought] =useState("")
    const [sellingprice, setSellingPrice] =useState("")
    const [sold, setSold] =useState("")
    

    useEffect(() => {
      axios.post("http://localhost:3001/getUpdateData", {id})
              .then(
                  (response) => {
                    setNumber(response.data.pnumber);
                   setName(response.data.pname);
                   setBuyingPrice(response.data.buyingprice);
                   setBought(response.data.bought);
                   setSellingPrice(response.data.sellingprice);
                   setSold(response.data.sold);
                  
                  })
              .catch(
                  err =>{console.log(err)},
              )
      },[id])
            const handleSubmit = (e) =>{
                e.preventDefault();
                try {
                    axios.post("http://localhost:3001/update", {pnumber,pname,buyingprice,id,bought,sellingprice,sold})
                    .then ((response)=>{
                        console.log(response);
                        navigate('/');
                    })
                    .catch((err) => {console.log(err) })
                }catch(err) {
      }
  };
                

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input placeholder='Enter number ' type='text' name = 'number' value={pnumber} onChange = {(e) =>setNumber(e.target.value)} required />
        <input placeholder='Enter Name' type = 'text' name = 'name' value={pname} onChange = {(e) =>setName(e.target.value)} required />
        <input placeholder='buyingprice' type = 'number' name = 'buyingprice' value={buyingprice} onChange = {(e) =>setBuyingPrice(e.target.value)} required />
        <input placeholder='bought' type = 'number' name = 'bought' value={bought} onChange = {(e) =>setBought(e.target.value)} required />
        <input placeholder='sellingprice' type = 'number' name = 'sellingprice' value={sellingprice} onChange = {(e) =>setSellingPrice(e.target.value)} required /> 
        <input placeholder='sold' type = 'number' name = 'sold' value={sold} onChange = {(e) =>setSold(e.target.value)} required />
        <input type = 'submit' value = "submit"/>
    </form>
    </div>
  )
}

export default Update;