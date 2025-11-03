
export default function TestimonialCard({
  quote,
  name,
  designation,
  image,
  rating,
}) {
  return (
    <div className="card shadow-lg border-0 rounded-2 p-4">
      <div className="d-flex justify-content-between align-items-center">
        <i className="bi bi-quote fs-1 text-success"></i>
        <div className="text-warning">
          {[...Array(rating)].map((_, index) => (
            <i key={index} className="bi bi-star-fill"></i>
          ))}
        </div>
      </div>

      <p className="text-muted fst-italic">{quote}</p>

      <div className="d-flex align-items-center mt-3 gap-3">
        <img
          src={image}
          alt={name}
          className="rounded-circle"
          width="50"
          height="50"
        />
        <div className="d-flex flex-column align-items-center">
          <h6 className="mb-0 fw-bold">{name}</h6>
          <p className="text-muted small">{designation}</p>
        </div>
      </div>
    </div>
  );
}
