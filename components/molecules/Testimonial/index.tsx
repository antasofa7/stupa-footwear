import style from './Testimonial.module.scss';
import TestimonialItem from './TestimonialItem';

export default function Testimonial() {
  return (
        <section className={`${style.testimonial} mt-3`}>
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner ">
              <TestimonialItem active="active" />
              <TestimonialItem />
              <TestimonialItem />
              <TestimonialItem />
            </div>
          </div>
        </section>
  );
}
