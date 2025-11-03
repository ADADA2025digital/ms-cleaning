import { useState } from "react";
import Button from "./Button";
import Star from "../assets/Images/star.png";

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
      const descRegex = /^(?=. {10,500}$)[\s\S]*$/;
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validateAll(formData);
    setErrors(nextErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
      service: true,
      description: true,
    });
    const hasError = Object.values(nextErrors).some((msg) => msg);
    if (hasError) return;
    alert("Thanks! Your request has been submitted.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      description: "",
    });
    setTouched({});
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
        LET’S WORK TOGETHER
      </h6>
      <h2 className="fw-bold text-center text-md-start">Get A Free Quote</h2>

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
          <div className="col-12">
            <div className="d-flex align-items-center gap-3 py-3">
              <Button text="Submit" />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
