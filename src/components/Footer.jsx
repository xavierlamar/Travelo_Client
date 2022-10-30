import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {

  return (
    <div
    className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-3 col-md-6">
          <h5 className="text-white mb-4">Get In Touch</h5>
          <p className="mb-2">
            <i className="fa fa-map-marker-alt me-3" />
            CAMEROON, YAOUNDE
          </p>
          <p className="mb-2">
            <i className="fa fa-phone-alt me-3" />
            +012 345 67890
          </p>
          <p className="mb-2">
            <i className="fa fa-envelope me-3" />
            xavierlamar17@gmail.com
          </p>
          <div className="d-flex pt-2">
            <a className="btn btn-outline-light btn-social" href="/">
              <i className="fab fa-twitter" />
            </a>
            <a className="btn btn-outline-light btn-social" href="/">
              <i className="fab fa-facebook-f" />
            </a>
            <a className="btn btn-outline-light btn-social" href="/">
              <i className="fab fa-youtube" />
            </a>
            <a className="btn btn-outline-light btn-social" href="/">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h5 className="text-white mb-4">Quick Links</h5>
          <Link to='/About' className="btn btn-link text-white-50" >
            About Us
          </Link>
          <Link to='/Contact' className="btn btn-link text-white-50">
            Contact Us
          </Link>
          <a className="btn btn-link text-white-50" href="/" >
            Our Services
          </a>
        </div>
        <div className="col-lg-3 col-md-6">
          <h5 className="text-white mb-4">Newsletter</h5>
          <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
            <input
              className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
              type="text"
              placeholder="Your email"
            />

          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            ©{" "}
            <a className="border-bottom" href="/">
              Travelo
            </a>
            , All Right Reserved.
            {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
            Designed By{" "}
            <a className="border-bottom" href="https://htmlcodex.com">
              Mercury Tech
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer