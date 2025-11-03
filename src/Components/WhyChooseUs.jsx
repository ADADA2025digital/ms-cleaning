import { motion } from "framer-motion";
import Star from "../assets/Images/star.png";

export function WhyChooseUs({ title, subtitle, features, imageSrc }) {
  return (
    <div className="why-choose-us row d-flex justify-content-center pt-5">
      <div className="col-md-7">
        <motion.h5
          className="fw-semibold heading text-uppercase fs-5 d-flex align-items-center justify-content-center justify-content-md-start gap-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <img
            className="star"
            src={Star}
            alt="Star"
            style={{ width: "30px", height: "30px" }} 
          ></img>
          {title}
        </motion.h5>
        <h1 className="brand mb-4"></h1>

        <motion.h2
          className="display-6 fw-semibold mb-5 text-center text-md-start"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
        >
          {subtitle}
        </motion.h2>

        <div className="row">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="col-md-6 mb-3 why-feature"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: index * 0.08,
              }}
            >
              <div className="iconcircle p-3 bg-color1 rounded-circle d-flex justify-content-center align-items-center mx-md-0 mx-auto">
                <i className={`bi ${feature.icon} text-white fs-2`}></i>
              </div>
              <h4 className="text-color2 py-2 text-center text-md-start">{feature.heading}</h4>
              <p className="para text-center text-md-start">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="col-md-5 d-none d-md-flex position-relative" style={{ height: "580px" }}>
        <motion.img
          src={imageSrc}
          alt="Why Choose Us"
          className="rounded w-100 h-100 object-fit-cover"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        />
      </div>
    </div>
  );
}
