import NoImageTestimonial from "./NoImageTestimonial";
import ImageTestimonial from "./ImageTestimonial";

export default function Testimonial({ image, quote, name, position }) {
  return image ? (
    <ImageTestimonial
      image={image}
      quote={quote}
      name={name}
      position={position}
    />
  ) : (
    <NoImageTestimonial quote={quote} name={name} position={position} />
  );
}
