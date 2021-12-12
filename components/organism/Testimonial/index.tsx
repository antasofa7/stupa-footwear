import Carousel from 'react-multi-carousel';
import style from './Testimonial.module.scss';
import TestimonialItem from './TestimonialItem';
import resposive from '../../../utils/ResponsiveScreen';

export default function Testimonial() {
  return (
        <section className={`${style.testimonial} mt-3`}>
          <Carousel
            responsive={resposive}
            infinite
            autoPlay
            removeArrowOnDeviceType={['desktop', 'mobile']}
          >
            <TestimonialItem />
            <TestimonialItem />
            <TestimonialItem />
            <TestimonialItem />
          </Carousel>
        </section>

  );
}
