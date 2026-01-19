import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageBanner from "../Components/PageBanner";
import Button from "../Components/Button";
import CountUp from "../Components/CountUp";
import { accordionData, testimonials } from "../Constants/Data";
import About1 from "../assets/Images/15.jpeg";
import About2 from "../assets/Images/12.jpeg";
import About3 from "../assets/Images/14.jpg";
import Star from "../assets/Images/star.png";

export default function AboutPage() {
  const [openItem, setOpenItem] = useState(accordionData[0].id);

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  const [index, setIndex] = useState(0);
  const itemsPerPage = 3;

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const visibleTestimonials = [];
  for (let i = 0; i < itemsPerPage; i++) {
    visibleTestimonials.push(testimonials[(index + i) % testimonials.length]);
  }

  return (
    <>
      <div className="container-fluid p-0">
        <PageBanner title="About Us" subtitle="Home / About" />

        {/* Stats Section */}
        <section className="container pb-5 mb-5">
          <div className="row about-us align-items-center py-5">
            <div className="col-md-7 position-relative">
              <div className="row">
                <div className="col-7">
                  <img
                    src={About1}
                    width={400}
                    height={400}
                    alt="Cleaning Team"
                    className="img-fluid rounded-3 object-fit-cover"
                  />
                </div>
                <div className="col-5  d-flex justify-content-start align-items-center">
                  <img
                    src={About3}
                    width={250}
                    alt="Cleaning Work"
                    className="img-fluid rounded-3"
                    style={{ height: "200px" }}
                  />
                </div>
              </div>
              <div className="row flex-nowrap">
                <div
                  className="col-6 p-4 d-flex justify-content-center"
                  style={{ height: "250px" }}
                >
                  <div className="text-box position-relative light-bg p-4 rounded-3 text-white text-center d-flex flex-column align-items-center mt-5 z-2">
                    <h1 className="mb-0">
                      <CountUp end={10} suffix="+" />
                    </h1>
                    <p className="mb-0 brand">
                      Successful <br /> Years
                    </p>
                  </div>
                </div>

                <div className="col-6 mt-2 position-relative rounded-3 about-img p-3 bg-light">
                  <img
                    src={About2}
                    alt="Professional Cleaner"
                    className="img-fluid rounded-2 object-fit-cover h-100 w-100"
                  />
                </div>
              </div>
            </div>

            <motion.div
              className="col-md-5 pt-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            >
              <motion.h6
                className="fw-semibold heading text-uppercase fs-5 d-flex align-items-center justify-content-center justify-content-md-start gap-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <img
                  className="star"
                  src={Star}
                  alt="Star"
                  style={{ width: "30px", height: "30px" }}
                ></img>
                ABOUT US
              </motion.h6>{" "}
              <h2 className="display-5 fw-semibold text-center text-md-start">
                Making Every Space Shine{" "}
              </h2>
              <p className="text-muted py-2 text-center text-md-start">
                MS Property Cleaning Services delivers reliable, eco-friendly
                cleaning for homes, offices, and commercial spaces - ensuring
                freshness and comfort every day.
              </p>
              <ul className="list-unstyled lh-2">
                <li className="d-flex align-items-center justify-content-center justify-content-md-start gap-3">
                  <i className="bi bi-check2-all text-success"></i>
                  Reliable & affordable
                </li>
                <li className="d-flex align-items-center justify-content-center justify-content-md-start gap-3">
                  <i className="bi bi-check2-all text-success"></i>
                  Eco-friendly cleaning
                </li>
                <li className="d-flex align-items-center justify-content-center justify-content-md-start gap-3">
                  <i className="bi bi-check2-all text-success"></i>
                  100% satisfaction
                </li>
              </ul>
              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3 mt-4">
                <div className="position-relative">
                  <img
                    src={About1}
                    width={200}
                    height={120}
                    alt="MS Property Cleaning video thumbnail"
                    className="img-fluid rounded-3"
                  />
                  <div className="position-absolute top-50 start-50 translate-middle rounded-circle shadow">
                    <i className="bi bi-play-circle text-white fs-2"></i>
                  </div>
                </div>
                <p className="para">
                  Watch how our professional cleaners bring spotless shine to
                  homes and workplaces - with care, quality, and attention to
                  detail.
                </p>
              </div>
              <div className="d-flex flex-column flex-md-row gap-3 gap-md-5  mt-4">
                <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3 py-3">
                  <Link to="/contact">
                    <Button text="Book a Cleaning" />
                  </Link>
                </div>
                <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3">
                  <span className="dark-bg rounded-circle px-3 py-2">
                    <i className="bi bi-telephone-fill text-white fs-4"></i>
                  </span>
                  <div className="text-start">
                    <p className="mb-1 small">Need Help? Call Us</p>
                    <p className="mb-0 fw-bold">0412 147 211</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div
            className="d-flex flex-row text-center light-bg text-white py-5 rounded-4 mb-5 w-100 position-relative"
            style={{ bottom: "20px" }}
          >
            {/* Expert Team */}
            <div className="col-4 d-flex flex-column flex-md-row align-items-center justify-content-center border-md-end mb-4 mb-md-0">
              <h2 className="fw-bold display-4 mb-2 mb-md-0">
                <CountUp end={120} suffix="+" />
              </h2>
              <p className="mb-0 fw-bold ms-md-3 fs-6 fs-md-5 text-center text-md-start">
                Expert <br /> Team
              </p>
            </div>

            {/* Happy Clients */}
            <div className="col-4 d-flex flex-column flex-md-row align-items-center justify-content-center border-md-end border-light mb-4 mb-md-0">
              <h2 className="fw-bold display-4 mb-2 mb-md-0">
                <CountUp end={2000} suffix="+" formatK />
              </h2>
              <p className="mb-0 fw-bold ms-md-3 fs-6 fs-md-5 text-center text-md-start">
                Happy <br /> Clients
              </p>
            </div>

            {/* Cleaning Completed */}
            <div className="col-4 d-flex flex-column flex-md-row align-items-center justify-content-center">
              <h2 className="fw-bold display-4 mb-2 mb-md-0">
                <CountUp end={18000} suffix="+" formatK />
              </h2>
              <p className="mb-0 fw-bold ms-md-3 fs-6 fs-md-5 text-center text-md-start">
                Cleaning <br /> Completed
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
