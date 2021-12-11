import Link from 'next/link';
import Navbar from '../../components/organism/Navbar';
import Colors from '../../components/molecules/Colors';
import Sizes from '../../components/molecules/Sizes';
import Button from '../../components/atoms/Button';
import style from '../../styles/Detail.module.scss';

export default function index() {
  return (
      <>
        <input className="input-color" type="radio" name="color-btn" id="black" autoComplete="off" checked />
        <input className="input-color" type="radio" name="color-btn" id="white" autoComplete="off" checked />
        <input className="input-color" type="radio" name="color-btn" id="red" autoComplete="off" checked />
        <input className="input-color" type="radio" name="color-btn" id="blue" autoComplete="off" checked />
        <div className="bg-image">
            <Navbar />
            <section className={style.detailProduct}>
                <div className="col-12 col-sm-5 col-lg-6">
                    <div className="d-flex p-2">
                        <div className="justify-content-center justify-content-lg-start position-relative ">
                            <div className={style.promo}>
                                <p className="px-3 py-1 px-lg-4 py-lg-2">8%</p>
                            </div>
                            <img src="/images/product-3.png" alt="" />
                            <Colors />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-7 col-lg-6">
                    <div className={style.card_detail}>
                        <div className="mt-3 mt-lg-5">
                            <h4>Nineten910 Shoes</h4>
                            <h6>Sport Shoes</h6>
                        </div>
                        <Sizes />
                        <div className="p-2 mt-4">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <h6>Price</h6>
                            <div>
                                <h6 className={style.promo_price}>Rp 380.000</h6>
                                <h5>Rp 350.000</h5>
                            </div>
                        </div>
                            <div className="d-flex">
                                <div className="col">
                                    <Link href="">
                                        <a className={style.btn_cart}>
                                            <img src="/icons/cart.svg" alt="" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="ms-2 col-9">
                                    <Button href="/checkout" title="Buy Now" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr className="d-none d-sm-block" />
            {/* <!-- List Product --> */}
            <section className="list-product mb-5 d-none d-sm-block">
                <h4 className="d-flex justify-content-center mx-lg-3">- See also -</h4>
                <div className="row g-0">
                    <div className="col-6 col-sm-4 col-lg-3">
                        <a href="">
                            <div className="card card-product border-0 px-3 py-2 m-1 position-relative">
                                <div className="promo position-absolute">
                                    <p className="px-3 py-1">8%</p>
                                </div>
                                <img className="img-product mx-auto mb-2" src="assets/img/product-1.png" alt="product-1" />
                                <div>
                                    <h6>Ortuseight Forte Instinct In</h6>
                                    <div className="promo-price">
                                        <h6>Rp 450.000</h6>
                                        <h5>Rp 410.000</h5>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3">
                        <a href="">
                            <div className="card card-product border-0 px-3 py-2 m-1 position-relative">
                                <img className="img-product mx-auto mb-2" src="assets/img/product-2.png" alt="product-1" />
                                <div>
                                    <h6>Patrobas Catalyst</h6>
                                    <h5>Rp 380.000</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3">
                        <a href="detail.html">
                            <div className="card card-product border-0 px-3 py-2 m-1  position-relative">
                                <img className="img-product mx-auto mb-2" src="assets/img/product-3.png" alt="product-1" />
                                <div>
                                    <h6>Patrobas Catalyst</h6>
                                    <h5>Rp 380.000</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3">
                        <a href="">
                            <div className="card card-product border-0 px-3 py-2 m-1 position-relative">
                                <img className="img-product mx-auto mb-2" src="assets/img/IVAN LOW WHITE 2.png" alt="product-1" />
                                <div>
                                    <h6>Ivan Low White 2</h6>
                                    <h5>Rp 380.000</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </div>
      </>
  );
}
