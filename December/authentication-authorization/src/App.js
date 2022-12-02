import './App.css';
import Header from './component/Header/Header';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import Table from './component/Table/Table';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="" element={<Register/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="table" element={<Table/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
