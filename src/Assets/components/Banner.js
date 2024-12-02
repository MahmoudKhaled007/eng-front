import React from "react";
import MyImage from "../images/img3.jpg";
import FileUpload from "../components/FileUpload";
const Banner = () => {
  return (
    <section className="banner_section layout_padding">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <h6 className="banner_taital">
                    Thank you for celebrating with us!
                  </h6>
                  <p className="banner_text">
                    <br /> Relive the moments we shared together. <br /> Your
                    presence made it special!
                  </p>
                  <FileUpload />

                  <div className="read_bt"></div>
                </div>
                <div className="col-sm-6">
                  <div className="banner_img">
                    <img src={MyImage} alt="Banner" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
