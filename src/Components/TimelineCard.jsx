
export default function Card({ title, description, date, position }) {
  return (
    <div
      className={`row align-items-center position-relative mb-5 px-5 ${
        position === "right" ? "flex-row-reverse" : ""
      }`}
    >
      <div className="col-md-5">
        <div className="card shadow-sm p-4 border-0 rounded-2">
          <h5 className="fw-bold">{title}</h5>
          <p className="text-muted">{description}</p>
        </div>
      </div>
      <div className="col-md-2 d-flex justify-content-center position-relative">
    <div className="circle bg-warning position-absolute orunded-circle"></div>
</div>

      <div className="col-md-5 text-muted text-center">{date}</div>
    </div>
  );
}
