import "./styles/testimonial.css";
export default function ImageTestimonial({ image, quote, name, position }) {
  return (
    <div className="testimonial-wrapper">
      <img src={image} alt={name} className="testimonial-img" />
      <div className="desktop-only">
        <img src="/quots_icon.png" alt="quotes icon" className="quotes-icon" />
        <p className="quote">{quote}</p>
        <p className="name">{name}</p>
        <p className="position">{position}</p>
      </div>
    </div>
  );
}
