import "./check.css";
import React, { useRef } from 'react'
import NavBar from '../../components/NavBar'
import {useReactToPrint} from 'react-to-print'
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import QRcode from 'qrcode.react'
import Footer from "../../components/Footer";
import {CloseCircleOutlined} from '@ant-design/icons'



export const CheckOutSuccess = () => {

const componentRef = useRef();

const location = useLocation()
const id = location.pathname.split("/")[2]


const {data} = useFetch(`https://travelobackend.herokuapp.com/order/find/${id}`)

console.log(data);


const QrcodeDisplay = ()=> {
  const qrCodeDestination = `${window.location.origin}/checkout-success/${id}`;
  
  return (
    <QRcode
     value={qrCodeDestination}
     size={100}
     includeMargin={true}
     />
  )
}


const handlePrint = useReactToPrint({
    content:() => componentRef.current,
    documentTitle:'Ticket',
    onAfterPrint:()=>alert('print success')
})

  return (
    <>
    <NavBar/>

   {data ? ( <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-0 gx-5 align-items-end">
            <div className="col-lg-6">
              <div
                className="text-start mx-auto mb-5 wow slideInLeft"
                data-wow-delay="0.1s"
              >
                <h1 className="mb-3">Thanks for Booking a Trip</h1>
                <h3>
                  You can now download your ticket
                </h3>
              </div>
            </div>
          </div>
    
          
          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                  <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s" 
                >
    
                </div>
               
    
                <div
                  className="col-12 text-center wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div  ref={componentRef}>
                  
  <div className="invoice-box  bg-white">
    <table cellPadding={0} cellSpacing={0}>
      <tbody>
        <tr className="top">
          <td colSpan={2}>
            <table>
              <tbody>
                <tr>
                  <td className="title">
                    <img
                      src="https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/273635443_2325461410928514_6995670856622425954_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=GjfEoT2XjowAX9VSLv9&_nc_ht=scontent-lhr8-1.xx&oh=00_AT_H0jzgw5rHqINpbIebl9sHuWB6CuAVj9vOfJfem7Dhhw&oe=635BE14D"
                      style={{ width: "30%", maxWidth: 100 }}
                    />
                  </td>
                  <td>
                    Date: {data.createdAt}
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
                  <td>
                    Customer name: <b>{data.CustomerName}</b>
                  </td>
                  <td>
                    Ticket ID: <b>{data.customerId}</b>

                  </td>
                </tr>
                <tr>
                  <td>
                   ID CARD NUMBER: <b>{data.IdCardNumber}</b>
                  </td>
                  <td>
                    DAY TO GO: <b>{data.BusDay}</b>

                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr className="heading">
          <td>Ticket Informations:</td>
          <td></td>
        </tr>
        <tr className="item">
          <td>Bus Matricule:</td>
          <td>
          <b>{data.BusMatricule}</b>
          </td>
        </tr>
        <tr className="item">
          <td>Bus Name:</td>
          <td>
           <b>{data.BusName}</b>
          </td>
        </tr>
        <tr className="item">
          <td>Time:</td>
          <td>
           <b>{data.BusTime}</b>
          </td>
        </tr>
        <tr className="item">
          <td>Number of seats:</td>
          <td>
            <b>{data.seatsTaken}</b>
          </td>
        </tr>
        <tr className="item">
          <td>From:</td>
          <td>
           <b>{data.BusSource}</b>
          </td>
        </tr>
        <tr className="item">
          <td>To:</td>
          <td>
          <b>{data.BusDestination}</b>
          </td>
        </tr>
      </tbody>
    </table>
    <br />
    <div>

    <h1 className="justify-center">
      Price: <b>{data.total} FCFA</b>
    </h1>
    <h1 className="qrleft">
      <QrcodeDisplay  />
    </h1>
    </div>
    
    
  </div>
<button className='btn btn-primary margin-top' onClick={handlePrint} >Download Your Ticket Now</button>
 

</div>


</div>
</div>
</div>
</div>
</div>
      </div>) : (
        <div className="container">
        <div className="row g-0 gx-5 align-items-end">
          <div className="col-lg-6">
            <div
              className="text-start mx-auto mb-5 wow slideInLeft "
              data-wow-delay="0.1s"
            >
              <h1 className="mb-3 color" >Ticket Not Available Or Has Expired</h1>
              <h3>
                You can not download your ticket
              </h3>
            </div>
            
          </div>
        </div>

        <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                  <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s" 
                >
    
                </div>
               
    
                <div
                  className="col-12 text-center wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div>
                  <CloseCircleOutlined
                  style={{color:'red',fontSize:350}} 
                  />
                  </div>

</div>
</div>
</div>
</div>
</div>
      )}
    <Footer />
    </>
  )
}
