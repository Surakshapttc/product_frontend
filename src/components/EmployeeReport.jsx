import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import List from './List';

const Employee = () => {
    const navigate = useNavigate();
    const [employee, setEmployee] = useState([]);

    var mtotalsalary = 0;
    var ytotalsalary = 0;
    var totalEmployees = 0;
    var tax = 0;
    var insurance = 0;
    var hra = 0;

    useEffect(() => {
        axios
            .get("http://localhost:3001/employee")
            .then(
                (response) => {
                    // console.log(response.data);
                    setEmployee(response.data);
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )

    }, [employee]);


    return (
        <>

            <center><h1>Report of Anual Employee Expenses of ABCD Pvt.ltd</h1>

            </center>
            <div className='header'>
                <div>id</div>
                <div>Reg No</div>
                <div>name</div>
                <div>salary</div>
                <div>yearly-salary</div>
                <div>tax</div>
                <div>insurance</div>

                <div>hra</div>

            </div>


            {employee.map(
                (employee) => {
                    { mtotalsalary = mtotalsalary + employee.employee_salary };
                    { ytotalsalary = ytotalsalary + employee.employee_salary * 12 };
                    { tax = ytotalsalary * 0.2 };
                    { insurance = ytotalsalary * 0.5 };
                    { hra = ytotalsalary * 0.3 };
                    totalEmployees++;

                    return (
                        <List
                            key={employee.id}
                            id={employee.id}
                            regno={employee.regno}
                            name={employee.employee_name}
                            salary={employee.employee_salary}

                        />
                    )
                }

            )
            }
            <div className='student_output'>
                <div>Total number employee{totalEmployees}</div>
                <div>Total monthly salary{mtotalsalary}</div>
                <div>Total yearly salary{ytotalsalary}</div>

            </div>

            <button onClick={() => { navigate("/AddEmpData") }}>AddData</button>
            <button onClick={() => { navigate("/") }}>GoBack</button>
        </>
    )
}

export default Employee;
