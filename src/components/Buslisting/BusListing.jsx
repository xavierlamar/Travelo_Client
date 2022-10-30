import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import './BusListing.css'

const BusListing = () => {

    const {data} = useFetch("https://travelobackend.herokuapp.com/bus/limit")

    return (
      <>
      <div className="container-xxl bg-white py-5">
        <div className="container">
          <div className="row g-0 gx-5 align-items-end">
            <div className="col-lg-6">
              <div
                className="text-start mx-auto mb-5 wow slideInLeft"
                data-wow-delay="0.1s"
              >
                <h1 className="mb-3">Buses Available</h1>
                <p>
                  This are the Buses Available in the platform. Choose a Bus and book for a trip.
                </p>
              </div>
            </div>
          
          </div>
    
          
          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                {data.map((item)=>(
                  <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"  key={item._id}
                >
                  <div className="property-item rounded overflow-hidden">
                    <div className="position-relative overflow-hidden">
                      <div className='img'>                        
                      <Link  to={`/bus/${item._id}`}>
                      <img
                          className="img-fluid"
                          src={item.img}
                          alt=""
                        />
                          <button className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3" >
                            Reserve Now
                            </button>
                          </Link>
                      </div>
                      <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                        ON <b>{item.day}</b> AT <b>{item.time}</b>
                      </div>
                    </div>
                    <div className="p-4 pb-0">
                      <h5 className="text-primary mb-3">{item.priceSeat} FCFA</h5>
                      <Link  to={`/bus/${item._id}`} className="d-block h5 mb-2">
                      {item.name}
                      </Link>
                      <p>
                        <i className="fa fa-map-marker-alt text-primary me-2" />
                        seats Available : {item.seats}   
                      </p>
                      <p>
                        <i className="fa fa-map-marker-alt text-primary me-2" />
                        Matricule: {item.matricule} 
                      </p>
                    </div>
                    <div className="d-flex border-top">
                      <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-ruler-combined text-primary me-2" />
                        FROM : {  item.source}
                      </small>
                      <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-ruler-combined text-primary me-2" />
                       TO : {  item.Destination}
                      </small>
            
                    </div>
                  </div>
                </div>
                ))}
    
                <div
                  className="col-12 text-center wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <Link to='/Buses'  className="btn btn-primary py-3 px-5">
                    Browse More Buses
                  </Link>
                </div>
              </div>
            </div>
                    </div>
                    </div>
      </div> 
      </>
         
      )
}

export default BusListing