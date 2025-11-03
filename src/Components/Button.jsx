import { Link } from "react-router-dom";

export default function Button({ text, onClick }) {
  return (
    <button
      className="button position-relative text-decoration-none overflow-hidden rounded-5 border-0 px-4 py-3 z-1 text-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
