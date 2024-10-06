import logo from './logo.svg';
import './App.css';
import StartPage from './StartPage';
import LoginPage from './LoginPage';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Leaderboard from './Leaderboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} /> 
        <Route path="/login" element={<LoginPage />} />  
        <Route path="/home" element={<HomePage user="Abi" />} />
        <Route path="/home/leaderboard" element={<Leaderboard currentUser="Abi" />} />
        <Route path="/home/daily-challenge" element={<HomePage user="Abi" />} />
        <Route path="/home/freestyle" element={<HomePage user="Abi" />} />
        <Route path="/home/aslingo" element={<HomePage user="Abi" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
