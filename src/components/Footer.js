import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footersection">
        <div className="footertotal">
          <div className="footer">
            <div className="row">
              <div className="col-lg-2 ">
                <div className="mainheader">ALL departments</div>
                <div>
                  All the departments are available such as clothing,accessories
                  etc
                </div>
              </div>
              <div className="col-lg-2">
                <div className="mainheader">Get the walmart App</div>
                <div>You can access this walmart app on the play store</div>
              </div>

              <div className="col-lg-2">
                <div className="mainheader">Store Directory</div>
                <div>There are many stores available Globally</div>
              </div>

              <div className="col-lg-2">
                <div className="mainheader">Career</div>
                <div>Walmart has aglorious career across globally</div>
              </div>
              <div className="col-lg-2">
                <div className="mainheader">our company</div>
                <div>
                  One of the many things that excites me about Walmart is how we
                  continuously push for innovative solutions
                </div>
              </div>
              <div className="col-lg-2">
                <div className="mainheader">Privacy and security</div>
                <div>
                  Walmart values the trust that our customers, associates,
                  representatives and service providers place in us when they
                  give us personal information.{" "}
                </div>
              </div>
              <div className="copyrights">
                <div>
                  {" "}
                  <span
                    class="material-symbols-outlined"
                    style={{ marginTop: "3px", fontSize: "11px" }}
                  >
                    copyright 
                  </span>
                   2023  classiccollection  All rights reserved
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
