import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import usa from "../images/usa.jpeg";
import vietnam from "../images/vietnam.jpg";
import greece from "../images/greece.avif";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.1, 
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ width: "100%", marginBottom: "80px", marginTop:'30px' }}>
      <Slider {...settings}>
        <div>
          <div
            className="slide-content"
            style={{
              width: "95%", 
              height: "400px",
              marginRight: "10px", 
            }}
          >
            <img
              src={usa}
              alt="Slide 1"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <div>
          <div
            className="slide-content"
            style={{
              width: "95%", 
              height: "400px",
              marginRight: "10px", 
            }}
          >
            <img
              src={vietnam}
              alt="Slide 2"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <div>
          <div
            className="slide-content"
            style={{
              width: "95%", 
              height: "400px",
              marginRight: "10px",
            }}
          >
            <img
              src={greece}
              alt="Slide 3"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};


const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "10px" }}
      onClick={onClick}
    />
  );
};


const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "10px", zIndex:"1" }}
      onClick={onClick}
    />
  );
};

export default SliderComponent;
