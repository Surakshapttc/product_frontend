import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import TurnOverListIteam from './TurnoverListIteam';

const TurnOverReport = () => {
const navigate = useNavigate();
const [turnover, setTurnOver] = useState([]);


var amountIn = 0;
var totalprofit = 0;
var profit = 0;
var totalPurchaseAmount = 0;
var totalSellingAmount = 0;
var AnnualTurnoverAmount = 0; 
var AnnualProfitAmount = 0; 


useEffect(() => {
    axios
        .get("http://localhost:3001/turnover")
        .then(
            (response) => {
            // console.log(response.data);
            setTurnOver(response.data);
            }
        )
        .catch(
            (error) => {
                console.log(error)
            }
        )
}, [turnover]);
  return (
  <>
    <center><h1>TurnOver ABCD Pvt.ltd</h1>
  </center>
          <div className='header'>
            <div>pnumber</div>
            <div>pname</div>
            <div>buyingprice</div>
            <div>bought</div>
            <div>amountout</div>
            <div>sellingprice</div>
            <div>sold</div>
            <div>amountIn</div>
            <div>stock</div>
            <div>unitprofit</div>
            <div>profit</div>
           
        </div>

  {turnover.map(
  (turnover) => {
    {totalPurchaseAmount = totalPurchaseAmount + parseInt(turnover.amountout)};
    {totalSellingAmount = totalSellingAmount + parseInt(turnover.amountIn)};
    {amountIn = turnover.sellingprice * turnover.sold}

{/* {tax = totalSellingAmount * 0.3} */}


    return(  
    <TurnOverListIteam 
    key={turnover.id}
    id={turnover.id}
    pnumber={turnover.pnumber}
    pname={turnover.pname}
    buyingprice={turnover.buyingprice}
    bought={turnover.bought}
    amountout={turnover.amountout}
    sellingprice={turnover.sellingprice}
    sold={turnover.sold}
    amountIn={amountIn}
    stock={turnover.stock}
    unitprofit={turnover.unitprofit}
    profit={turnover.profit}
  
   />
  )
     })
    }
                    <div > totalPurchaseAmount:{totalPurchaseAmount}</div>
                     <div >totalsellingprice:{ totalSellingAmount}</div> 
                     <div > Total amountIn:{amountIn}</div>
                    <div > Profit:{profit}</div>
                    {/* <div className='s2'> Total TurnOver:{turnover}</div>  */}

   <button onClick={()=>{navigate("/AddData")}}>AddData</button>
   <button onClick={()=>{navigate("/")}}>GoBack</button>

    </>
  )
}
export default TurnOverReport;
