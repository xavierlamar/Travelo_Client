import './account.css'
import React, { useState,useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
function MyAccount() {

  const [notes,getNotes] = useState('')

  const [userInfo,setUserInfo] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userInfo'));
    if (user) {
     setUserInfo(user);
    }
  }, [])
 
  const {data} = useFetch(`http://localhost:4300/order/orders/${userInfo.idcard}`)

  localStorage.setItem("ordersInfo",JSON.stringify(data))

  const ordersItems = JSON.parse(localStorage.getItem('ordersInfo'));



  console.log(data.map((orders)=>orders._id));

console.log(userInfo.idcard);

  const navigate = useNavigate();
  
  return (
    <>
     <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n.card {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  max-width: 300px;\n  margin: auto;\n  text-align: center;\n  font-family: arial;\n}\n\n.title {\n  color: grey;\n  font-size: 18px;\n}\n\nbutton {\n  border: none;\n  outline: 0;\n  display: inline-block;\n  padding: 8px;\n  color: white;\n  background-color: #000;\n  text-align: center;\n  cursor: pointer;\n  width: 100%;\n  font-size: 18px;\n}\n\na {\n  text-decoration: none;\n  font-size: 22px;\n  color: black;\n}\n\nbutton:hover, a:hover {\n  opacity: 0.7;\n}\n"
    }}
  />
    <NavBar />
   
    {/* Header Start */}
    <div className="container-fluid header bg-grey p-5">
      <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
        <div className="col-md-6 p-5 mt-lg-5">
          <h1 className="display-5 animated fadeIn mb-4 py-3 px-5">
           My Account
          </h1>
          {/* <p className="animated fadeIn mb-4 pb-2">
            Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.
            Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
          </p> */}
          {/* <a href="" className="btn btn-primary py-3 px-5 me-3 animated fadeIn">
            Get Started
          </a> */}
        </div>
        <div className="col-md-6">
{/* <Carousel>
      <Carousel.Item>
              <img className="img-fluid" src={images.carousel1} alt="" />
      </Carousel.Item>
      <Carousel.Item>
              <img className="img-fluid" src={images.carousel2} alt="" />
      </Carousel.Item>
    </Carousel> */}
          </div>
        </div>
      </div>
    {/* Header End */}
        {/* Search Start */}
        <div
      className="container-fluid bg-primary mb-5 wow fadeIn"
      data-wow-delay="0.1s"
      style={{ padding: 35 }}
    >
      <div className="container">
        <div className="row g-2">
          <div className="col-md-10">
            <div className="row g-2">
              
              
            </div>
          </div>
          <div className="col-md-2">
            <button className="btn btn-dark border-0 w-100 py-3"></button>
          </div>
        </div>
      </div>
    </div>
    {/* Search End */}
{/* card start */}
<div className="container rounded bg-white mt-5 mb-5">
  <div className="row">
    <div className="col-md-3 border-right">
      <div className="d-flex flex-column align-items-center text-center p-3 py-5">
      <div className="card">
    <img src={userInfo.img} alt="John" style={{ width: "100%" }} />
    <h1>{userInfo.username}</h1>
  </div>
        <span className="text-black-50"></span>
        <span> </span>
        <button type="button" className="btn btn-primary" onClick={()=>{
          localStorage.removeItem("userInfo")
          navigate('/home')}}>
            Log Out
          </button>
      </div>
    </div>
    <div className="col-md-5 border-right">
      <div className="p-3 py-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="text-right">Profile Settings</h4>
        </div>
        <div className="row mt-2">
          <div className="col-md-6">
            <label className="labels">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="first name"
              value={userInfo.username}
            />
          </div>
          <div className="col-md-6">
            <label className="labels">Email</label>
            <input
              type="text"
              className="form-control"
              value={userInfo.email}
              placeholder="surname"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <label className="labels">Mobile Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="enter phone number"
              value={userInfo.phone}
            />
          </div>
          <div className="col-md-12">
            <label className="labels">Country</label>
            <input
              type="text"
              className="form-control"
              placeholder="enter address line 1"
              value={userInfo.country}
            />
          </div>
          <div className="col-md-12">
            <label className="labels">City</label>
            <input
              type="text"
              className="form-control"
              placeholder="enter address line 2"
              value={userInfo.city}
            />
          </div>
          <div className="col-md-12">
            <label className="labels">CNI</label>
            <input
              type="text"
              className="form-control"
              placeholder="enter address line 2"
              value={userInfo.idcard}
            />
          </div>
         
        </div>
        <div className="mt-5 text-center">
          <button className="btn btn-primary profile-button" type="button">
            Save Profile
          </button>
        </div>
      </div>
    </div>
 
  </div>
