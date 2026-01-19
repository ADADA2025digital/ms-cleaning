import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../Components/Button";
import QuoteForm from "../Components/QuoteForm";
import CountUp from "../Components/CountUp";
import {
  progressData,
  services,
  servicesData,
  features,
  heroContent,
  evolutionData,
} from "../Constants/Data";
import BlogCard from "../Components/BlogCard";
import { WhyChooseUs } from "../Components/WhyChooseUs";
import EvolutionSection from "../Components/EvolutionSection";
import Logo from "../assets/Images/logo.png";
import Whychooseus from "../assets/Images/2.jpeg";
import contact from "../assets/Images/3.jpeg";
import { Link } from "react-router-dom";
import VideoIm from "../assets/Images/4.jpeg";
import Star from "../assets/Images/star.png";
import aboutlarge from "../assets/Images/13.jpeg";
import aboutsmall from "../assets/Images/2.jpeg";
import MobileServicesCarousel from "../Components/MobileServicesCarousel";
import { Helmet } from "react-helmet-async";

export default function Home() {
  const [activeService, setActiveService] = useState(services[0] || {});
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeHeroBar, setActiveHeroBar] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHeroBar((prev) => (prev + 1) % heroContent.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [heroContent.length]);

  // Your exact filter logic preserved
  const filteredServices = useMemo(() => {
    return selectedCategory === "All"
      ? servicesData
      : servicesData.filter((service) =>
          service.title.toLowerCase().includes(selectedCategory.toLowerCase()),
        );
  }, [selectedCategory, servicesData]);

  // Limit like your original UI (first 8)
  const servicesToShow = filteredServices.slice(0, 8);
  const carouselId = "servicesCarousel";

  const categories = ["All", "House", "Office", "Kitchen"];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const visibleServices = filteredServices.slice(0, 8);

  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>
          MS Cleaning Services Australia | Commercial & Residential Cleaning
          Experts
        </title>
        <meta
          name="description"
          content="MS Cleaning Services Australia provides reliable commercial, residential, office, strata, and end-of-lease cleaning solutions. Trusted professional cleaners delivering high-quality, affordable services across Australia."
        />
        <meta
          name="keywords"
          content="MS Cleaning Services, MS Cleaning Australia, professional cleaning services Australia, commercial cleaning Australia, residential cleaning Australia, office cleaning services, strata cleaning, end of lease cleaning, carpet cleaning Australia, deep cleaning services, reliable cleaners Australia, affordable cleaning services, local cleaning company Australia"
        />
        <meta name="author" content="MS Cleaning Services Australia" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mscleaning.com.au/" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="MS Cleaning Services Australia | Professional Cleaning Solutions"
        />
        <meta
          property="og:description"
          content="MS Cleaning Services Australia offers expert commercial and residential cleaning, including office, strata, end-of-lease, and deep cleaning. Quality service you can trust."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mscleaning.com.au/" />
        <meta
          property="og:site_name"
          content="MS Cleaning Services Australia"
        />

        {/* Social Links */}
        <meta
          property="og:see_also"
          content="https://www.instagram.com/no1_mscleaningservices/"
        />
        <meta
          property="og:see_also"
          content="https://www.facebook.com/mspropertycleaningservice"
        />

        {/* Facebook  */}
        <meta property="fb:app_id" content="#" />
        <meta
          property="fb:admins"
          content="https://www.facebook.com/mspropertycleaningservice"
        />

        {/* Instagram */}
        <meta name="instagram:title" content="MS Cleaning Services Australia" />
        <meta
          name="instagram:description"
          content="Professional commercial and residential cleaning services across Australia. Reliable, affordable, and high-quality cleaning solutions."
        />
        <meta name="instagram:site" content="@no1_mscleaningservices" />
      </Helmet>

      <div className="container-fluid p-0">
        {/* Hero Section */}
        <section
          className="hero-section d-flex align-items-center justify-content-center position-relative vh-100"
          style={{
            backgroundImage: `linear-gradient(rgba(14, 52, 64, 0.6), rgba(14, 52, 64, 0.6)), url(${heroContent[activeHeroBar].backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transition: "background-image 0.5s ease-in-out",
          }}
        >
          <div className="d-none d-md-block">
            {/* Left Arrow */}
            <button
              className="hero-arrow hero-arrow-left bg-transparent position-absolute rounded-5 text-white cursor fs-1 d-flex align-items-center justify-content-center"
              onClick={() =>
                setActiveHeroBar(
                  activeHeroBar === 0
                    ? heroContent.length - 1
                    : activeHeroBar - 1,
                )
              }
            >
              <i className="bi bi-arrow-left-short"></i>
            </button>

            {/* Right Arrow */}
            <button
              className="hero-arrow hero-arrow-right bg-transparent position-absolute rounded-5 text-white cursor fs-1 d-flex align-items-center justify-content-center"
              onClick={() =>
                setActiveHeroBar((activeHeroBar + 1) % heroContent.length)
              }
            >
              <i className="bi bi-arrow-right-short"></i>
            </button>
          </div>

          <div className="container text-center text-white h-100 d-flex flex-column justify-content-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeHeroBar}
                className="hero-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <motion.h5
                  className="text-uppercase brand"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  {heroContent[activeHeroBar].title}
                </motion.h5>
                <motion.h1
                  className="display-3 fw-bold"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.2 }}
                >
                  {heroContent[activeHeroBar].heading}
                </motion.h1>
                <motion.p
                  className="lead pb-5"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.3 }}
                >
                  {heroContent[activeHeroBar].description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.4 }}
                >
                  <Link to="/about">
                    <Button text={heroContent[activeHeroBar].buttonText} />
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 3-Bar Navigation - Fixed at bottom */}
          <div className="hero-navigation position-absolute d-flex justify-content-center gap-3">
            {heroContent.map((_, index) => (
              <button
                key={index}
                className={`hero-bar border-0 rounded cursor ${
                  activeHeroBar === index ? "active" : ""
                }`}
                onClick={() => setActiveHeroBar(index)}
              />
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="container p-0">
          <div className="d-md-flex pt-5">
            <div className="col-12 col-md-7 d-flex justify-content-center">
              <div className="about-image-card style-two position-relative">
                {/* LEFT IMAGE */}
                <div className="left-img-wrapper position-absolute p-2 z-1 rounded-4 bg-white">
                  <img
                    src={aboutsmall}
                    alt=""
                    className="img-fluid rounded-4 shadow"
                    style={{ width: "300px" }}
                  />
                </div>

                {/* RIGHT MAIN IMAGE */}
                <div className="main-img-wrapper text-center">
                  <img
                    decoding="async"
                    className="tilt-animate img-fluid rounded-4"
                    src={aboutlarge}
                  />
                </div>

                <div className="circle-overlay d-flex align-items-center justify-content-center z-2 light-bg rounded-circle position-absolute">
                  {" "}
                  <i className="bi bi-stars text-white fs-2"></i>{" "}
                </div>
              </div>
            </div>

            <div className="col-12 col-md-5 pt-5 p-3 d-flex align-items-center justify-content-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
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
                </motion.h6>

                <motion.h1
                  className="fw-semibold text-center text-md-start"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Professional Cleaning <br /> for Every Space
                </motion.h1>

                <motion.p
                  className="para py-2 text-center text-md-start"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  MS Property Cleaning Service offers expert cleaning and
                  maintenance for homes and offices, including kitchen, window -
                  ensuring spotless, functional, and welcoming spaces.
                </motion.p>

                <motion.div
                  className="d-flex fw-semibold justify-content-center justify-content-md-start"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="rounded-circle light-bg icon-container d-flex align-items-center justify-content-center me-3">
                    <i className="bi bi-shield-fill-check text-white"></i>
                  </div>
                  <div>
                    Quality <br />
                    Cleaning
                  </div>
                  <div className="rounded-circle light-bg icon-container d-flex align-items-center justify-content-center ms-5 me-3">
                    <i className="bi bi-person-heart text-white"></i>
                  </div>
                  <div>
                    Customer <br />
                    Service
                  </div>
                </motion.div>

                <motion.p
                  className="border-start border-5 border-primary small ps-3 fst-italic para mt-3"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  "Our mission is to deliver high-quality, reliable, and
                  customer-focused cleaning and maintenance services — ensuring
                  your home and business remain fresh, hygienic, and beautifully
                  maintained every day."
                </motion.p>

                <motion.div
                  className="d-none d-md-flex gap-5 mt-4 justify-content-center justify-content-md-start"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="d-flex align-items-center gap-2">
                    <img src={Logo} alt="CEO" width={220} />
                    {/* <div>
                      <span className="fw-bold">Sonam Jha</span>
                      <br />
                      <h6 className="para">Founder & CEO</h6>
                    </div> */}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Progress Circles Section */}
          <div
            className="p-5 text-white rounded-4 position-relative dark-bg"
            style={{ bottom: "-85px" }}
          >
            <div className="row justify-content-center text-center">
              {progressData.map((item, index) => {
                const radius = 40;
                const circumference = 2 * Math.PI * radius;
                const strokeDashoffset =
                  circumference - (item.percentage / 100) * circumference;

                return (
                  <motion.div
                    key={index}
                    className="col-md-4 d-flex align-items-center justify-content-center gap-3 px-4"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div
                      className="position-relative d-flex justify-content-center align-items-center"
                      style={{ width: "100px", height: "100px" }}
                    >
                      <svg width="100" height="100">
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="#fffff5"
                          strokeWidth="8"
                          fill="none"
                        />
                        <motion.circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="#36b7ff"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={circumference}
                          strokeDashoffset={circumference}
                          strokeLinecap="round"
                          transform="rotate(-90 50 50)"
                          whileInView={{
                            strokeDashoffset: strokeDashoffset,
                          }}
                          transition={{
                            duration: 1.5,
                            ease: "easeOut",
                          }}
                          viewport={{ once: true }}
                        />
                      </svg>
                      <span className="position-absolute fs-5 fw-bold">
                        <CountUp end={item.percentage} suffix="%" />
                      </span>
                    </div>
                    <p className="mt-3 brand fs-5 text-start">{item.title}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <EvolutionSection {...evolutionData} />

        {/* Success Stories Gallery section */}
        <section className="stories py-5">
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h6 className="fw-semibold heading text-uppercase  fs-5 d-flex align-items-center justify-content-center justify-content-md-start gap-2">
                  <img
                    className="star"
                    src={Star}
                    alt="Star"
                    style={{ width: "30px", height: "30px" }}
                  ></img>
                  Success Stories
                </h6>
                <h2 className="display-5 fw-semibold mb-5 text-center text-md-start">
                  Empowering Journeys of Change
                </h2>
              </div>

              <div className="col-md-6">
                <p className="para text-center text-md-start">
                  We prioritize customer satisfaction by crafting personalized
                  cleaning plans tailored to your schedule and budget, ensuring
                  consistent, reliable, and high-quality service that exceeds
                  expectations every time.
                </p>
                <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3">
                  <Link to="/services" className="text-decoration-none">
                    <p className="text-dark mb-0">
                      View All <i className="bi bi-arrow-right fs-5 ms-2"></i>
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="d-none d-md-flex justify-content-center py-4">
              <ul className="nav">
                {categories.map((category) => (
                  <li key={category} className="nav-item">
                    <button
                      className={`mx-3 border-0 bg-transparent ${
                        selectedCategory === category
                          ? "heading fw-bold"
                          : "text-color1 fw-semibold"
                      }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile: dots slider; Desktop/Tablet: grid */}
            {visibleServices.length > 0 ? (
              isMobile ? (
                <div className="pb-5">
                  <MobileServicesCarousel services={visibleServices} />
                </div>
              ) : (
                <div className="row g-4 pb-5">
                  {visibleServices.map((service) => (
                    <BlogCard key={service.id} service={service} />
                  ))}
                </div>
              )
            ) : (
              <p className="text-center text-muted">
                No services available for this category.
              </p>
            )}
          </div>
        </section>

        {/* Video Section */}
        <section className="dark-bg py-5">
          <div className="container">
            <div className="video-stats row rounded-4 g-0 w-100 d-flex justify-content-center align-items-center position-relative">
              <div className="col-md-4 position-relative d-flex justify-content-md-between align-items-center light-bg number d-flex flex-column">
                {/* Stats Row - Mobile Layout */}
                <div className="d-flex flex-row justify-content-between align-items-center w-100 px-3 py-4 d-md-none">
                  {/* 1st Stat */}
                  <div className="d-flex flex-column align-items-center text-center stat-item">
                    <i className="bi bi-people dark-text display-6 mb-2"></i>
                    <span className="fs-4 text-white fw-bold mb-1">
                      <CountUp end={12} suffix="+" />
                    </span>
                    <p className="fs-6 fw-semibold text-white mb-0 text-center">
                      Services <br /> Years
                    </p>
                  </div>

                  {/* 2nd Stat */}
                  <div className="d-flex flex-column align-items-center text-center stat-item">
                    <i className="bi bi-people dark-text display-6 mb-2"></i>
                    <span className="fs-4 text-white fw-bold mb-1">
                      <CountUp end={22} suffix="+" />
                    </span>
                    <p className="fs-6 fw-semibold text-white mb-0 text-center">
                      Experts <br /> Team
                    </p>
                  </div>

                  {/* 3rd Stat */}
                  <div className="d-flex flex-column align-items-center text-center stat-item">
                    <i className="bi bi-people dark-text display-6 mb-2"></i>
                    <span className="fs-4 text-white fw-bold mb-1">
                      <CountUp end={62} suffix="+" />
                    </span>
                    <p className="fs-6 fw-semibold text-white mb-0 text-center">
                      Finished <br /> Works
                    </p>
                  </div>
                </div>

                {/* Desktop Layout - Original Structure */}
                <div className="d-none d-md-flex flex-column w-100">
                  {/* 1st Stat */}
                  <div className="d-flex flex-md-row flex-column text-md-start text-center justify-content-between gap-5 py-5 stat-row w-100 px-5">
                    <i className="bi bi-people dark-text display-3 mb-md-0 mb-3"></i>
                    <span className="fs-1 text-white fw-bold mb-md-0 mb-2">
                      <CountUp end={12} suffix="+" />
                    </span>
                    <p className="fs-3 fw-semibold text-white mb-0">
                      Services <br /> Years
                    </p>
                  </div>

                  {/* 2nd Stat */}
                  <div className="d-flex flex-md-row flex-column text-md-start text-center justify-content-between gap-5 py-5 stat-row w-100 px-5">
                    <i className="bi bi-people dark-text display-3 mb-md-0 mb-3"></i>
                    <span className="fs-1 text-white fw-bold mb-md-0 mb-2">
                      <CountUp end={22} suffix="+" />
                    </span>
                    <p className="fs-3 fw-semibold text-white mb-0">
                      Experts <br /> Team
                    </p>
                  </div>

                  {/* 3rd Stat */}
                  <div className="d-flex flex-md-row flex-column text-md-start text-center justify-content-between gap-5 py-5 w-100 px-5">
                    <i className="bi bi-people dark-text display-3 mb-md-0 mb-3"></i>
                    <span className="fs-1 text-white fw-bold mb-md-0 mb-2">
                      <CountUp end={62} suffix="+" />
                    </span>
                    <p className="fs-3 fw-semibold text-white mb-0">
                      Finished <br /> Works
                    </p>
                  </div>
                </div>
              </div>

              {/* Highlighted Video Section */}
              <div className="col-md-8 position-relative d-flex justify-content-center align-items-center number">
                <div className="position-relative w-100 h-100">
                  <img
                    src={VideoIm}
                    alt="Cleaning Service"
                    className="w-100 h-100 object-fit-cover"
                  />
                  {/* Background Opacity Overlay */}
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
                </div>
                <div
                  className="position-absolute text-white text-center mt-md-5 mt-3 p-md-5 p-3"
                  style={{
                    transform: "translateY(-50%)",
                    top: "50%",
                  }}
                >
                  <div className="mb-5 position-relative d-flex align-items-center justify-content-center justify-content-md-start">
                    <div className="popup-video-wrapper position-relative">
                      <a
                        href="/"
                        className="popup-video light-bg d-flex align-items-center justify-content-center rounded-circle position-relative z-2 overflow-visible cursor"
                      >
                        <i className="bi bi-play-fill fs-1 text-white"></i>
                      </a>
                      <span className="ripple position-absolute top-50 start-50 rounded-circle z-1"></span>
                    </div>
                  </div>

                  <h1 className="fw-bold display-md-5 fs-6 text-md-start text-center">
                    Witness the Glow: Where Clean Meets Perfection{" "}
                  </h1>
                </div>
              </div>
            </div>

            <div className="d-md-flex align-items-center mb-5">
              <div className="col-md-6">
                <h6 className="fw-semibold heading text-uppercase text-white fs-5 d-flex align-items-center justify-content-center justify-content-md-start gap-2">
                  <img
                    className="star"
                    src={Star}
                    alt="Star"
                    style={{ width: "30px", height: "30px" }}
                  ></img>
                  Services
                </h6>
                <h2 className="text-white fs-1 text-center text-md-start">
                  Our Wide Area of Services
                </h2>
              </div>

              <div className="col-md-6">
                <p className="para text-center text-md-start">
                  MS Property Cleaning Service provides expert residential,
                  office, kitchen, and window cleaning services, ensuring
                  spotless results, reliability, and professional property care
                  every time
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* services section */}
        <section>
          <div className="container">
            {/* Tabs Section */}
            <div
              className="row text-center shadow rounded-4 overflow-hidden position-relative"
              style={{ top: "-60px" }}
            >
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`col-md-3 p-4 d-flex flex-column align-items-center justify-content-center 
      ${
        activeService.id === service.id
          ? "light-bg text-white"
          : "bg-white text-dark"
      } 
      border-end`}
                  style={{ cursor: "pointer", minHeight: "100px" }}
                  onClick={() => setActiveService(service)}
                >
                  <i
                    className={`bi ${service.icon} ${
                      activeService.id === service.id
                        ? "text-white"
                        : "highlight"
                    } fs-3`}
                  ></i>
                  <span className="mt-2 brand">{service.name}</span>
                </div>
              ))}
            </div>

            {/* House Cleaning Section */}
            <div className="row align-items-center">
              <div
                className="col-md-6 position-relative "
                style={{ height: "400px" }}
              >
                <img
                  src={activeService.image}
                  alt={activeService.name}
                  className="rounded-3 w-100 h-100 object-fit-cover"
                />
              </div>

              <div className="col-md-6 mt-4 mt-0">
                <h6 className="heading fs-5 text-uppercase text-center text-md-start fw-semibold mb-3">
                  {activeService.name}
                </h6>

                <h2 className="fw-bold text-center text-md-start fw-semibold mb-4">
                  {activeService.title}
                </h2>
                <p className="para text-center text-md-start">
                  {activeService.description}
                </p>

                <div className="row">
                  {activeService?.features?.map((feature, index) => (
                    <div key={index} className="col-6">
                      <p className="d-flex gap-2 para ">
                        <i className="bi bi-check2-all highlight"></i> {feature}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3 py-3">
                  <Link to="/servicedetails">
                    <Button text="Read More" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-5">
          <div className="container">
            <WhyChooseUs
              title="WHY CHOOSE US"
              subtitle="Making Life Cleaner and Easier"
              features={features}
              imageSrc={Whychooseus}
            />
          </div>
        </section>

        {/* Get a quoate Section */}
        <section className="pb-5 overflow-x-hidden">
          <div className="row align-items-center pb-3 pb-md-5 px-3 px-md-0">
            {/* Left Side */}
            <div
              className="col-md-6 position-relative rounded-4 mb-3"
              style={{
                backgroundImage: `url(${contact})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "500px",
              }}
            >
              <div className="position-absolute bottom-0 p-3 light-bg text-white rounded-2 shadow-lg call-box me-3 mb-3">
                <div className="d-flex align-items-center gap-3">
                  <span className="dark-bg rounded-circle px-3 py-2">
                    <i className="bi bi-telephone-fill text-white fs-4"></i>
                  </span>
                  <div className="text-start">
                    <p className="mb-1 small">Need Help? Call Us</p>
                    <h5 className="mb-0">0412 147 211</h5>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="col-md-4 d-flex flex-column ms-0 ms-md-5">
              <QuoteForm />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
