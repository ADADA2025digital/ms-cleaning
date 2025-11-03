import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const BlogCard = ({ service }) => {
  const [hover, setHover] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Show overlay & icon logic
  const shouldShowOverlay = isMobile ? true : hover;
  const showIcon = isMobile ? true : hover; // key change

  return (
    <div
      className="col-lg-4 col-md-4 col-sm-6 position-relative overflow-hidden rounded-4 d-flex justify-content-center blog-card"
      onMouseEnter={() => !isMobile && setHover(true)}
      onMouseLeave={() => !isMobile && setHover(false)}
    >
      <img
        src={service.image}
        alt={service.title}
        className="img-fluid rounded-3 w-100"
      />

      <div
        className={`position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-start justify-content-between ${
          shouldShowOverlay ? "hover-overlay" : ""
        }`}
      >
        {/* Icon (always on mobile, hover on desktop) */}
        <div
          className={`position-absolute light-bg rounded-circle hover-icon d-flex align-items-center justify-content-center ${
            showIcon ? "show" : ""
          }`}
          style={{
            right: "1rem",
            top: "1rem",
            transition: "opacity 0.3s ease",
          }}
        >
          <Link to="/servicedetails">
            <i className="bi bi-arrow-up-right text-white fw-bold"></i>
          </Link>
        </div>

        <div
          className={`hover-content position-absolute start-0 end-0 p-3 mx-4 rounded-3 bg-white ${
            shouldShowOverlay ? "show" : ""
          }`}
        >
          <h6 className="heading highlight fw-semibold">
            <Link to="/servicedetails" className="text-decoration-none heading">
              {service.title}
            </Link>
          </h6>
          <h6 className="text-muted">{service.description}</h6>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
