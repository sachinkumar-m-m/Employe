import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Home() {

    const [employeeList, setEmployeeList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5200/employees/readAll').then((allEmployees) => {
            setEmployeeList(allEmployees.data)
        })
    },[]);

    const deleteHandler = (id) => {
        if(window.confirm('Are you sure, You want to delete Employee ?')) {
            axios.delete(`http://localhost:5200/employees/delete/${id}`).then(
                toast.success("Delete Successfully"),
                window.location.reload(),
            ).catch(err => toast.error(err.message))
        }
    }
    return (
        <div className="container">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-success">All Employees List</h3>
            </div>
            <div className="row">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Date of Birth</th>
                            <th scope="col">Mobile</th>
                            <th scope="col">Job type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employeeList.map((employees, key) => {
                                return(
                                    <tr key={key}>
                                        <td>{employees.name}</td>
                                        <td>{employees.email}</td>
                                        <td>{employees.date}</td>
                                        <td>{employees.mobile}</td>
                                        <td>{employees.jobtype}</td>
                                        <td>
                                            <Link to={`/update/${employees._id}`} className='btn btn-secondary'>Update</Link>
                                        </td>
                                        <td><button className="btn btn-danger" onClick={() => {deleteHandler(employees._id)}}>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home
