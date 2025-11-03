import React from "react";
import { motion } from "framer-motion";
import BeforeAfterSlider from "./BeforeAfterSlider";
import Star from "../assets/Images/star.png";

export default function EvolutionSection({
  subtitle = "Dirty to Dazzling",

  leftFeatures = [],
  rightFeatures = [],
  centerImage1,
  centerImage2,
  centerImageAlt1 = "Before Cleaning",
  centerImageAlt2 = "After Cleaning",
}) {
  return (
    <section className="py-5" style={{ background: '#f0f4fa' }}>
      <div className="container py-5 pb-0 mb-0 mb-md-5">
        <motion.p
          className="text-uppercase text-center heading fs-5 fw-semibold mb-2 mt-5"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <img
            className="star"
            src={Star}
            alt="Star"
            style={{ width: "30px", height: "30px" }}
          ></img>
          {subtitle}
        </motion.p>

        <motion.h2
          className="display-4 fw-semibold mb-5 text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
        >
          Amazing Evolution of <br /> Your Home
        </motion.h2>

        <div className="row align-items-center">
          {/* Left Side Content */}
          <div className="col-md-4">
            <div className="d-flex flex-column align-items-end">
              {leftFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className={
                    index === 0
                      ? "mb-3 text-center text-md-end"
                      : "text-center text-md-end"
                  }
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                    delay: index * 0.08,
                  }}
                >
                  <i
                    className={`bi ${feature.icon} fs-2 highlight me-3`}
                  ></i>
                  <h5 className="fw-bold mb-0 py-3">
                    {feature.title}
                  </h5>
                  <p className="para">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Center Image - Before/After Slider */}
          <div className="col-md-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.12 }}
            >
              <BeforeAfterSlider
                beforeImage={centerImage1}
                afterImage={centerImage2}
                beforeAlt={centerImageAlt1}
                afterAlt={centerImageAlt2}
                className="border-3 border-white"
              />
            </motion.div>
          </div>

          {/* Right Side Content */}
          <div className="col-md-4">
            <div className="d-flex flex-column align-items-start">
              {rightFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className={
                    index === 0
                      ? "mb-3 text-center text-md-start"
                      : "text-center text-md-start"
                  }
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                    delay: index * 0.08,
                  }}
                >
                  <i
                    className={`bi ${feature.icon} fs-2 highlight me-3`}
                  ></i>
                  <h5 className="fw-bold mb-0 py-3">
                    {feature.title}
                  </h5>
                  <p className="para">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
