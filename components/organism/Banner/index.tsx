import Link from 'next/link';
import style from './Banner.module.scss';

export default function Banner() {
  return (
        <section className={`${style.banner}`}>
            <div className="row justify-content-between">
                <div className="col-5 col-lg-6 d-flex flex-column justify-content-center align-items-start">
                    <h2 className="mb-3 mb-md-4 mb-lg-5 ms-3">
                        One Step
                        {' '}
                        <span>Higher</span>
                        {' '}
                        <br />
                        With Our Shoes
                    </h2>
                    <Link href="/collections">
                        <a type="button" className="ms-3">Explore</a>
                    </Link>
                </div>
                <div className="col-7 col-lg-6">
                    <img className="img-fluid" src="/images/banner.png" alt="" />
                </div>
            </div>
        </section>
  );
}
