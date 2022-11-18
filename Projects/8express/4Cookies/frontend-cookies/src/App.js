import {useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Cookies from 'js-cookie';

function App() {

  useEffect(()=>{

    axios.get('http://localhost:8000/getcookie').then((response)=>{
      const cookieData = document.cookie;
       console.log(Cookies.get('username'))
    })
  },[]);


  return (
    <div className="App">
     
    </div>
  );
}

export default App;
