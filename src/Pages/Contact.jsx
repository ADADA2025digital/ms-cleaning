import { useState } from "react";
import PageBanner from "../Components/PageBanner";
import Button from "../Components/Button";

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

  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setSubmitStatus("");
  };

  const validate = () => {
    const nextErrors = {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    };

    // Email regex: simple, robust for most cases
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(formValues.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    // Phone: 10-15 digits after stripping non-digits
    const digits = formValues.phone.replace(/\D/g, "");
    if (digits.length < 10 || digits.length > 15) {
      nextErrors.phone = "Please enter a valid phone number (10-15 digits).";
    }

    // Name: only letters and spaces, min 2 chars
    const nameTrimmed = formValues.name.trim();
    const nameRegex = /^[A-Za-z][A-Za-z\s'.-]{1,}$/;
    if (nameTrimmed.length < 2 || !nameRegex.test(nameTrimmed)) {
      nextErrors.name = "Please enter your full name (letters and spaces).";
    }

    // Subject: minimum 3 characters (non-whitespace)
    if (formValues.subject.trim().length < 3) {
      nextErrors.subject = "Subject must be at least 3 characters.";
    }

    // Message: minimum 10 characters (non-whitespace)
    if (formValues.message.trim().length < 10) {
      nextErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(nextErrors);
    return (
      !nextErrors.name &&
      !nextErrors.email &&
      !nextErrors.phone &&
      !nextErrors.subject &&
      !nextErrors.message
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitStatus("Your message looks good. You can submit now.");
      // Here you could send the formValues to your API
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
                  href="tel:+0412 147 211"
                  className="light-bg text-white rounded-circle d-flex align-items-center justify-content-center me-3 p-3"
                >
                  <i className="bi bi-telephone-fill fs-4"></i>
                </a>
                <div className="d-none d-md-block">
                  <h4 className="heading fw-semibold">Phone</h4>
                  <p className="mb-0 ">
                    <a
                      href="tel:+0412 147 211"
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
                      className="form-control py-3"
                      placeholder="Your name "
                      name="name"
                      value={formValues.name}
                      onChange={handleChange}
                      required
                    />
                    {errors.name ? (
                      <small className="text-danger">{errors.name}</small>
                    ) : null}
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control py-3"
                      placeholder="Your email "
                      name="email"
                      value={formValues.email}
                      onChange={handleChange}
                      required
                    />
                    {errors.email ? (
                      <small className="text-danger">{errors.email}</small>
                    ) : null}
                  </div>
                  <div className="col-md-6">
                    <input
                      type="tel"
                      className="form-control py-3"
                      placeholder="Your phone"
                      name="phone"
                      value={formValues.phone}
                      onChange={handleChange}
                    />
                    {errors.phone ? (
                      <small className="text-danger">{errors.phone}</small>
                    ) : null}
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control py-3"
                      placeholder="Subject"
                      name="subject"
                      value={formValues.subject}
                      onChange={handleChange}
                    />
                    {errors.subject ? (
                      <small className="text-danger">{errors.subject}</small>
                    ) : null}
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control py-3 "
                      rows="4"
                      placeholder="Write your message here"
                      name="message"
                      value={formValues.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    {errors.message ? (
                      <small className="text-danger">{errors.message}</small>
                    ) : null}
                  </div>
                  <div className="col-12">
                    <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3 py-2">
                      <Button text="Submit" onClick={handleSubmit} />
                      {submitStatus ? (
                        <small className="text-success">{submitStatus}</small>
                      ) : null}
                    </div>
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
