import React,{useState} from 'react';
import axios from 'axios';

const Image = () => {
    const [file, setFile] = useState(null);


    const onFormSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append.save('photo', file);
        const config = {
            headers: {
                'content-type':'multipart/form-data',
            },
        };
        const url = 'http://localhost:5200/employees/upload'
        axios.post(url,formData,config).then((res) => {
            
        }).catch((err) => {
            console.log('err', err);
        });
    };

    const onInputChange = (e) => {
        setFile(e.target.file[0])
    }
    return(
        
            <form  action="/upload" method="post" autocomplete="off" enctype="multipart/form-data" onSubmit={onFormSubmit} >
                <div className="form-group mt-2">

                <label htmlFor="">Profile Pic</label>
                <input type="file" id="file" name="photo" onChange={onInputChange}  className="form-control" />
                
                </div>
            </form>
       
    )
}

export default Image;