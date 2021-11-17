import style from './Banner.module.scss';

export default function Banner() {
  return (
        <section className={`${style.banner} row justify-content-between`}>
            <div className="col-5 ps-md-4 d-flex flex-column justify-content-center align-items-center">
                <h2 className="mb-3 mb-md-4 mb-lg-5">
                    One Step Higher
                    {' '}
                    <br />
                    With Our Shoes
                </h2>
                <a href="list.html" type="button">Explore</a>
            </div>
            <div className="col-7">
                <img className="img-fluid" src="/images/banner.png" alt="" />
            </div>
        </section>
  );
}
