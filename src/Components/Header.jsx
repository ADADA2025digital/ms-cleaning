import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "../assets/Images/logo.png";
import Button from "../Components/Button";

export default function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Navigation data
  const navigationItems = [
    { path: "/", label: "Home", hasActiveState: true },
    { path: "/about", label: "About", hasActiveState: true },
    { path: "/services", label: "Service", hasActiveState: false },
    { path: "/blogs", label: "Blogs", hasActiveState: false },
    { path: "/contact", label: "Contact", hasActiveState: true },
  ];

  // Social media links data
  const socialLinks = [
    { icon: "bi-facebook", href: "#" },
    { icon: "bi-instagram", href: "#" },
    { icon: "bi-youtube", href: "#" },
  ];

  // Contact info data
  const contactInfo = [
    {
      icon: "bi-telephone-fill",
      text: "0412 147 211",
      href: "tel:0412147211",
    },
    {
      icon: "bi-envelope-fill",
      text: "admin@mscleaning.com.au",
      href: "mailto:admin@mscleaning.com.au",
    },
    {
      icon: "bi-geo-alt-fill",
      text: "26 Spearwood Rise, Cranbourne West VIC 3977",
      href: "https://maps.app.goo.gl/Q9RaF2idVruUsUuq9",
    },
  ];

  // Scroll + resize listeners (disable scroll-hide on mobile)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeOffcanvas = () => {
    if (typeof document !== "undefined") {
      const offcanvas = document.querySelector(".offcanvas.show");
      if (offcanvas) {
        const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
        offcanvasInstance.hide();
      }
    }
  };

  return (
    <>
      <div className="container-fluid p-0">
        <div className="fixed-top">
          <div
            className={`header d-none d-md-flex text-white pt-2 pb-4 transition-all duration-300 ${
              !isMobile && isScrolled
                ? "transform -translate-y-full opacity-0"
                : "transform translate-y-0 opacity-100"
            }`}
            style={{
              transition: "all 0.3s ease-in-out",
              transform:
                !isMobile && isScrolled ? "translateY(-100%)" : "translateY(0)",
              opacity: !isMobile && isScrolled ? 0 : 1,
            }}
          >
            <div className="container d-flex justify-content-between align-items-center py-0">
              <div className="d-flex align-items-center mb-2 cursor-pointer">
                {contactInfo.map((contact, index) => (
                  <span
                    key={index}
                    className="px-3"
                    style={{
                      borderRight:
                        index < contactInfo.length - 1
                          ? "1px solid #fff"
                          : "none",
                    }}
                  >
                    <a
                      href={contact.href}
                      className="text-white small"
                      style={{ textDecoration: "none" }}
                      target={
                        contact.icon === "bi-geo-alt-fill"
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        contact.icon === "bi-geo-alt-fill"
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      <i className={`bi ${contact.icon} me-1`}></i>{" "}
                      {contact.text}
                    </a>
                  </span>
                ))}
              </div>

              <div className="d-flex gap-4">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.href} className="text-white">
                    <i className={`bi ${social.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <nav
            className={`navbar navbar-expand-lg bg-white shadow py-0 ${
              isScrolled ? "container-fluid" : "container"
            }`}
            style={{
              transition: "all 0.3s ease-in-out",
              transform:
                !isMobile && isScrolled ? "translateY(-40px)" : "translateY(0)",
              borderRadius: !isMobile && isScrolled ? "0" : "0.75rem",
            }}
          >
            <div className="container">
              {/* Logo - LEFT */}
              <Link
                className="navbar-brand d-flex align-items-center py-1"
                to="/"
              >
                <img src={Logo} alt="Logo" height={65} />
              </Link>

              {/* Mobile toggle */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* Links - RIGHT */}
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  {navigationItems.map((item, index) => (
                    <li
                      key={index}
                      className="nav-item position-relative px-2 py-3"
                    >
                      <Link
                        className={`nav-link ${
                          item.hasActiveState && location.pathname === item.path
                            ? "active highlight"
                            : ""
                        }`}
                        to={item.path}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>

          {/* Offcanvas Menu */}
          <div
            className="offcanvas offcanvas-end w-100"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header border-light border-bottom text-white">
              <img src={Logo} alt="Logo" height={40} />
              <button
                type="button"
                className="btn-close bg-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body text-white d-flex flex-column align-items-center justify-content-center vh-100 gap-5">
              <ul className="navbar-nav text-center gap-4">
                {navigationItems.map((item, index) => (
                  <li key={index} className="nav-item mb-3">
                    <Link
                      className={`nav-link fw-bold fs-3 ${
                        item.hasActiveState && location.pathname === item.path
                          ? "active"
                          : ""
                      }`}
                      to={item.path}
                      onClick={closeOffcanvas}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="d-flex gap-4">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.href} className="text-white fs-2">
                    <i className={`bi ${social.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
