import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const List = (props) => {
  const navigate = useNavigate();

  const { id, regno, name, salary } = props
  const yearly_salary = salary * 12;
  const tax = yearly_salary * 0.2;
  const insurance = yearly_salary * 0.5;
  const hra = yearly_salary * 0.3;

  const handleDelete = () => {
    const id = props.id;
    try {
      axios.post("http://localhost:3001/delete", { id })
        .then(response => { console.log(response) })
        .catch((err) => { console.log(err) })

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='employeeData'>
      <div>{id}</div>
      <div>{regno}</div>
      <div>{name}</div>
      <div>{salary}</div>
      <div>{yearly_salary}</div>
      <div>{tax}</div>
      <div>{insurance}</div>
      <div>{hra}</div>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={() => { navigate(`/EmpUpdate/${id}`) }}>Update</button>
    </div>
  )
}

export default List

