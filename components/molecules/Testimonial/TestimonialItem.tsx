import classname from 'classnames';
import style from './Testimonial.module.scss';

interface TestimonialItemProps {
    active?: boolean;
}

export default function TestimonialItem(props: Partial<TestimonialItemProps>) {
  const { active } = props;
  const classTesti = classname({
    'carousel-item': true,
    active,
  });

  return (
        <div className={classTesti}>
            <div className={`${style.card} card mt-1 p-3 border-0 me-4`}>
                <div className="d-flex align-items-center mb-1">
                    <img src="/icons/userAround.svg" />
                    <h5 className="m-2">
                        Andri
                    </h5>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </div>
  );
}
