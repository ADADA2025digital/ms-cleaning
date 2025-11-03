import React, { useState } from "react";
import { motion } from "framer-motion";
import PageBanner from "../Components/PageBanner";
import { WhyChooseUs } from "../Components/WhyChooseUs";
import {
  features,
  howItWorks,
  plans,
  services,
  qualityAssurance,
} from "../Constants/Data";
import whyChooseUsImg from "../assets/Images/2.jpeg";
import qualityImg from "../assets/Images/3.jpeg";
import { Link } from "react-router-dom";
import arrow from "../assets/Images/arrow.png";
import Star from "../assets/Images/star.png";

export default function ServicesPage() {
  const [yearly, setYearly] = useState(false);

  return (
    <>
      <div className="container-fluid p-0">
        <PageBanner
          title="Services"
          subtitle="Home / Services"
          backgroundImage="/hero.jpg"
        />

        {/* Services Grid */}
        <section>
          <div className="container py-5">
            <div className="row g-4 py-5">
              {services.map((service, index) => (
                <div key={index} className="col-md-4">
                  <motion.div
                    className="card border-0 rounded-3 shadow-sm h-100 position-relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.45,
                      ease: "easeOut",
                      delay: index * 0.05,
                    }}
                  >
                    <img
                      src={service.image}
                      className="card-img-top"
                      alt={service.title}
                      style={{ height: "300px", objectFit: "cover" }}
                    />

                    <div className="card-body bg-white position-absolute bottom-0 start-0 w-100 p-4 shadow-lg">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title heading fw-semibold">
                          <Link
                            to={`/servicedetails/${service.slug}`}
                            className="text-decoration-none text-dark"
                          >
                            {service.name} Cleaning Services
                          </Link>
                        </h5>
                        <div
                          className="light-bg rounded-circle position-relative d-flex align-items-center justify-content-center"
                          style={{ padding: "10px 15px", top: "-50px" }}
                        >
                          <i className="bi bi-house-door text-white fs-3"></i>
                        </div>
                      </div>
                      <p className="card-text text-muted small pb-3">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section style={{ background: "#f0f4fa" }}>
          <div className="container py-5">
            <div className="text-center">
              <motion.h6
                className="fw-semibold heading text-uppercase fs-5 d-flex align-items-center justify-content-center gap-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <img
                  className="star"
                  src={Star}
                  alt="Star"
                  style={{ width: "30px", height: "30px" }}
                />
                PROCESS
              </motion.h6>

              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
              >
                How it works
              </motion.h1>

              <div className="position-relative py-5">
                <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-5">
                  {howItWorks.map((step, index) => (
                    <div
                      key={index}
                      className="d-flex flex-column align-items-center text-center position-relative"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                          duration: 0.45,
                          ease: "easeOut",
                          delay: index * 0.08,
                        }}
                      >
                        <div className="position-relative mb-4 howitworks-step d-flex justify-content-center">
                          <div
                            className="rounded-circle overflow-hidden"
                            style={{ width: "150px", height: "150px" }}
                          >
                            <img
                              src={step.image}
                              alt={step.title}
                              width={150}
                              height={150}
                              style={{ objectFit: "cover" }}
                            />
                          </div>

                          <div
                            className="position-absolute light-bg text-white rounded-circle d-flex align-items-center justify-content-center howitworks-number"
                            style={{
                              width: "40px",
                              height: "40px",
                              top: "-10px",
                              left: "30%",
                              transform: "translateX(-50%)",
                              zIndex: 2,
                            }}
                          >
                            <span>{step.number}</span>
                          </div>
                        </div>

                        <h4 className="mb-2">{step.title}</h4>
                        <p className="para heading px-3">{step.description}</p>
                      </motion.div>

                      {/* curved arrow only between steps */}
                      {index !== howItWorks.length - 1 && (
                        <>
                          {/* Desktop arrow between steps */}
                          <img
                            src={arrow}
                            alt="arrow"
                            className="d-none d-md-block position-absolute howitworks-arrow"
                            style={{
                              right: "-0px",
                              top: "30%",
                              transform: "translateY(-50%)",
                              height: "auto",
                            }}
                          />
                          {/* Mobile down arrow */}
                          <i className="bi bi-arrow-down fs-1 highlight d-md-none mt-3"></i>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 overflow-x-hidden">
          {/* QUALITY ASSURANCE */}
          <div className="row align-items-center px-3 px-md-0">
            <div
              className="col-md-6 quote bg-image position-relative rounded-4 mb-3 mb-md-0"
              style={{
                backgroundImage: `url(${qualityImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="col-md-5 p-3 p-md-5">
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
                QUALITY ASSURANCE
              </motion.h6>
              <h1 className="fw-semibold my-3 text-center text-md-start">
                We Assure the <br /> Quality You Need
              </h1>
              <p className="para mt-4 text-center text-md-start">
                At MS Property Cleaning Services, we deliver spotless and
                reliable cleaning for homes, offices, and industries - with care
                you can trust.
              </p>

              <ul className="list-unstyled mt-4">
                {qualityAssurance.map((point, index) => (
                  <li
                    key={index}
                    className="d-flex align-items-start mb-2 para mt-4"
                  >
                    <i className="bi bi-check2-all highlight fs-5 me-2"></i>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="container mb-5">
            <WhyChooseUs
              title="WHY CHOOSE US"
              subtitle="Making Life Cleaner and Easier"
              features={features}
              imageSrc={whyChooseUsImg}
            />
          </div>
        </section>
      </div>
    </>
  );
}
