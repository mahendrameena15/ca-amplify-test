import React from "react";

const AccountConsulting = () => {
  return (
    <>
      <section className="ftco-section ftco-no-pb ftco-no-pt bg-secondary">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-7 d-flex align-items-center">
              <h2
                className="mb-3 mb-sm-0"
                style={{ color: "black", fontSize: 22 }}
              >
                Sign Up for Your Free
              </h2>
            </div>
            <div className="col-md-5 d-flex align-items-center">
              <form action="#" className="subscribe-form">
                <div className="form-group d-flex">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter email address"
                  />
                  <input
                    type="submit"
                    defaultValue="Subscribe"
                    className="submit px-3"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccountConsulting;
