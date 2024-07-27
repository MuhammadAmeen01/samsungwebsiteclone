// main.jsx

import React from "react";
import Navbar from "./navbar";
import BottomNavbar from "./bottomnavbar"; // Assuming both files are in the same directory
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";
const Main = () => {
  const products = [
    {
      id: 1,
      name: "Samsung Galaxy S24 Ultra",
      description: "",
      image:
        "	https://www.samsung.com/global/galaxy/main/images/banner_galaxy-s24-ultra.png",
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra/S24+",
      description: "",
      image:
        "https://www.samsung.com/global/galaxy/main/images/banner_galaxy-s24.png",
    },
    {
      id: 3,
      name: "Galaxy Z Flip",
      description: "",
      image:
        "	https://www.samsung.com/global/galaxy/main/images/banner_galaxy-z-flip5.png",
    },
    {
      id: 4,
      name: "Galaxy Z Fold",
      description: "",
      image:
        "https://www.samsung.com/global/galaxy/main/images/banner_galaxy-z-fold.png",
    },
  ];
  return (
    <div>
      <Navbar /> {/* Rendering the imported Navbar component */}
      {/* <!-- Carousel wrapper --> */}
      <div
        id="carouselBasicExample"
        data-mdb-carousel-init
        className="carousel slide carousel-fade"
        data-mdb-ride="carousel"
      >
        {/* <!-- Indicators --> */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-mdb-button-init
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-mdb-button-init
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-mdb-button-init
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        {/* <!-- Inner --> */}
        <div className="carousel-inner">
          {/* <!-- Single item --> */}
          <div className="carousel-item active">
            <img
              src="https://www.samsung.com/global/galaxy/events/unpacked/2024-1h/images/galaxy-unpacked_2024-1h-share.jpg"
              className="d-block w-100"
              alt="Sunset Over the City"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>

          {/* <!-- Single item --> */}
          <div className="carousel-item">
            <img
              src="https://www.samsung.com/global/galaxy/main/images/kv_galaxy-s24-ultra.jpg"
              className="d-block w-100"
              alt="Canyon at Nigh"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          {/* <!-- Single item --> */}
          <div className="carousel-item">
            <img
              src="https://www.samsung.com/global/galaxy/main/images/kv_galaxy-s24.jpg"
              className="d-block w-100"
              alt="Cliff Above a Stormy Sea"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </div>
          {/* 1 */}
          <div className="carousel-item">
            <img
              src="https://www.samsung.com/global/galaxy/main/images/kv_galaxy-z-flip5.jpg"
              className="d-block w-100"
              alt="Cliff Above a Stormy Sea"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className="carousel-item">
            <img
              src="https://www.samsung.com/global/galaxy/main/images/kv_galaxy-z-fold5.jpg"
              className="d-block w-100"
              alt="Cliff Above a Stormy Sea"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className="carousel-item">
            <img
              src="https://www.samsung.com/global/galaxy/main/images/kv_galaxy-tab-s9-series.jpg"
              className="d-block w-100"
              alt="Cliff Above a Stormy Sea"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </div>
        </div>
        {/* <!-- Inner --> */}

        {/* <!-- Controls --> */}
        <button
          data-mdb-button-init
          className="carousel-control-prev"
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          data-mdb-button-init
          className="carousel-control-next"
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <br></br>
      {/* <!-- Carousel wrapper --> */}
      {/* another slides */}
      <Container fluid>
        <Row className="justify-content-center">
          {/* First Column: Videos Carousel */}
          <Col md={6}>
            <Carousel>
              <Carousel.Item>
                <iframe
                  width="100%"
                  height="415"
                  src="https://www.youtube.com/embed/eAj-oD8dssQ?si=x2cHpLTNRKI2Yc1a"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </Carousel.Item>
              <Carousel.Item>
                <iframe
                  width="100%"
                  height="415"
                  src="https://www.youtube.com/embed/CYqOnILg8N4?si=Y23KmVmSBNFB43Nc"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </Carousel.Item>
            </Carousel>
          </Col>
          {/* Second Column: Image Carousel */}
          <Col md={6}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://www.samsung.com/global/galaxy/main/images/banner_2024-1h-unpacked-highlights.jpg"
                  alt="First slide"
                  style={{ height: "415px", objectFit: "cover" }}
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://www.samsung.com/global/galaxy/main/images/banner_2023-2h-unpacked-highlights.jpg"
                  alt="Second slide"
                  style={{ height: "415px", objectFit: "cover" }}
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <br></br>
        <h1 style={{ fontFamily: "sssB'", fontSize: "32px" }}>
          <b> The All New Galaxy</b>
        </h1>

        {/* Product Catalog */}
        <Row className="mt-5 justify-content-center">
          {products.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={3} className="mb-4">
              <Card
                style={{
                  width: "100%",
                  cursor: "pointer",
                  border: "0px solid rgba(0, 0, 0, .125)",
                }}
                className="text-center"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#6610f2")
                }
                onMouseLeave={(e) => (e.currentTarget.style.background = "")}
              >
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      {/* <Container className="my-5"> */}
      {/* <h2>The All New Galaxy</h2> */}
      {/* <p>This is the main content of the page.</p> */}
      {/* </Container> */}
      <BottomNavbar />
    </div>
  );
};

export default Main;
