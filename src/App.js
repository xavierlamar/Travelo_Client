import './App.css';
import './bootstrap.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.scss'
import { createContext ,useState, useEffect} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Page404 from './Pages/Page404';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import MyAccount from './Pages/MyAccount';
import Buses from './Pages/Bus/Buses';
import {CheckOutSuccess} from './Pages/checkoutSucces/CheckOutSuccess'
import TicketSearch from './Pages/checkoutSucces/searchPage/TicketSearch';
import BusesPage from './Pages/BusesPage/BusesPage';
// import Chatt from './components/chat/Chat';
import Chat from './Pages/Chat/Chat';
import CheckOutSuccessFlutter from './Pages/checkoutSucces/CheckOutSuccessFlutter';


function App() {
  return (
 <div className='App'>
   <BrowserRouter>
  <Routes>
  <Route path="/" element={<BusesPage/>} />
      <Route path="/Home" element={<BusesPage/>} />
      <Route path="/checkout-success/:id" element={<CheckOutSuccess/>} />
      <Route path="/checkout-success-page/:id" element={<CheckOutSuccessFlutter/>} />
      <Route path="/ticketsearch" element={<TicketSearch/>} />
      <Route path="/Buses" element={<BusesPage/>} />
      {/* <Route path="/checkout" element={<Check/>} /> */}
      <Route path="/bus/:id" element={<Buses/>}/>
      {/* <Route path="/chatt" element={<Chatt/>}/> */}
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/register" element={<SignUp/>}/>
      <Route path="/MyAccount" element={<MyAccount/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/chat" element={<Chat/>}/>
      <Route path="*" element={<Page404 />} />
    </Routes>
    {/* <App /> */}
  </BrowserRouter>

 </div>
 
  );
}

export default App;
