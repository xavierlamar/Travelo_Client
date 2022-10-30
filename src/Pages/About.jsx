import React from 'react'
import Footer from '../components/Footer'
import Teams from '../components/Teams'
import NavBar from '../components/NavBar'
import { images } from '../constant'
function About() {
  return (
<>
<NavBar />

    {/* Header Start */}
    <div className="container-fluid header bg-grey p-5">
      <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
        <div className="col-md-6 p-5 mt-lg-5">
          <h1 className="display-5 animated fadeIn mb-4 py-3 px-5">
            ABOUT US
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
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control border-0 py-3"
                  placeholder="Search Keyword"
                />
              </div>
              <div className="col-md-4">
                <select className="form-select border-0 py-3">
                  <option selected="">Property Type</option>
                  <option value={1}>Property Type 1</option>
                  <option value={2}>Property Type 2</option>
                  <option value={3}>Property Type 3</option>
                </select>
              </div>
              <div className="col-md-4">
                <select className="form-select border-0 py-3">
                  <option selected="">Location</option>
                  <option value={1}>Location 1</option>
                  <option value={2}>Location 2</option>
                  <option value={3}>Location 3</option>
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
    {/* About Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="about-img position-relative overflow-hidden p-5 pe-0">
              <img className="img-fluid w-100" src={images.about} />
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <h1 className="mb-4">#1 Place To Find The Perfect Property</h1>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>
            <p>
              <i className="fa fa-check text-primary me-3" />
              Tempor erat elitr rebum at clita
            </p>
            <p>
              <i className="fa fa-check text-primary me-3" />
              Aliqu diam amet diam et eos
            </p>
            <p>
              <i className="fa fa-check text-primary me-3" />
              Clita duo justo magna dolore erat amet
            </p>
            <a className="btn btn-primary py-3 px-5 mt-3" href="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* About End */}
    {/* Call to Action Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="bg-light rounded p-3">
          <div
            className="bg-white rounded p-4"
            style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
          >
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                <img
                  className="img-fluid rounded w-100"
                  src={images.callToAction}
                  alt=""
                />
              </div>
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <div className="mb-4">
                  <h1 className="mb-3">Contact With Our Certified Agent</h1>
                  <p>
                    Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem
                    kasd vero ipsum sit sit diam justo sed vero dolor duo.
                  </p>
                </div>
                <a href="" className="btn btn-primary py-3 px-4 me-2">
                  <i className="fa fa-phone-alt me-2" />
                  Make A Call
                </a>
                <a href="" className="btn btn-dark py-3 px-4">
                  <i className="fa fa-calendar-alt me-2" />
                  Get Appoinment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Call to Action End */}
    {/* Team Start */}
   <Teams />
    {/* Team End */}
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

export default About