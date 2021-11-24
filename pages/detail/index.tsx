import Link from 'next/link';
import Button from '../../components/atoms/Button';
import Color from '../../components/molecules/Color';
import SeeAlso from '../../components/molecules/SeeAlso';
import Size from '../../components/molecules/Size';
import Navbar from '../../components/organism/Navbar';
import style from './detail.module.scss';

export default function index() {
  return (
      <>
        <Navbar />
         <main>
            <section className={`${style.detail} px-3 mb-3 mt-md-4`}>
                <div className="row align-items-center">
                    <div className="col-12 col-sm-5 col-lg-6">
                        <div className="mt-3">
                            <h5>Nineten910 Shoes</h5>
                            <h6>Sport</h6>
                        </div>
                        <div className="mt-3 d-flex justify-content-center justify-content-lg-start position-relative">
                            <div className={`${style.promo} position-absolute text-center`}>
                                <p className="px-3 py-1 px-lg-4 py-lg-2">8%</p>
                            </div>
                            <img src="/images/product-3.png" alt="" className="img-fluid img-detail" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-7 col-lg-6">
                        <Color />
                        <Size />

                        <div className="p-2 mt-4">
                            <div className="mb-3 my-lg-4">
                                <h6 className={style.price}>Rp 380.000</h6>
                                <h5>Rp 350.000</h5>
                            </div>
                            <div className="position-relative bottom-0">
                                <div className="d-flex align-items-center justify-content-between">
                                    <Link href="cart.html">
                                        <a className={`${style.btnCart}`}>
                                            <img src="/icons/cart.svg" alt="" />
                                        </a>
                                    </Link>
                                    <div className="col-9 col-sm-10 col-lg-10">
                                        <Button href="payment.html" title="Buy now" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr className="d-none d-sm-block" />
            <SeeAlso />
         </main>
      </>
  );
}
