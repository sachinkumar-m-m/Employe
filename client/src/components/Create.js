import React,{useState} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

function Create( ) {
    
    const [employee, setEmployee] = useState({
        name:'',
        email:'',
        date:'',
        mobile:'',
        jobtype:'',
        location:'',
        photo:''
        
    })

    const onChange = (e) => {
        const {name,value} = e.target
        setEmployee({...employee,[name]:value})
        console.log();
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5200/employees/create', employee)
        .then(toast.success('Employee created successfully'),
        window.location.href = '/'
        )
    };
  
    

    // const onFormSubmit = (e) => {
    //     e.preventDefault();

    //     const formData = new FormData();
    //     formData.append.save('photo', file);
    //     const config = {
    //         headers: {
    //             'content-type':'multipart/form-data',
    //         },
    //     };
    //     const url = 'http://localhost:5200/employees/upload'
    //     axios.post('http://localhost:5200/employees/upload',employee,formData,config).then((res) => {
            
    //     }).catch((err) => {
    //         console.log('err', err);
    //     });
    // };
    // const onInputChange = (e) => {
    //     e.preventDefault();

    //     setFile(e.target.file[0])
    // };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-successs">Create</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <form action="" autoComplete="off" onSubmit={(e) => onSubmitHandler(e)}  >
                        <div className="form-group mt-2">
                            <label htmlFor="">Name</label>
                            <input type="text" id="name" name="name" value={employee.name} onChange={(e) => {onChange(e)}} required  className="form-control" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="">Email</label>
                            <input type="email" id="email" name="email" value={employee.email} onChange={(e) => {onChange(e)}} required  className="form-control" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="">Date of Birth</label>
                            <input type="date" id="date" name="date" value={employee.date} onChange={(e) => {onChange(e)}}  required  className="form-control" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="">Mobile</label>
                            <input type="number" id="mobile" name="mobile" value={employee.mobile} onChange={(e) => {onChange(e)}} required  className="form-control" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="">Job Type</label>
                            <select name="jobtype" id="jobtype" value={employee.jobtype} onChange={(e) => {onChange(e)}} className="form-control">
                                <option value="">Choose Job Type</option>
                                <option value="FullTime">Full-Time</option>
                                <option value="PartTime">Part-Time</option>
                                <option value="Intern">Intern</option>
                            </select>
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor=""> pref Location</label>
                            <select name="location" id="location" value={employee.location} onChange={(e) => {onChange(e)}} className="form-control">
                                <option value="">Choose Pref.location</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Bengaluru">Bengaluru</option>
                                <option value="Pune">Pune</option>
                            </select>
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="">Profile.pic</label>
                            <input type="file" id="file" name="photo" value={employee.photo} onChange={(e) => {onChange(e)}} required  className="form-control" />
                        </div>
                        <div className="form-group mt-2">
                            <input type="submit" value={`Create`} className="btn btn-success" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Create
