import React from 'react';
import './employe.css'

const EmployeList = ({ emp }) => {

    return (
        <div className='container'>
            {
                emp.map(val => ( 
                        <div key={val.empid} className="card">
                            <h2>{val.empname}</h2>
                            <p>Email: {val.empemail}</p>
                            <p>Phone: {val.empphone}</p>
                            <p>Department: {val.empdepartment}</p>
                            <p>Designation: {val.empdeg}</p>
                            <p>Salary: ${val.empsalary}</p>
                            <p>country :- {val.empaddress.country}</p>
                            <p>State :- {val.empaddress.state}</p>
                            <p>City :- {val.empaddress.city}</p>
                            <p>Area :- {val.empaddress.area}</p>
                        </div>
                    

                ))
            }
        </div>

    )

}

export default EmployeList