import React from 'react'
import axios from 'axios'

const PayButton = (BusItem,seats,info ,client,Idcard) => {
    
    const handleCheckout =() =>{
       
        console.log("remainaing:", BusItem.seats - BusItem.info)
        const id = BusItem.id
        const remains = BusItem.seats - BusItem.info
        const client = BusItem.client
        const idCardNumber = BusItem.Idcard

      
        axios.post('http://localhost:4300/stripe/create-checkout-session',{
            BusItem,
            seats: BusItem.info,
            remains: remains,
            id:id,
            client: client,
            idCardNumber: idCardNumber,
        }).then((res)=>{
            if(res.data.url){
                console.log(res.data.url);
                window.location.href = res.data.url
            }
        }).catch((err)=> console.log(err.message))
    };
  return (
    <>
        <button onClick={()=> handleCheckout()}>Pay With Credit Card</button>
        </>
  )
}

export default PayButton


