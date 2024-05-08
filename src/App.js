
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Component/LandingPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import LandingPage from './Component/LandingPage.jsx';
import MerchantLogin from './Component/MerchantLogin.jsx';
import UserLogin from './Component/UserLogin.jsx';
import MerchantSignup from './Component/MerchantSignup.jsx';
import MerchantHomePage from './Component/MerchantHomePage.jsx';
import UpdateMerchant from './Component/UpdateMerchant.jsx';
import MerchantNavbar from './Component/MerchantNavbar.jsx';
import Error from './Component/Error.jsx';
import ProductView from './Component/ProductView.jsx';
import AddProducts from './Component/AddProducts.jsx';
import Protect from './Component/Protect.jsx';
import UserSignup from './Component/UserSignup.jsx';
import UserHomePage from './Component/UserHomePage.jsx';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/*" element={<Error/>}/>
      <Route path="/merchant" element={<MerchantLogin/>}/>
      <Route path="/user" element={<UserLogin/>}/>
      <Route path="/merchantsignup" element={<MerchantSignup/>}/>
      <Route path="/merchanthomepage" element={<Protect Child={MerchantHomePage}/>}/>
      <Route path="/updatemerchant" element={<UpdateMerchant/>}/>
      <Route path="/merchantnavbar" element={<MerchantNavbar/>}/>
      <Route path="/productview" element={<ProductView/>}/>
      <Route path="/addproducts" element={<AddProducts/>}/>
      <Route path="/usersignup" element={<UserSignup/>}/>
      <Route path="/userhomepage" element={<UserHomePage/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
