import React, { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PageBanner from "../Components/PageBanner";
import { services } from "../Constants/Data";
import { toSlug } from "../utils/slugify";

export default function ServicesPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Build a lookup { slug -> index } once
  const indexBySlug = useMemo(() => {
    const map = new Map();
    services.forEach((s, i) => {
      // prefer precomputed slug from data; fallback if missing
      const key = s.slug || toSlug(s.name || s.title || `service-${i + 1}`);
      map.set(key, i);
    });
    return map;
  }, []);

  // Resolve slug -> index (fallback to 0 if invalid)
  const initialIndex = indexBySlug.has(slug) ? indexBySlug.get(slug) : 0;

  const [selectedService, setSelectedService] = useState(initialIndex);

  // Keep state in sync with the URL slug
  useEffect(() => {
    if (indexBySlug.has(slug)) {
      const idx = indexBySlug.get(slug);
      if (idx !== selectedService) {
        setSelectedService(idx);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      // unknown slug -> redirect to canonical first service
      navigate(`/servicedetails/${services[0].slug}`, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const selectedServiceData = services[selectedService];
  if (!selectedServiceData) return null;

  const {
    image,
    title,
    description,
    features,
    details,
    keyFactors,
    benefits,
    outcomes,
    faqs,
  } = selectedServiceData;

  // Sidebar buttons: navigate using slugs
  const serviceButtons = services.map((s) => ({
    icon: s.icon ? `bi ${s.icon}` : "bi bi-ui-checks",
    title: s.name || s.title || "Service",
    slug: s.slug || toSlug(s.name || s.title),
  }));

  const [openItem, setOpenItem] = useState(faqs?.[0]?.id ?? null);
  useEffect(() => {
    setOpenItem(faqs?.[0]?.id ?? null);
  }, [selectedService]);

  const toggleItem = (id) => setOpenItem((prev) => (prev === id ? null : id));

  return (
    <>
      <div className="container-fluid p-0">
        <PageBanner
          title="Service Details"
          subtitle="Home / Services / Service Details"
          backgroundImage="/hero.jpg"
        />

        <section>
          <div className="details container py-5">
            <div className="row">
              {/* LEFT */}
              <div className="col-lg-9">
                <div className="bg-white rounded-4 px-4 mb-4">
                  {image && (
                    <img
                      src={image}
                      alt={title || "Service"}
                      className="img-fluid rounded-4 mb-4 w-100"
                      style={{ height: "400px", objectFit: "cover" }}
                    />
                  )}

                  {title && <h1 className="brand h3 mb-2">{title}</h1>}
                  {description && <p className="para mb-4">{description}</p>}

                  {Array.isArray(features) && features.length > 0 && (
                    <div className="mb-4">
                      <div className="d-flex flex-wrap gap-2">
                        {features.map((f, i) => (
                          <span key={i} className="badge bg-light text-muted border">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {Array.isArray(details) &&
                    details.map((para, i) => (
                      <p key={i} className="para mb-4">
                        {para}
                      </p>
                    ))}

                  {Array.isArray(keyFactors) && keyFactors.length > 0 && (
                    <>
                      <h2 className="brand mb-4">Key Factors</h2>
                      <div className="row g-4 mb-5">
                        {keyFactors.map((factor, idx) => (
                          <div className="col-md-6" key={idx}>
                            <div className="d-flex gap-3">
                              <div className="rounded-3 p-3">
                                <i className={`bi ${factor.icon || "bi-star"} highlight fs-4`} />
                              </div>
                              <div>
                                <h3 className="h5 mb-2 heading">{factor.title}</h3>
                                <p className="para mb-0">{factor.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {(benefits?.items?.length || outcomes?.items?.length) && (
                    <div className="row g-4 mb-5">
                      <div className="col-md-6">
                        <h2 className="brand mb-4">Benefits</h2>
                        {(benefits?.items ?? []).map((benefit, idx) => (
                          <div className="d-flex align-items-start gap-3 mb-2" key={idx}>
                            <i className="bi bi-check-circle highlight fs-5" />
                            <p className="text-muted mb-0 mt-1">{benefit}</p>
                          </div>
                        ))}
                      </div>

                      <div className="col-md-6">
                        <h2 className="brand mb-4">Expected Outcomes</h2>
                        {(outcomes?.items ?? []).map((outcome, idx) => (
                          <div className="d-flex align-items-start gap-3 mb-2" key={idx}>
                            <i className="bi bi-check-circle highlight fs-5" />
                            <p className="text-muted mb-0 mt-1">{outcome}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {Array.isArray(faqs) && faqs.length > 0 && (
                    <>
                      <h2 className="brand mb-4">Frequently Asked Questions</h2>
                      <div className="custom-accordion pb-5">
                        {faqs.map((item) => (
                          <div key={item.id} className="accordion-item rounded-3 mb-2 p-1">
                            <h6
                              className="d-flex justify-content-start align-items-center gap-3"
                              onClick={() => toggleItem(item.id)}
                              role="button"
                            >
                              <i
                                className={`bi ${
                                  openItem === item.id
                                    ? "bi-dash-circle-fill highlight"
                                    : "bi-plus-circle-fill text-muted"
                                } fs-5`}
                              />
                              <span className="brand">{item.title}</span>
                            </h6>
                            {openItem === item.id && (
                              <div className="accordion-body mt-2 text-muted">
                                {item.content}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* RIGHT */}
              <div className="col-lg-3">
                <div className="d-flex flex-column gap-3 mb-4">
                  {serviceButtons.map((svc, idx) => (
                    <button
                      key={idx}
                      className={`btn ${selectedService === idx ? "light-bg text-white" : "btn-light"} d-flex align-items-center gap-3 py-3 rounded-3`}
                      onClick={() => navigate(`/servicedetails/${svc.slug}`)}
                    >
                      <i className={`${svc.icon} ${selectedService === idx ? "text-white" : "highlight"}`} />
                      <span className="fs-6 brand text-start">{svc.title}</span>
                    </button>
                  ))}
                </div>

                <div className="dark-bg text-white rounded-4 p-4 mb-4">
                  <div className="d-flex align-items-center gap-3">
                    <div className="d-flex align-items-center justify-content-center light-bg rounded-circle p-3" style={{ width: 70, height: 70 }}>
                      <i className="bi bi-telephone text-white fs-4" />
                    </div>
                    <div>
                      <p className="mb-1">Call Us</p>
                      <h5 className="mb-0">0412 147 211</h5>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-4 shadow p-4 text-center">
                  <p className="highlight mb-2">Company Profile</p>
                  <h2 className="mb-4">Download Our Company Profile</h2>
                  <button className="btn light-bg text-white w-100 mb-3 rounded-3">
                    <i className="bi bi-file-earmark-pdf me-2" /> Download PDF
                  </button>
                  <button className="btn btn-outline-secondary w-100 rounded-3">
                    <i className="bi bi-file-earmark-word me-2" /> Download Word
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
