import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddData = () => {
    const navigate = useNavigate();
    const [pnumber, setPNumber] = useState("")
    const [pname, setPName] = useState("")
    const [buyingprice, setBuyingPrice] =useState("")
    const [bought, setBought] =useState("")
    const [sellingprice, setSellingPrice] =useState("")
    const [sold, setSold] =useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            axios
                .post("http://localhost:3001/insert", { pnumber,pname,buyingprice,bought,sellingprice,sold})
                .then(
                    (response) =>{

                    console.log(response)
                    navigate('/')
                    })
                .catch(
                    error => console.log(error)
                )
        } catch (error) {

        }
    }
  return (
    <>
    <div> 
        <form onSubmit={handleSubmit}>
            <input placeholder='Enter number'  name='pnumber' type='text' value={pnumber} onChange={(e) => setPNumber(e.target.value)} required />
            <input placeholder='Enter name'  name='pname' type='text' value={pname} onChange={(e) => setPName(e.target.value)} required />
            <input placeholder='Enter buyingprice'  name='buyingprice' type='number' value={buyingprice} onChange={(e) => setBuyingPrice(e.target.value)} required />
            <input placeholder='Enter bought'  name='bought' type='number' value={bought} onChange={(e) => setBought(e.target.value)} required />
            <input placeholder='Enter sellingprice'  name='sellingprice' type='number' value={sellingprice} onChange={(e) => setSellingPrice(e.target.value)} required />
            <input placeholder='Enter sold'  name='sold' type='number' value={sold} onChange={(e) => setSold(e.target.value)} required />
            <input type="submit" value="Submit" />
            
        </form>
    </div>
    <button onClick={() => navigate('/')}>Go Back</button>
    </>
  )
}

export default AddData;

