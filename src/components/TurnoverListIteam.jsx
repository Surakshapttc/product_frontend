import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const TurnOverListIteam = (props) => {
    const navigate = useNavigate();

    const  { pnumber,pname,buyingprice,bought,amountout,amountIn,sellingprice,sold,stock,unitprofit,profit}  = props;
    // const amountout = buyingprice *  bought;
    // const amountIn = sellingprice *  sold;
    // const stock = bought - sold;
    // const unitprofit = sellingprice - buyingprice;
    // const profit =(sellingprice  - buyingprice) * sold;


  const handleDelete = () => {
    const id= props.id;
    try {
      axios.post("http://localhost:3001/delete", {id})
        .then(response => {console.log(response) })
        .catch((err) => {console.log(err)})

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='turnoverData'>
    <div>{pnumber}</div>
      <div>{pname}</div>
      <div>{buyingprice}</div>
      <div>{bought}</div>
      <div>{amountout}</div>
      <div>{sellingprice}</div>
      <div>{sold}</div>
      <div>{amountIn}</div>
      <div>{stock}</div>
      <div>{unitprofit}</div>
      <div>{profit}</div>
     
     
      <button onClick={handleDelete}>Delete</button>
     <button onClick={() => {navigate(`/update/${props.id}`)}}>Update</button>
    </div>
  )
}

export default TurnOverListIteam;
