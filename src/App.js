import './App.css';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import UserInfo from './pages/UserInfo';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginPage />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/user' element={<UserInfo />}/>


      </Routes>
        
        
    </div>
  );
}

export default App;
