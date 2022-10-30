import React from 'react'
import NavBar from '../components/NavBar'
import Carousel from 'react-bootstrap/Carousel';
import Teams from '../components/Teams';
import Footer from '../components/Footer';
import { images } from '../constant';
import BusListing from '../components/Buslisting/BusListing'
function Home() {
  return (
    <>
    <NavBar />
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
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control border-0 py-3"
                  placeholder="Search Keyword"
                />
              </div>
              <div className="col-md-4">
                <select className="form-select border-0 py-3">
                  <option>Property Type</option>
                  <option>Property Type 1</option>
                  <option>Property Type 2</option>
                  <option>Property Type 3</option>
                </select>
              </div>
              <div className="col-md-4">
                <select className="form-select border-0 py-3">
                  <option>Location</option>
                  <option> Location 1</option>
                  <option>Location 2</option>
                  <option>Location 3</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <button className="btn btn-dark border-0 w-100 py-3">Search</button>
          </div>
        </div>
      </div>
    </div>
    {/* Search End */}
   
    {/* Bus listing start */}
    <BusListing />
    {/* Bus listing end */}


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

export default Home