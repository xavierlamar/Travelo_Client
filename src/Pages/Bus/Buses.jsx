
import "./bus.css";
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation} from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Footer from "../../components/Footer";
import PayButton from "../../components/PayButton";
import QRcode from 'qrcode.react'
import NavBar from "../../components/NavBar";
import Image from 'react-bootstrap/Image'



const Buses = () => {


    const location = useLocation()
    const id = location.pathname.split("/")[2]
    const [info, setInfo] = useState({});
    const [user, setIUser] = useState({});
    const [idCard, setIdCard] = useState({});
    const [userInfo,setUserInfo] = useState("");

    
    const {data} = useFetch(`https://travelobackend.herokuapp.com/bus/find/${id}`)

    useEffect(() => {
      const user = JSON.parse(localStorage.getItem('userInfo'));
      if (user) {
       setUserInfo(user);
      }
    }, [])

    if(data){
      localStorage.setItem("BusItem", JSON.stringify([data]))
    }

    const BusItem = JSON.parse(localStorage.getItem("BusItem"))



    const QrcodeDisplay = ()=> {
      const qrCodeDestination = `${window.location.origin}/find/bus/${id}`;
      
      return (
        <QRcode
        className="img-fluid"
         value={qrCodeDestination}
         size={350}
         includeMargin={true}
         />
      )
    }

    const handleChange = (e) => {
      setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
    const handleChange1 = (e) => {
      setIUser((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
    const handleChange2 = (e) => {
      setIdCard((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    console.log(info.seats);
    console.log(data.seats);

  return (
    <>
    <NavBar/>
    <div className="app">

      <div className="app">
        <h2>Matricule : <span style={{color:"red"}}> {data.matricule}</span></h2>
        <div className="details " key={data._id}>
                <div className="box">
                <Image src={data.img} rounded className="img-fluid"/>
                  
                  <h2>Bus Name: {data.name}</h2>
                  <h5 className="hotelPriceHighlight" >Price Per Seat {data.priceSeat} FCFA</h5>
               
                <FontAwesomeIcon icon={faLocationDot} />
                <h2><span c> { data.source}</span></h2> <span> Going To  </span> <h2><span>{data.Destination}</span></h2>

              
              </div>
              {data.seats > 0  ? (
              <div className="big-img">
             
              <h4>This bus has <span style={{color:"red"}}>{data.seats} </span>Seats available</h4>

              <p>Book a Seat at {data.priceSeat * info.seats} FCFA</p>
                <p>{data.desc}</p>      

                {data.seats< info.seats ? (
                <div className="hotelDetailsPrice">
                  <input 
              onChange={handleChange} 
              id="seats" 
              placeholder="Number of seat" 
              required/>
              <p>Choose number of seats less or equal to {data.seats}</p>
                </div>):(

                <div className="hotelDetailsPrice">
                <input 
                onChange={handleChange} 
                id="seats" 
                placeholder="Number of seat" 
                required
                />
                <input 
                id="name"
                onChange={handleChange1}  
                placeholder="Enter Your Full Name" 
                required
                />
                <input 
                id="matricule"
                onChange={handleChange2} 
                placeholder="ID Card Matricule"
                maxLength={9}
                minLength={9}
                required
                />
                <PayButton 
                BusItem = {BusItem} 
                id={id} 
                seats={data.seats} 
                info={info.seats} 
                client={user.name} 
                Idcard={idCard.matricule}
                />
                <button className='mtn'>Pay With MTN Mobile money</button>
                <button className='orange'>Pay With Orange Money</button>
                <QrcodeDisplay  BusItem = {BusItem}/>
                  </div>
                )}
              </div>
              ) :(
                <h3>This bus has no more seats available for today</h3>
              )}
            </div>
      </div>
           

          
      </div>
      <Footer/>
    </>
  )
}

export default Buses