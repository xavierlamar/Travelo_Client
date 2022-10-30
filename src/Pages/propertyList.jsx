import React from 'react'

function propertyList() {
  return (
    <>
  {/* Header Start */}
  <div className="container-fluid header bg-white p-0">
    <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
      <div className="col-md-6 p-5 mt-lg-5">
        <h1 className="display-5 animated fadeIn mb-4">Property List</h1>
        <nav aria-label="breadcrumb animated fadeIn">
          <ol className="breadcrumb text-uppercase">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li
              className="breadcrumb-item text-body active"
              aria-current="page"
            >
              Property List
            </li>
          </ol>
        </nav>
      </div>
      <div className="col-md-6 animated fadeIn">
        <img className="img-fluid" src="img/header.jpg" alt="" />
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
  {/* Property List Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-0 gx-5 align-items-end">
        <div className="col-lg-6">
          <div
            className="text-start mx-auto mb-5 wow slideInLeft"
            data-wow-delay="0.1s"
          >
            <h1 className="mb-3">Property Listing</h1>
            <p>
              Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
              dolore lorem kasd vero ipsum sit eirmod sit diam justo sed rebum.
            </p>
          </div>
        </div>
        <div
          className="col-lg-6 text-start text-lg-end wow slideInRight"
          data-wow-delay="0.1s"
        >
          <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
            <li className="nav-item me-2">
              <a
                className="btn btn-outline-primary active"
                data-bs-toggle="pill"
                href="#tab-1"
              >
                Featured
              </a>
            </li>
            <li className="nav-item me-2">
              <a
                className="btn btn-outline-primary"
                data-bs-toggle="pill"
                href="#tab-2"
              >
                For Sell
              </a>
            </li>
            <li className="nav-item me-0">
              <a
                className="btn btn-outline-primary"
                data-bs-toggle="pill"
                href="#tab-3"
              >
                For Rent
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="tab-content">
        <div id="tab-1" className="tab-pane fade show p-0 active">
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <a href="">
                    <img
                      className="img-fluid"
                      src="img/property-1.jpg"
                      alt=""
                    />
                  </a>
                  <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                    For Sell
                  </div>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                    Appartment
                  </div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">$12,345</h5>
                  <a className="d-block h5 mb-2" href="">
                    Golden Urban House For Sell
                  </a>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    1000 Sqft
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <a href="">
                    <img
                      className="img-fluid"
                      src="img/property-2.jpg"
                      alt=""
                    />
                  </a>
                  <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                    For Rent
                  </div>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                    Villa
                  </div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">$12,345</h5>
                  <a className="d-block h5 mb-2" href="">
                    Golden Urban House For Sell
                  </a>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    1000 Sqft
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <a href="">
                    <img
                      className="img-fluid"
                      src="img/property-3.jpg"
                      alt=""
                    />
                  </a>
                  <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                    For Sell
                  </div>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                    Office
                  </div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">$12,345</h5>
                  <a className="d-block h5 mb-2" href="">
                    Golden Urban House For Sell
                  </a>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    1000 Sqft
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <a href="">
                    <img
                      className="img-fluid"
                      src="img/property-4.jpg"
                      alt=""
                    />
                  </a>
                  <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                    For Rent
                  </div>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                    Building
                  </div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">$12,345</h5>
                  <a className="d-block h5 mb-2" href="">
                    Golden Urban House For Sell
                  </a>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    1000 Sqft
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <a href="">
                    <img
                      className="img-fluid"
                      src="img/property-5.jpg"
                      alt=""
                    />
                  </a>
                  <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                    For Sell
                  </div>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                    Home
                  </div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">$12,345</h5>
                  <a className="d-block h5 mb-2" href="">
                    Golden Urban House For Sell
                  </a>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    1000 Sqft
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <a href="">
                    <img
                      className="img-fluid"
                      src="img/property-6.jpg"
                      alt=""
                    />
                  </a>
                  <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                    For Rent
                  </div>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                    Shop
                  </div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">$12,345</h5>
                  <a className="d-block h5 mb-2" href="">
                    Golden Urban House For Sell
                  </a>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    1000 Sqft
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div
              className="col-12 text-center wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <a className="btn btn-primary py-3 px-5" href="">
                Browse More Property
              </a>
            </div>
          </div>
        </div>
        <div id="tab-2" className="tab-pane fade show p-0">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <a href="">
                    <img
                      className="img-fluid"
                      src="img/property-1.jpg"
                      alt=""
                    />
                  </a>
                  <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                    For Sell
                  </div>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                    Appartment
                  </div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">$12,345</h5>
                  <a className="d-block h5 mb-2" href="">
                    Golden Urban House For Sell
                  </a>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    1000 Sqft
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <a href="">
                    <img
                      className="img-fluid"
                      src="img/property-2.jpg"
                      alt=""
                    />
                  </a>
                  <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                    For Rent
                  </div>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                    Villa
                  </div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">$12,345</h5>
                  <a className="d-block h5 mb-2" href="">
                    Golden Urban House For Sell
                  </a>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    1000 Sqft
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <a href="">
                    <img
                      className="img-fluid"
                      src="img/property-3.jpg"
                      alt=""
                    />
                  </a>
                  <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                    For Sell
                  </div>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                    Office
                  </div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">$12,345</h5>
                  <a className="d-block h5 mb-2" href="">
                    Golden Urban House For Sell
                  </a>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    1000 Sqft
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <a href="">
                    <img
                      className="img-fluid"
                      src="img/property-4.jpg"
                      alt=""
                    />
                  </a>
                  <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                    For Rent
                  </div>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                    Building
                  </div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">$12,345</h5>
                  <a className="d-block h5 mb-2" href="">
                    Golden Urban House For Sell
                  </a>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    1000 Sqft
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <a href="">
                    <img
                      className="img-fluid"
                      src="img/property-5.jpg"
                      alt=""
                    />
                  </a>
                  <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                    For Sell
                  </div>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                    Home
                  </div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">$12,345</h5>
                  <a className="d-block h5 mb-2" href="">
                    Golden Urban House For Sell
                  </a>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    1000 Sqft
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <a href="">
                    <img
                      className="img-fluid"
                      src="img/property-6.jpg"
                      alt=""
                    />
                  </a>
                  <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                    For Rent
                  </div>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                    Shop
                  </div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">$12,345</h5>
                  <a className="d-block h5 mb-2" href="">
                    Golden Urban House For Sell
                  </a>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    1000 Sqft
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div className="col-12 text-center">
              <a className="btn btn-primary py-3 px-5" href="">
                Browse More Property
              </a>
            </div>
          </div>
        </div>
        <div id="tab-3" className="tab-pane fade show p-0">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <a href="">
                    <img
                      className="img-fluid"
                      src="img/property-1.jpg"
                      alt=""
                    />
                  </a>
                  <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                    For Sell
                  </div>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                    Appartment
                  </div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">$12,345</h5>
                  <a className="d-block h5 mb-2" href="">
                    Golden Urban House For Sell
                  </a>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    1000 Sqft
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <a href="">
                    <img
                      className="img-fluid"
                      src="img/property-2.jpg"
                      alt=""
                    />
                  </a>
                  <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                    For Rent
                  </div>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                    Villa
                  </div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">$12,345</h5>
                  <a className="d-block h5 mb-2" href="">
                    Golden Urban House For Sell
                  </a>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    1000 Sqft
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <a href="">
                    <img
                      className="img-fluid"
                      src="img/property-3.jpg"
                      alt=""
                    />
                  </a>
                  <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                    For Sell
                  </div>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                    Office
                  </div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">$12,345</h5>
                  <a className="d-block h5 mb-2" href="">
                    Golden Urban House For Sell
                  </a>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    1000 Sqft
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <a href="">
                    <img
                      className="img-fluid"
                      src="img/property-4.jpg"
                      alt=""
                    />
                  </a>
                  <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                    For Rent
                  </div>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                    Building
                  </div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">$12,345</h5>
                  <a className="d-block h5 mb-2" href="">
                    Golden Urban House For Sell
                  </a>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    1000 Sqft
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <a href="">
                    <img
                      className="img-fluid"
                      src="img/property-5.jpg"
                      alt=""
                    />
                  </a>
                  <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                    For Sell
                  </div>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                    Home
                  </div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">$12,345</h5>
                  <a className="d-block h5 mb-2" href="">
                    Golden Urban House For Sell
                  </a>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    1000 Sqft
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <a href="">
                    <img
                      className="img-fluid"
                      src="img/property-6.jpg"
                      alt=""
                    />
                  </a>
                  <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                    For Rent
                  </div>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                    Shop
                  </div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">$12,345</h5>
                  <a className="d-block h5 mb-2" href="">
                    Golden Urban House For Sell
                  </a>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    1000 Sqft
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div className="col-12 text-center">
              <a className="btn btn-primary py-3 px-5" href="">
                Browse More Property
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Property List End */}
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
                src="img/call-to-action.jpg"
                alt=""
              />
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="mb-4">
                <h1 className="mb-3">Contact With Our Certified Agent</h1>
                <p>
                  Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd
                  vero ipsum sit sit diam justo sed vero dolor duo.
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
  {/* Footer Start */}
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
            123 Street, New York, USA
          </p>
          <p className="mb-2">
            <i className="fa fa-phone-alt me-3" />
            +012 345 67890
          </p>
          <p className="mb-2">
            <i className="fa fa-envelope me-3" />
            info@example.com
          </p>
          <div className="d-flex pt-2">
            <a className="btn btn-outline-light btn-social" href="">
              <i className="fab fa-twitter" />
            </a>
            <a className="btn btn-outline-light btn-social" href="">
              <i className="fab fa-facebook-f" />
            </a>
            <a className="btn btn-outline-light btn-social" href="">
              <i className="fab fa-youtube" />
            </a>
            <a className="btn btn-outline-light btn-social" href="">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h5 className="text-white mb-4">Quick Links</h5>
          <a className="btn btn-link text-white-50" href="">
            About Us
          </a>
          <a className="btn btn-link text-white-50" href="">
            Contact Us
          </a>
          <a className="btn btn-link text-white-50" href="">
            Our Services
          </a>
          <a className="btn btn-link text-white-50" href="">
            Privacy Policy
          </a>
          <a className="btn btn-link text-white-50" href="">
            Terms &amp; Condition
          </a>
        </div>
        <div className="col-lg-3 col-md-6">
          <h5 className="text-white mb-4">Photo Gallery</h5>
          <div className="row g-2 pt-2">
            <div className="col-4">
              <img
                className="img-fluid rounded bg-light p-1"
                src="img/property-1.jpg"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid rounded bg-light p-1"
                src="img/property-2.jpg"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid rounded bg-light p-1"
                src="img/property-3.jpg"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid rounded bg-light p-1"
                src="img/property-4.jpg"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid rounded bg-light p-1"
                src="img/property-5.jpg"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid rounded bg-light p-1"
                src="img/property-6.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h5 className="text-white mb-4">Newsletter</h5>
          <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
            <input
              className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
              type="text"
              placeholder="Your email"
            />
            <button
              type="button"
              className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            ©{" "}
            <a className="border-bottom" href="#">
              Your Site Name
            </a>
            , All Right Reserved.
            {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
            Designed By{" "}
            <a className="border-bottom" href="https://htmlcodex.com">
              HTML Codex
            </a>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="footer-menu">
              <a href="">Home</a>
              <a href="">Cookies</a>
              <a href="">Help</a>
              <a href="">FQAs</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
    <i className="bi bi-arrow-up" />
  </a>
</>

  )
}

export default propertyList