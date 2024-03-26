import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const TurnOver = () => {
const navigate = useNavigate();
const [turnover, setTurnOver] = useState([]);

useEffect(() => {
    axios
        .get("http://localhost:3001/turnoverData")
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
   
   
   <button onClick={()=>{navigate("/About")}}>About</button>
   <button onClick={()=>{navigate("/contact")}}>Contact</button>
   <button onClick={()=>{navigate("/Product")}}>Product</button>
   <button onClick={()=>{navigate("/TurnOverReport")}}>TurnOverReport</button>
   <button onClick={()=>{navigate("/EmployeeReport")}}>EmployeeReport</button>
    </>
  )
}
export default TurnOver;
