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
            <div className="row">
                <div className="col-12 col-sm-4 col-lg-3 pe-md-0">
                    <div className={`${style.card} card mt-1 p-3 border-0 me-2`}>
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
                <div className="col-12 col-sm-4 col-lg-3 pe-0 d-none d-sm-block">
                    <div className={`${style.card} card mt-1 p-3 border-0 me-2`}>
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
                <div className="col-12 col-sm-4 col-lg-3 pe-lg-0 d-none d-sm-block">
                    <div className={`${style.card} card mt-1 p-3 border-0 me-2`}>
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
                <div className="col-12 col-sm-4 col-lg-3 d-none d-sm-none d-lg-block">
                    <div className={`${style.card} card mt-1 p-3 border-0 me-2`}>
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
            </div>
        </div>
  );
}
