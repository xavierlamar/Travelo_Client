import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import { images } from '../constant'
function Contact() {
  return (
    <>

<NavBar />
    {/* Header Start */}
    <div className="container-fluid header bg-grey p-5">
      <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
        <div className="col-md-6 p-5 mt-lg-5">
          <h1 className="display-5 animated fadeIn mb-4 py-3 px-5">
           CONTACT
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
    {/* Contact Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: 600 }}
        >
          <h1 className="mb-3">Contact Us</h1>
          <p>
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
            lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum
            vero dolor duo.
          </p>
        </div>
        <div className="row g-4">
          <div className="col-12">
            <div className="row gy-4">
              <div
                className="col-md-6 col-lg-4 wow fadeIn"
                data-wow-delay="0.1s"
              >
                <div className="bg-light rounded p-3">
                  <div
                    className="d-flex align-items-center bg-white rounded p-3"
                    style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                  >
                    <div
                      className="icon me-3"
                      style={{ width: 45, height: 45 }}
                    >
                      <i className="fa fa-map-marker-alt text-primary" />
                    </div>
                    <span>123 Street, New York, USA</span>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 wow fadeIn"
                data-wow-delay="0.3s"
              >
                <div className="bg-light rounded p-3">
                  <div
                    className="d-flex align-items-center bg-white rounded p-3"
                    style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                  >
                    <div
                      className="icon me-3"
                      style={{ width: 45, height: 45 }}
                    >
                      <i className="fa fa-envelope-open text-primary" />
                    </div>
                    <span>info@example.com</span>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 wow fadeIn"
                data-wow-delay="0.5s"
              >
                <div className="bg-light rounded p-3">
                  <div
                    className="d-flex align-items-center bg-white rounded p-3"
                    style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                  >
                    <div
                      className="icon me-3"
                      style={{ width: 45, height: 45 }}
                    >
                      <i className="fa fa-phone-alt text-primary" />
                    </div>
                    <span>+012 345 6789</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <iframe
              className="position-relative rounded w-100 h-100"
              src="https://maps.google.com/maps?q=yaounde%20tradex%20emana&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder={0}
              style={{ minHeight: 400, border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex={0}
            />
            
          </div>
          <div className="col-md-6">
            <div className="wow fadeInUp" data-wow-delay="0.5s">
              <p className="mb-4">
                The contact form is currently inactive. Get a functional and
                working contact form with Ajax &amp; PHP in a few minutes. Just
                copy and paste the files, add a little code and you're done.{" "}
                <a href="https://htmlcodex.com/contact-form">Download Now</a>.
              </p>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: 150 }}
                        defaultValue={""}
                      />
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Contact End */}
    {/* Footer Start */}
   <Footer/>
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

export default Contact