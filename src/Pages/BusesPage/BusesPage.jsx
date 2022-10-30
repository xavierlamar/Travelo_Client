import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
import useFetch from '../../hooks/useFetch'

const BusesPage = () => {
  const [query,setQuery] = useState("")
  const {data} = useFetch("https://travelobackend.herokuapp.com/bus/true")
  console.log(query);


    return (
      <>
      <NavBar/>
          {/* Header Start */}
    <div className="container-fluid header bg-grey p-5">
      <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
        <div className="col-md-6 p-5 mt-lg-5">
          <h1 className="display-5 animated fadeIn mb-4">
            Find A <span className="text-primary">Perfect Bus</span> For Your Journey
          </h1>
          {/* <p className="animated fadeIn mb-4 pb-2">
            Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.
            Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
          </p> */}
          <a href="" className="btn btn-primary py-3 px-5 me-3 animated fadeIn">
            Get Started
          </a>
        </div>
        <div className="col-md-6  p-5 mt-lg-5">

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
              <div className="col-md-4">
                {/* <input
                  type="text"
                  className="form-control border-0 py-3"
                  placeholder="Search Keyword"
                /> */}
              </div>
              <div className="col-md-4">
                {/* <select className="form-select border-0 py-3">
                  <option>Property Type</option>
                  <option>Property Type 1</option>
                  <option>Property Type 2</option>
                  <option>Property Type 3</option>
                </select> */}
              </div>
              <div className="col-md-4">
                {/* <select className="form-select border-0 py-3">
                  <option>Location</option>
                  <option> Location 1</option>
                  <option>Location 2</option>
                  <option>Location 3</option>
                </select> */}
              </div>
            </div>
          </div>
          <div className="col-md-2">
            {/* <button className="btn btn-dark border-0 w-100 py-3">Search</button> */}
          </div>
        </div>
      </div>
    </div>
    {/* Search End */}
      <div className="container-xxl py-5">
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
              <div className="col-md-4">
              <label><b>SEARCH</b></label>
                <input
                  type="text"
                  className="form-control border-0 py-3"
                  placeholder="Search Keyword"
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              
             <div className="col-md-2">
                <label><b>SOURCE</b></label>
              <select className="form-control border-0" onChange={(e) => setQuery(e.target.value)}>
                <option ></option>
                <option >YAOUNDE</option>
                  <option >DOUALA</option>
                  <option >BAMENDA</option>
                  <option >BERTOUA</option>
                  <option >MAROUA</option>
                  <option >BUEA</option>
                  <option >DOUALA</option>
                  <option >NGAOUNDÉRÉ</option>
                  <option >BAFOUSSAM</option>
                  <option >EBOLOWA</option>
                </select>
              </div>

               <div className="col-md-2">
                <label><b>DESTINATION</b></label>
              <select className="form-control border-0 "onChange={(e) => setQuery(e.target.value)}>
                <option ></option>
                <option >YAOUNDE</option>
                  <option >DOUALA</option>
                  <option >BAMENDA</option>
                  <option >BERTOUA</option>
                  <option >MAROUA</option>
                  <option >BUEA</option>
                  <option >DOUALA</option>
                  <option >NGAOUNDÉRÉ</option>
                  <option >BAFOUSSAM</option>
                  <option >EBOLOWA</option>
                </select>
              </div>
              
              <div className="col-md-2">
                <label><b>DAY</b></label>
              <select className="form-control border-0 w-100 " onChange={(e) => setQuery(e.target.value)}>
                  <option ></option>
                  <option >MONDAY</option>
                  <option >TUESDAY</option>
                  <option >WEDNESDAY</option>
                  <option >THURSDAY</option>
                  <option >FRIDAY</option>
                  <option >SATURDAY</option>
                  <option >SUNDAY</option>
                </select>
              </div>
              
            </div>
          </div>
          {/* <div className="col-md-2">
            <button className="btn btn-dark border-0 w-100 py-3">Search</button>
          </div> */}
        </div>
      </div>
    </div>
    {/* Search End */}
    
          
          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                {data.filter((item)=>item.day.includes(query) ||
                item.source.includes(query) ||item.Destination.includes(query) ||item.name.includes(query)).map((item)=>(
                  <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"  key={item._id}
                >
                  <div className="property-item rounded overflow-hidden">
                    <div className="position-relative overflow-hidden">
                      <div>                        
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
                        FROM : <b>{  item.source}</b>
                      </small>
                      <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-ruler-combined text-primary me-2" />
                       TO :<b>{item.Destination}</b> 
                      </small>
                    </div>
                  </div>
                </div>
                ))}
    
              
              </div>
            </div>
                    </div>
                    </div>
      </div> 
      <Footer/>
      </>
         
      )
}

export default BusesPage