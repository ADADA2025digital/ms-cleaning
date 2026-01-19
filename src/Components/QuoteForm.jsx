import { useState, useRef, useEffect } from "react";
import Button from "./Button";
import Star from "../assets/Images/star.png";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaError, setCaptchaError] = useState("");
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });

  const recaptchaRef = useRef(null);
  const alertTimeoutRef = useRef(null);

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

  const validators = {
    name: (value) => {
      const nameRegex = /^[A-Za-z][A-Za-z\s.'-]{1,49}$/;
      if (!value) return "Name is required";
      if (!nameRegex.test(value)) return "Enter a valid name";
      return "";
    },
    email: (value) => {
      const emailRegex =
        /^[\w.!#$%&'*+/=?`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/;
      if (!value) return "Email is required";
      if (!emailRegex.test(value)) return "Enter a valid email";
      return "";
    },
    phone: (value) => {
      if (!value) return "Phone is required";
      const digits = value.replace(/\D/g, "");
      if (digits.length < 10 || digits.length > 15)
        return "Enter a valid phone number";
      return "";
    },
    service: (value) => {
      if (!value) return "Please select a service";
      return "";
    },
    description: (value) => {
      if (!value) return "Description is required";
      const descRegex = /^[\s\S]{10,500}$/;
      if (!descRegex.test(value)) return "Describe your needs (min 10 chars)";
      return "";
    },
  };

  const validateAll = (data) => {
    return {
      name: validators.name(data.name),
      email: validators.email(data.email),
      phone: validators.phone(data.phone),
      service: validators.service(data.service),
      description: validators.description(data.description),
    };
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const next = { ...formData, [name]: value };
    setFormData(next);

    // Hide alert when user starts typing again
    if (alert.show) {
      setAlert({ show: false, type: "", message: "" });
      if (alertTimeoutRef.current) {
        clearTimeout(alertTimeoutRef.current);
      }
    }

    // Show captcha when description field has content
    if (name === "description") {
      if (value.trim().length > 0) {
        setShowCaptcha(true);
      } else {
        setShowCaptcha(false);
        // Clear any captcha error when description is cleared
        setCaptchaError("");
      }
    }

    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validators[name](value) }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({
      ...prev,
      [name]: validators[name](formData[name]),
    }));
  };

  // Reset captcha when description becomes empty
  useEffect(() => {
    if (formData.description.trim().length === 0 && showCaptcha) {
      setShowCaptcha(false);
      setCaptchaError("");
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
    }
  }, [formData.description, showCaptcha]);

  const handleRecaptchaChange = (token) => {
    if (token) {
      setCaptchaError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setCaptchaError("");

    // Validate all form fields
    const nextErrors = validateAll(formData);
    setErrors(nextErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
      service: true,
      description: true,
    });

    // Check for form errors
    const hasError = Object.values(nextErrors).some((msg) => msg);
    if (hasError) {
      setIsSubmitting(false);
      showAlert(
        "danger",
        "Please fix the errors in the form before submitting.",
        false,
      );
      return;
    }

    // If description has content, we need to verify captcha
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
      // Send email
      await emailjs.send(
        "service_atcmru7",
        "template_xjwh0fb",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          description: formData.description,
          submitted_at: new Date().toLocaleString(),
          current_year: new Date().getFullYear(),
          captcha_token: showCaptcha ? recaptchaRef.current.getValue() : "",
        },
        "1JhpDFWb4tZlLmkCh",
      );

      showAlert(
        "success",
        "Thanks! Your request has been submitted successfully.",
      );

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        description: "",
      });
      setTouched({});
      setErrors({});
      setShowCaptcha(false);
      setCaptchaError("");

      // Reset captcha
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
    } catch (err) {
      console.error("Error:", err);
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
      <h6 className="fw-semibold heading text-uppercase fs-5 d-flex align-items-center justify-content-center justify-content-md-start gap-2">
        <img
          className="star"
          src={Star}
          alt="Star"
          style={{ width: "30px", height: "30px" }}
        ></img>
        LET'S WORK TOGETHER
      </h6>
      <h2 className="fw-bold text-center text-md-start">Contact Us</h2>

      <form className="mt-4" onSubmit={handleSubmit} noValidate>
        <div className="row g-3">
          <div className="col-md-6 ">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-control py-3 ${
                touched.name && errors.name ? "is-invalid" : ""
              }`}
              placeholder="Your name"
            />
            {touched.name && errors.name ? (
              <div className="text-danger small mt-1">{errors.name}</div>
            ) : null}
          </div>
          <div className="col-md-6 ">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-control py-3 ${
                touched.email && errors.email ? "is-invalid" : ""
              }`}
              placeholder="Your email"
            />
            {touched.email && errors.email ? (
              <div className="text-danger small mt-1">{errors.email}</div>
            ) : null}
          </div>
          <div className="col-md-6">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-control py-3 ${
                touched.phone && errors.phone ? "is-invalid" : ""
              }`}
              placeholder="Your phone"
            />
            {touched.phone && errors.phone ? (
              <div className="text-danger small mt-1">{errors.phone}</div>
            ) : null}
          </div>
          <div className="col-md-6">
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-select py-3 ${
                touched.service && errors.service ? "is-invalid" : ""
              }`}
            >
              <option value="">Select Service</option>
              <option value="House Cleaning">House Cleaning</option>
              <option value="Office Cleaning">Office Cleaning</option>
              <option value="Plumbing">Plumbing</option>
            </select>
            {touched.service && errors.service ? (
              <div className="text-danger small mt-1">{errors.service}</div>
            ) : null}
          </div>
          <div className="col-12">
            <textarea
              className={`form-control py-3 ${
                touched.description && errors.description ? "is-invalid" : ""
              }`}
              rows="3"
              name="description"
              value={formData.description}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Describe your needs"
            ></textarea>
            {touched.description && errors.description ? (
              <div className="text-danger small mt-1">{errors.description}</div>
            ) : null}
          </div>

          {/* reCAPTCHA Section - Only shown when description has content */}
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
                  <div className="text-danger small mt-1">{captchaError}</div>
                )}
              </div>
            </div>
          )}

          <div className="col-12">
            <div className="d-flex align-items-center gap-3 py-3">
              <Button
                text={isSubmitting ? "Submitting..." : "Submit"}
                type="submit"
                disabled={isSubmitting}
              />
            </div>

            {/* Alert Message */}
            {alert.show && (
              <div
                className={`alert alert-${alert.type} alert-dismissible fade show`}
                role="alert"
              >
                {alert.message}
              </div>
            )}
          </div>
        </div>
      </form>
    </>
  );
}
