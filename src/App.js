import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import LandingPage from './Component/LandingPage';
import MerchantLogin from './Component/MerchantLogin';
import UserLogin from './Component/UserLogin';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/merchant" element={<MerchantLogin/>}/>
      <Route path="/user" element={<UserLogin/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