</div>
{/* cart end */}

<div style={{textAlign:"center",marginBottom:50}} className="listTitle"><h1>Latest Transactions</h1></div>


{ordersItems.map((dataInfo)=> (
  <div >
          <div className=' control'>
          <div className="bg-white">
    <table cellPadding={0} cellSpacing={0}>
      <tbody >
        <tr className="top">
          <td colSpan={2}>
            <table style={{padding:"50px"}}>
              <tbody >
                <tr >
                  <td className="title">
                    <img
                      src="https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/273635443_2325461410928514_6995670856622425954_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=GjfEoT2XjowAX9VSLv9&_nc_ht=scontent-lhr8-1.xx&oh=00_AT_H0jzgw5rHqINpbIebl9sHuWB6CuAVj9vOfJfem7Dhhw&oe=635BE14D"
                      style={{ width: "30%", maxWidth: 100 }}
                    />
                  </td>
                  <td>
                    Date: {dataInfo.createdAt}
                  </td>
                </tr>
                <tr></tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr className="information">
          <td colSpan={2}>
            <table>
              <tbody>
              <tr>
                  <td className=''>
                    Customer name: <b>{dataInfo.CustomerName}</b>
                  </td>
                  <tr>

                  {/* <td>
                    Ticket ID: <b>{dataInfo.customerId}</b>
                  </td> */}
                  </tr>
                </tr>
                <tr>
                  <td>
                   ID CARD NUMBER: <b>{dataInfo.IdCardNumber}</b>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <td>
        Ticket ID: <b>{dataInfo.customerId}</b>
        </td>
        <tr>
        DAY TO GO: <b>{dataInfo.BusDay}</b>
        </tr>
        <tr className="heading">
          <td>Ticket Informations:</td>
          <td></td>
        </tr>
        <tr className="item">
          <td>Bus Matricule:</td>
          <td>
          <b>{dataInfo.BusMatricule}</b>
          </td>
        </tr>
        <tr className="item">
          <td>Bus Name:</td>
          <td>
           <b>{dataInfo.BusName}</b>
          </td>
        </tr>
        <tr className="item">
          <td>Time:</td>
          <td>
           <b>{dataInfo.BusTime}</b>
          </td>
        </tr>
        <tr className="item">
          <td>Number of seats:</td>
          <td>
            <b>{dataInfo.seatsTaken}</b>
          </td>
        </tr>
        <tr className="item">
          <td>From:</td>
          <td>
           <b>{dataInfo.BusSource}</b>
          </td>
        </tr>
        <tr className="item">
          <td>To:</td>
          <td>
          <b>{dataInfo.BusDestination}</b>
          </td>
        </tr>
      </tbody>
    </table>
    <br />
    <div>

    <h1 className="justify-center">
      Price: <b>{dataInfo.total} FCFA</b>
    </h1>
    <button> <a style={{color: "#ffffff"}} href={`/checkout-success/${dataInfo.customerId}`}>See your ticket</a></button>
    <h1 className="qrleft">
    </h1>
    </div>
    
    
  </div>
          </div>
</div>
))}

       {/* Footer Start */}
      <Footer />
       {/* Footer End */}
       {/* Back to Top */}
       <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
         <i className="bi bi-arrow-up" />
       </a>
   
     {/* JavaScript Libraries */}
     {/* Template Javascript */}
   </>
  )
}

export default MyAccount