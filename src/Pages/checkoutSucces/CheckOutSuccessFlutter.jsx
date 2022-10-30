import "./check.css";
import React, { useRef } from 'react'
import NavBar from '../../components/NavBar'
import {useReactToPrint} from 'react-to-print'
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import QRcode from 'qrcode.react'
import Footer from "../../components/Footer";
import {CloseCircleOutlined} from '@ant-design/icons'

const CheckOutSuccessFlutter = () => {
    
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


// const handlePrint = useReactToPrint({
//     content:() => componentRef.current,
//     documentTitle:'Ticket',
//     onAfterPrint:()=>alert('print success')
// })

const downloadPdf = () => {
  var currentHref = window.location.href;
  window.history.pushState(null,null,'/app/somepdf.pdf');
  setTimeout(()=> window.location.replace(currentHref),1000);
}

  return (
    <div className="bg-white">

    </div>
  )
}

export default CheckOutSuccessFlutter