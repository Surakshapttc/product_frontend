import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddEmpData = () => {
    const navigate = useNavigate();
    const [regNo, seRegNo] = useState("")
    const [name, setName] = useState("")
    const [salary, setSalary] =useState("")
   

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            axios
                .post("http://localhost:3001/AddEmpData", {regNo,name,salary })
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
            <input placeholder='Enter Employee id'  name='regno' type='text' value={regNo} onChange={(e) => seRegNo(e.target.value)} required />
            <input placeholder='Enter Employee name'  name='name' type='text' value={name} onChange={(e) => setName(e.target.value)} required />
            <input placeholder='Enter Employee salary'  name='salary' type='number' value={salary} onChange={(e) => setSalary(e.target.value)} required />
             <input type="submit" value="Submit" />
        </form>
    </div>
    <button onClick={() => navigate('/')}>Go Back</button>
    </>
  )
}

export default AddEmpData;
