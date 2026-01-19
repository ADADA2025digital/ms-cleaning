import im1 from "../assets/Images/5.jpeg";
import im2 from "../assets/Images/2.jpeg";
import { LuSendHorizontal } from "react-icons/lu";
import Logo from "../assets/Images/logo.png";

export default function Footer() {
  const serviceLinks = [
    { label: "Commercial Kitchen Cleaning", href: "#" },
    { label: "Steam Cleaning", href: "#" },
    { label: "End of Lease Cleaning", href: "#" },
    { label: "Tile Cleaning", href: "#" },
    { label: "Builder Cleaning", href: "#" },
    { label: "Pressure Wash Cleaning", href: "#" },
    { label: "Office Cleaning", href: "#" },
    { label: "Commercial Cleaning", href: "#" },
    { label: "Window Cleaning", href: "#" },
  ];

  const socialLinks = [
    { href: "facebook.com", icon: "bi-facebook" },
    { href: "twitter.com", icon: "bi-instagram" },
    { href: "linkedin.com", icon: "bi-youtube" },
  ];

  const recentPosts = [
    {
      img: im1,
      date: "February 20, 2024",
      title: "Ditch the Bunnies:   Invest in Cleanliness",
      wrapperStyle: { height: "70px", width: "70px" },
      wrapperClass: "rounded-5",
    },
    {
      img: im2,
      date: "February 24, 2024",
      title: "From Chaos to Calm:  How a Cleaning",
      wrapperStyle: { height: "70px", width: "70px" },
      wrapperClass: "",
    },
  ];

  const phoneNumber = "0412 147 211";
  const emailAddress = "admin@mscleaning.com.au";
  return (
    <div className="container-fluid p-0">
      <footer className="text-white dark-bg">
        <div className="container">
          <div
            className="mt-4 rounded position-relative"
            style={{ top: "-80px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3139.0988130870946!2d145.245559!3d-38.114635500000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad60e8a8b531509%3A0x895d639bab8e7c61!2s26%20Spearwood%20Rise%2C%20Cranbourne%20West%20VIC%203977%2C%20Australia!5e0!3m2!1sen!2slk!4v1761038936640!5m2!1sen!2slk"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-3"
            ></iframe>
          </div>

          <div className="row mb-4">
            <div className="col-lg-8 text-center text-md-start">
              <h1>Call for A Free Quote</h1>
              <p>
                Get fast, reliable and affordable cleaning services tailored to
                your property. Contact us today for a free quote with no
                obligation{" "}
              </p>
            </div>
            <div className="col-lg-4 ">
              <div className="d-flex align-items-center justify-content-center justify-content-md-end mb-3">
                <a
                  href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                  className="call-circle light-bg d-flex cursor align-items-center justify-content-center me-3 rounded-circle p-2"
                  style={{ width: "70px", height: "70px" }}
                >
                  <i className="bi bi-telephone-fill fs-4 text-white"></i>
                </a>
                <div>
                  <h6 className="text-info">Call Us</h6>
                  <p className="mb-0 fs-3 fw-bold">
                    <a
                      href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                      className="text-white text-decoration-none"
                    >
                      {phoneNumber}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className="row gy-4 my-4">
            {/* Column 1: Logo & About */}
            <div className="col-lg-3 d-flex flex-column align-items-center align-items-md-start ">
              <img src={Logo} alt="Logo" height={65} className="mb-3" />
              <p className="pt-2 cursor small">
                <i className="bi bi-geo-alt-fill me-2"></i> 26 Spearwood Rise,
                Cranbourne West VIC 3977
              </p>
              <p className="cursor small">
                <i className="bi bi-envelope me-2"></i>
                <a
                  href={`mailto:${emailAddress}`}
                  className="text-color4 text-decoration-none"
                >
                  {emailAddress}
                </a>
              </p>
              <p className="cursor small">
                <i className="bi bi-telephone-fill me-2"></i>
                <a
                  href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                  className="text-color4 text-decoration-none"
                >
                  {phoneNumber}
                </a>
              </p>
              <div className="d-flex gap-4">
                {socialLinks.map((s, idx) => (
                  <a key={idx} href={s.href} className="text-white">
                    <i className={`bi ${s.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Useful Links */}
            <div className="col-lg-3 d-flex flex-column align-items-center align-items-md-start">
              <h5 className="fw-bold my-3 text-white">Service Links</h5>
              <ul className="list-unstyled footer-links lh-lg">
                {serviceLinks.map((link, idx) => (
                  <li key={idx} className="d-flex justify-content-center justify-content-md-start">
                    <i className="bi bi-chevron-right small"></i>
                    <a
                      href={link.href}
                      className="small position-relative text-decoration-none"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Recent post */}
            <div className="col-lg-3 d-flex flex-column align-items-center align-items-md-start">
              <h5 className="fw-bold my-3 text-white">Recent Posts</h5>
              {recentPosts.map((post, idx) => (
                <div
                  key={idx}
                  className={`d-flex ${
                    idx === 0 ? "justify-content-center" : ""
                  }`}
                >
                  <div className={post.wrapperClass} style={post.wrapperStyle}>
                    <img
                      src={post.img}
                      alt=""
                      className="w-100 h-100 rounded-3"
                    />
                  </div>
                  <div className="ms-3">
                    <p className={idx === 0 ? "mb-2 small" : "mb-1 small"}>
                      {post.date}
                    </p>
                    <p className="small">
                      {post.title.split("  ").map((line, i) => (
                        <span key={i}>
                          {line}
                          {i === 0 ? <br /> : null}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Column 4:News letter */}
            <div className="col-lg-3 d-flex flex-column align-items-center align-items-md-start">
              <h5 className="fw-bold my-3 text-white">Newsletter</h5>
              <p className="text-center text-md-start small">
                Stay updated on the latest news, promotions, and cleaning tips
                by subscribing to our newsletter.
              </p>
              <div className="position-relative w-100">
                <input
                  type="email"
                  className="form-control p-3 border-0 rounded-0"
                  placeholder="Your email here"
                />
                <button
                  type="button"
                  className="position-absolute end-0 top-50 translate-middle-y bg-white border-0 me-2 d-flex align-items-center justify-content-center "
                  style={{ width: "40px", height: "40px" }}
                  aria-label="Send"
                  title="Send"
                >
                  <LuSendHorizontal />
                </button>
              </div>
            </div>
          </div>

          <hr className="m-0" />

          <div className="row py-3 align-items-center text-center text-md-start">
            <p className="mb-0 text-center small">
              All rights reserved. {new Date().getFullYear()} &copy;{" "}
              <strong className="text-white">
                MS Property Cleaning Service
              </strong>
              <br />
              Web solution by ADADA Digital
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
