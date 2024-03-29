import './Table.css';
import axios from 'axios';
import { useEffect } from 'react';

const Table=()=>{

  useEffect(()=>{
   axios.get('http://localhost:8080/student/list').then((response)=>{
    console.log(response.data);
   }).catch((error)=>{
       console.log(error);
   });
  },[]);
  
   return (<div className="container">
      <div className="row">
         <div className="col-12 text-center">
         <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Employee Name</th>
      <th scope="col">salary</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>akash</td>
      <td>30000</td>
      <td><button type="button" class="btn btn-primary">Edit</button></td>
      <td><button type="button" class="btn btn-primary">Delete</button></td>
    </tr>
  </tbody>
</table>
         </div>
      </div>
   </div>)
}
export default Table;