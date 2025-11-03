import React from "react";
import { Link } from "react-router-dom";

const MobileServicesCarousel = ({ services, carouselId = "servicesCarousel" }) => {
  if (!services || services.length === 0) return null;

  return (
    <div
      id={carouselId}
      className="carousel slide mt-4"
      data-bs-ride="carousel"
      data-bs-touch="true"
      data-bs-interval="false"
    >
      {/* dots (indicators) */}
      <div className="carousel-indicators">
        {services.map((_, idx) => (
          <button
            key={`ind-${idx}`}
            type="button"
            data-bs-target={`#${carouselId}`}
            data-bs-slide-to={idx}
            className={idx === 0 ? "active" : ""}
            aria-current={idx === 0 ? "true" : undefined}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* slides */}
      <div className="carousel-inner rounded-4 overflow-hidden">
        {services.map((service, idx) => (
          <div
            key={service.id ?? idx}
            className={`carousel-item ${idx === 0 ? "active" : ""}`}
          >
            {/* Use the SAME card structure but WITHOUT grid col classes */}
            <div className="position-relative overflow-hidden rounded-4 d-flex justify-content-center service-card">
              <img
                src={service.image}
                alt={service.title}
                className="img-fluid rounded-3 w-100"
              />

              {/* Force overlay to be visible by default on mobile */}
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-start justify-content-between hover-overlay">
                <div className="position-absolute light-bg rounded-circle hover-icon d-flex align-items-center justify-content-center show">
                  <Link to="/servicedetails">
                    <i className="bi bi-arrow-up-right text-white fw-bold"></i>
                  </Link>
                </div>

                <div className="hover-content position-absolute start-0 end-0 p-3 mx-4 rounded-3 bg-white show">
                  <h6 className="heading highlight fw-semibold mb-1">
                    <Link to="/servicedetails" className="text-decoration-none heading">
                      {service.title}
                    </Link>
                  </h6>
                  <h6 className="text-muted mb-0">{service.description}</h6>
                </div>
              </div>
            </div>
            {/* /card */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileServicesCarousel;
