import Link from 'next/link';
import style from './Banner.module.scss';

export default function Banner() {
  return (
        <section className={`${style.banner} row justify-content-between`}>
            <div className="col-5 ps-md-4 ps-lg-4 pe-lg-0 d-flex flex-column justify-content-center align-items-center">
                <h2 className="mb-3 mb-md-4 mb-lg-5">
                    One Step
                    {' '}
                    <span>Higher</span>
                    {' '}
                    <br />
                    With Our Shoes
                </h2>
                <Link href="/collections">
                    <a type="button">Explore</a>
                </Link>
            </div>
            <div className="col-7">
                <img className="img-fluid" src="/images/banner.png" alt="" />
            </div>
        </section>
  );
}
