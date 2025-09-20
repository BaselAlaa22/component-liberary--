import "./styles/card.css";
export default function Card({ icon, title, children }) {
  return (
    <div className="card">
      <div className="card-icon">
        <img src={icon} alt="Card Icon" />
      </div>
      <p className="card-title">{title}</p>
      <p className="card-body">{children}</p>
    </div>
  );
}
