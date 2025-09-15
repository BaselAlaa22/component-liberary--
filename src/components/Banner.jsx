import "./styles/banner.css";

export default function Banner({ children, title, variant }) {
  const icon_path = `/${variant}_icon.png`;
  return (
    <div className={`banner ${variant}`}>
      <img src={icon_path} alt="success" />
      <div>
        <strong>{title}</strong> <br />
        {children ? <p>{children}</p> : null}
      </div>
    </div>
  );
}
