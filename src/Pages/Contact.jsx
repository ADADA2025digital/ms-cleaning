import { useState, useRef, useEffect } from "react";
import PageBanner from "../Components/PageBanner";
import Button from "../Components/Button";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    subject: false,
    message: false,
  });

  const [showCaptcha, setShowCaptcha] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaError, setCaptchaError] = useState("");
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });

  const recaptchaRef = useRef(null);
  const alertTimeoutRef = useRef(null);

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = "service_atcmru7"; // Your EmailJS service ID
  const EMAILJS_TEMPLATE_ID = "template_xjwh0fb"; // Your EmailJS template ID
  const EMAILJS_PUBLIC_KEY = "1JhpDFWb4tZlLmkCh"; // Your EmailJS public key
  const RECAPTCHA_SITE_KEY = "6LfyMU8sAAAAAMtpmB3cfhCn4iCsDrK-y_8-ysLj";

  // Clear alert timeout on unmount
  useEffect(() => {
    return () => {
      if (alertTimeoutRef.current) {
        clearTimeout(alertTimeoutRef.current);
      }
    };
  }, []);

  const showAlert = (type, message, autoHide = true) => {
    // Clear any existing timeout
    if (alertTimeoutRef.current) {
      clearTimeout(alertTimeoutRef.current);
    }

    setAlert({ show: true, type, message });

    if (autoHide) {
      alertTimeoutRef.current = setTimeout(() => {
        setAlert({ show: false, type: "", message: "" });
      }, 5000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));

    // Hide alert when user starts typing again
    if (alert.show) {
      setAlert({ show: false, type: "", message: "" });
      if (alertTimeoutRef.current) {
        clearTimeout(alertTimeoutRef.current);
      }
    }

    // Show captcha when message field has content
    if (name === "message") {
      if (value.trim().length > 0) {
        setShowCaptcha(true);
      } else {
        setShowCaptcha(false);
        // Clear any captcha error when message is cleared
        setCaptchaError("");
      }
    }

    // Clear error for this field if user starts typing
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    // Validate the field
    validateField(name, formValues[name]);
  };

  // Reset captcha when message becomes empty
  useEffect(() => {
    if (formValues.message.trim().length === 0 && showCaptcha) {
      setShowCaptcha(false);
      setCaptchaError("");
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
    }
  }, [formValues.message, showCaptcha]);

  const handleRecaptchaChange = (token) => {
    if (token) {
      setCaptchaError("");
    }
  };

  const validateField = (fieldName, value) => {
    let error = "";

    switch (fieldName) {
      case "name":
        const nameTrimmed = value.trim();
        const nameRegex = /^[A-Za-z][A-Za-z\s'.-]{1,}$/;
        if (nameTrimmed.length < 2 || !nameRegex.test(nameTrimmed)) {
          error = "Please enter your full name (letters and spaces).";
        }
        break;

      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if (!emailRegex.test(value.trim())) {
          error = "Please enter a valid email address.";
        }
        break;

      case "phone":
        const digits = value.replace(/\D/g, "");
        if (digits.length < 10 || digits.length > 15) {
          error = "Please enter a valid phone number (10-15 digits).";
        }
        break;

      case "subject":
        if (value.trim().length < 3) {
          error = "Subject must be at least 3 characters.";
        }
        break;

      case "message":
        if (value.trim().length < 10) {
          error = "Message must be at least 10 characters.";
        }
        break;

      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [fieldName]: error }));
    return error === "";
  };

  const validateAll = () => {
    const fields = ["name", "email", "phone", "subject", "message"];
    let isValid = true;

    fields.forEach((field) => {
      if (!validateField(field, formValues[field])) {
        isValid = false;
      }
    });

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setCaptchaError("");

    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      phone: true,
      subject: true,
      message: true,
    });

    // Validate all form fields
    if (!validateAll()) {
      setIsSubmitting(false);
      showAlert(
        "danger",
        "Please fix the errors in the form before submitting.",
        false,
      );
      return;
    }

    // If message has content, we need to verify captcha
    if (showCaptcha) {
      if (!recaptchaRef.current) {
        setCaptchaError("reCAPTCHA not loaded. Please refresh the page.");
        setIsSubmitting(false);
        showAlert("danger", "reCAPTCHA not loaded. Please refresh the page.");
        return;
      }

      const captchaValue = recaptchaRef.current.getValue();

      if (!captchaValue) {
        setCaptchaError(
          "Please complete the reCAPTCHA verification before submitting.",
        );
        setIsSubmitting(false);
        showAlert(
          "danger",
          "Please complete the reCAPTCHA verification before submitting.",
          false,
        );
        return;
      }
    }

    try {
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formValues.name,
          email: formValues.email,
          phone: formValues.phone,
          service: formValues.subject || "General Inquiry", // Use subject as service, or default
          description: formValues.message,
          submitted_at: new Date().toLocaleString(),
          current_year: new Date().getFullYear(),
          captcha_token: showCaptcha ? recaptchaRef.current.getValue() : "",
        },
        EMAILJS_PUBLIC_KEY,
      );

      showAlert(
        "success",
        "Thanks! Your message has been submitted successfully.",
      );

      // Reset form
      setFormValues({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setTouched({
        name: false,
        email: false,
        phone: false,
        subject: false,
        message: false,
      });
      setErrors({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setShowCaptcha(false);
      setCaptchaError("");

      // Reset captcha
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
    } catch (err) {
      console.error("EmailJS Error:", err);
      showAlert("danger", "Failed to send message. Please try again.");

      // Reset captcha on error
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeAlert = () => {
    setAlert({ show: false, type: "", message: "" });
    if (alertTimeoutRef.current) {
      clearTimeout(alertTimeoutRef.current);
    }
  };

  return (
    <>
      <div className="container-fluid p-0">
        <PageBanner
          title="Contact Us"
          subtitle="Home / Contact"
          backgroundImage="/hero.jpg"
        />

        <section className="container contact py-5">
          <div className="row pb-5">
            <div className="col-md-4 d-flex flex-md-column justify-content-center justify-content-md-start gap-4 mb-5">
              <div className="d-flex align-items-center">
                <a
                  href="https://maps.app.goo.gl/Q9RaF2idVruUsUuq9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="light-bg text-white rounded-circle d-flex align-items-center justify-content-center me-3 p-3"
                >
                  <i className="bi bi-geo-alt-fill fs-4"></i>
                </a>
                <div className="d-none d-md-block">
                  <h4 className="heading fw-semibold">Address</h4>
                  <p className="mb-0 ">
                    <a
                      href="https://maps.app.goo.gl/Q9RaF2idVruUsUuq9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" text-decoration-none para "
                    >
                      26 Spearwood Rise, Cranbourne West VIC 3977
                    </a>
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <a
                  href="tel:0412 147 211"
                  className="light-bg text-white rounded-circle d-flex align-items-center justify-content-center me-3 p-3"
                >
                  <i className="bi bi-telephone-fill fs-4"></i>
                </a>
                <div className="d-none d-md-block">
                  <h4 className="heading fw-semibold">Phone</h4>
                  <p className="mb-0 ">
                    <a
                      href="tel:0412 147 211"
                      className="para text-decoration-none"
                    >
                      +0412 147 211
                    </a>
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <a
                  href="mailto:admin@mscleaning.com.au"
                  className="light-bg text-white rounded-circle d-flex align-items-center justify-content-center me-3 p-3"
                >
                  <i className="bi bi-envelope-fill fs-4"></i>
                </a>
                <div className="d-none d-md-block">
                  <h4 className="heading fw-semibold">Email</h4>
                  <p className="mb-0 ">
                    <a
                      href="mailto:admin@mscleaning.com.au"
                      className="para text-decoration-none"
                    >
                      admin@mscleaning.com.au
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-8">
              <h2 className="fw-bold text-center text-md-start">
                Send Us A Message
              </h2>
              <form className="mt-4" onSubmit={handleSubmit} noValidate>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className={`form-control py-3 ${
                        touched.name && errors.name ? "is-invalid" : ""
                      }`}
                      placeholder="Your name"
                      name="name"
                      value={formValues.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                    {touched.name && errors.name ? (
                      <small className="text-danger">{errors.name}</small>
                    ) : null}
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className={`form-control py-3 ${
                        touched.email && errors.email ? "is-invalid" : ""
                      }`}
                      placeholder="Your email"
                      name="email"
                      value={formValues.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                    {touched.email && errors.email ? (
                      <small className="text-danger">{errors.email}</small>
                    ) : null}
                  </div>
                  <div className="col-md-6">
                    <input
                      type="tel"
                      className={`form-control py-3 ${
                        touched.phone && errors.phone ? "is-invalid" : ""
                      }`}
                      placeholder="Your phone"
                      name="phone"
                      value={formValues.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.phone && errors.phone ? (
                      <small className="text-danger">{errors.phone}</small>
                    ) : null}
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className={`form-control py-3 ${
                        touched.subject && errors.subject ? "is-invalid" : ""
                      }`}
                      placeholder="Subject"
                      name="subject"
                      value={formValues.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.subject && errors.subject ? (
                      <small className="text-danger">{errors.subject}</small>
                    ) : null}
                  </div>
                  <div className="col-12">
                    <textarea
                      className={`form-control py-3 ${
                        touched.message && errors.message ? "is-invalid" : ""
                      }`}
                      rows="4"
                      placeholder="Write your message here"
                      name="message"
                      value={formValues.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    ></textarea>
                    {touched.message && errors.message ? (
                      <small className="text-danger">{errors.message}</small>
                    ) : null}
                  </div>

                  {/* reCAPTCHA Section - Only shown when message has content */}
                  {showCaptcha && (
                    <div className="col-12">
                      <div className="mb-3">
                        <ReCAPTCHA
                          ref={recaptchaRef}
                          sitekey={RECAPTCHA_SITE_KEY}
                          onChange={handleRecaptchaChange}
                          theme="light"
                          size="normal"
                        />
                        {captchaError && (
                          <small className="text-danger d-block mt-1">
                            {captchaError}
                          </small>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="col-12">
                    <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3 py-2">
                      <Button
                        text={isSubmitting ? "Submitting..." : "Submit"}
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Alert Message */}
                    {alert.show && (
                      <div
                        className={`alert alert-${alert.type} alert-dismissible fade show mb-4`}
                        role="alert"
                      >
                        {alert.message}
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
