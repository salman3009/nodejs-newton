import './Table.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Table=()=>{

  const [getList,setList]=useState([])

  useEffect(()=>{
   axios.get('http://localhost:8080/student/list',{
    headers:{
      'authorization':sessionStorage.getItem('token')
    }
   }).then((response)=>{
    setList([...response.data.status]);
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
      <th scope="col">student Name</th>
      <th scope="col">score</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
   
      {getList.map((obj,index)=>{
         return(
          <tr>
          <th scope="row">{index}</th>
          <td>{obj.fullName}</td>
          <td>{obj.score}</td>
          <td><button type="button" class="btn btn-primary">Edit</button></td>
          <td><button type="button" class="btn btn-primary">Delete</button></td>
        </tr>
         )
      })}
    
  </tbody>
</table>
         </div>
      </div>
   </div>)
}
export default Table;