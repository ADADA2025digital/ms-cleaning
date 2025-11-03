import React, { useState, useEffect } from "react";

const ScrollToTopUp = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`scroll-to-top light-bg rounded-0 fs-5 cursor ${
        visible ? "show" : ""
      } d-flex align-items-center justify-content-center position-fixed back-light z-3`}
      onClick={scrollToTop}
    >
      <i className="bi bi-arrow-up text-white"></i>
    </div>
  );
};

export default ScrollToTopUp;
