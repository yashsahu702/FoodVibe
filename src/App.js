import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Error  from "./pages/Error";
import  Success  from './pages/Success';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/success' element={<ProtectedRoute element={<Success/>}/>}></Route>
        <Route path='/*' element={<Error/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
