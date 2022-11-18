import { useEffect, useRef, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [getList,setList]=useState([]);
  const indexRef = useRef(null);
  const fullNameRef = useRef(null);
  const ageRef = useRef(null);
  const locationRef = useRef(null);
  const [getError,setError]=useState('');

  useEffect(()=>{
   
    axios.get("http://localhost:8080/setCookie").then((response)=>{
      const cookieData = document.cookie;
       console.log(cookieData)
      console.log(response);
    });
    initialDataList();
  },[]);

  const initialDataList=()=>{
    indexRef.current.value = '';
    axios.get("http://localhost:8080").then((response)=>{
       console.log(response);
       setList([...response.data.list])
    }).catch((error)=>{
       console.log(error);
    })
  }

  const getIndexValue=()=>{
     let index = Number(indexRef.current.value);
     axios.get(`http://localhost:8080/${index}`).then((response)=>{
          console.log(response);
          let result =[response.data.result];
          setList([...result]);
          setError('');
     }).catch((error)=>{
      if(error.response.data){
        setError(error.response.data.message);
      }
     })
  }

  const getFilterValues=()=>{
    axios.get(`http://localhost:8080?fullName=${fullNameRef.current.value}&age=${ageRef.current.value}&location=${locationRef.current.value}`).then((response)=>{
       console.log(response);
       setList([...response.data.list])
    }).catch((error)=>{
       console.log(error);
    })
  }

  return (
    <div className="App">
       <table>
        <tr>
          <td>Index:<input ref={indexRef} type="text" name="id"/></td>
        </tr>
        <tr>
          <td><button onClick={getIndexValue}>Submit</button>
          <button onClick={initialDataList}>Reset</button>
          </td>
 
        </tr>
        <tr>
          <td>FullName:<input ref={fullNameRef} type="text"/></td>
          <td>Age:<input ref={ageRef} type="text"/></td>
          <td>Location:<input ref={locationRef} type="text"/></td>
        </tr>
        <tr>
          <td></td>
          <td><button onClick={getFilterValues}>Filter</button>
          </td>
          <td></td>
        </tr>
       </table>
       {getError}
       {getError=='' && <table>
         <tr>
          <td>FullName</td>
          <td>Age</td>
          <td>Location</td>
         </tr>
         {getList.map((obj,index)=>{
             return (<tr key={index}>
              <td>{obj.fullName}</td>
              <td>{obj.age}</td>
              <td>{obj.location}</td>
             </tr>)
         })}
       </table>}
       
    </div>
  );
}

export default App;
