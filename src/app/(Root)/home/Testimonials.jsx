import React from "react";
import Carousel from "react-multi-carousel";

const Testimonials = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <section className="ftco-section testimony-section bg-light pt-5">
        <div className="overlay" />
        <div className="container">
          <div className="row justify-content-center pb-5">
            <div className="col-md-7 heading-section heading-section-white text-center ">
              <span className="subheading">Testimonies</span>
              <h2>Happy Clients &amp; Feedbacks</h2>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-12 px-0">
              <Carousel
                responsive={responsive}
                showDots={true}
                arrows={false}
                showThumbs={false}
              >
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="text">
                      <p style={{ fontSize: "16px" }} className="mb-4">
                        A Chartered Accountant (CA) is a professional financial
                        expert with extensive training and expertise in various
                        aspects of accounting, taxation, auditing, and financial
                        management.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{
                            backgroundImage: "url(/images/person_1.jpg)",
                          }}
                          alt="Tax services"
                        />
                        <div className="pl-3">
                          <p style={{ fontSize: "16px" }} className="name">
                            Roger Scott
                          </p>
                          <span className="position">CHARTERED ACCOUNTANT</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="text">
                      <p style={{ fontSize: "16px" }} className="mb-4">
                        A Chartered Accountant (CA) is a professional financial
                        expert with extensive training and expertise in various
                        aspects of accounting, taxation, auditing, and financial
                        management.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{
                            backgroundImage: "url(/images/person_2.jpg)",
                          }}
                          alt="Ca services"
                        />
                        <div className="pl-3">
                          <p style={{ fontSize: "16px" }} className="name">
                            Roger Scott
                          </p>
                          <span className="position">CHARTERED ACCOUNTANT</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="text">
                      <p style={{ fontSize: "16px" }} className="mb-4">
                        A Chartered Accountant (CA) is a professional financial
                        expert with extensive training and expertise in various
                        aspects of accounting, taxation, auditing, and financial
                        management.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{
                            backgroundImage: "url(/images/person_3.jpg)",
                          }}
                          alt="Chartered Accountant"
                        />
                        <div className="pl-3">
                          <p style={{ fontSize: "16px" }} className="name">
                            Roger Scott
                          </p>
                          <span className="position">CHARTERED ACCOUNTANT</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="text">
                      <p style={{ fontSize: "16px" }} className="mb-4">
                        A Chartered Accountant (CA) is a professional financial
                        expert with extensive training and expertise in various
                        aspects of accounting, taxation, auditing, and financial
                        management.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{
                            backgroundImage: "url(/images/person_1.jpg)",
                          }}
                          alt="Financial experts"
                        />
                        <div className="pl-3">
                          <p style={{ fontSize: "16px" }} className="name">
                            Roger Scott
                          </p>
                          <span className="position">CHARTERED ACCOUNTANT</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="text">
                      <p style={{ fontSize: "16px" }} className="mb-4">
                        A Chartered Accountant (CA) is a professional financial
                        expert with extensive training and expertise in various
                        aspects of accounting, taxation, auditing, and financial
                        management.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{
                            backgroundImage: "url(/images/person_2.jpg)",
                          }}
                          alt="Accountant services"
                        />
                        <div className="pl-3">
                          <p className="name">Roger Scott</p>
                          <span className="position">CHARTERED ACCOUNTANT</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
