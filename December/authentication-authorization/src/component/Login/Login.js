import { useState } from 'react';
import './Login.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Login=()=>{

   const [getList,setList] = useState({
      email:'',
      password:''
   });

   const navigate = useNavigate();


   const onChangeHandler=(event)=>{
      setList({
         ...getList,[event.target.name]:event.target.value
      })
   }

   const onSubmitHandler=(event)=>{
         event.preventDefault();
         axios.post('http://localhost:8080/login',getList).then((response)=>{
            console.log(response.data.message);
            sessionStorage.setItem('token',response.data.message);
            navigate('/table');
         }).catch((error)=>{
         })
   }

    return (<div className="container">
    <div className="row">
       <div className="col-4">

       </div>
       <div className="col-4 text-center">
          <form>
             <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control" name="email" onChange={onChangeHandler} />
             </div>
             <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" name="password" onChange={onChangeHandler} />
             </div>

             <button type="submit" onClick={onSubmitHandler} class="btn btn-primary">Submit</button>
          </form>
       </div>
       <div className="col-4">

       </div>
    </div>
 </div>)
}
export default Login;