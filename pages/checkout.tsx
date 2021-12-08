// import Address from './Address';
import style from '../styles/Checkout.module.scss';
// import CartPrice from './CartPrice';
// import Shipping from './Shipping';

import Button from '../components/atoms/Button';
import Navbar from '../components/organism/Navbar';
// import FormFloating from '../components/atoms/Form/Floating';
import CanvasAddress from '../components/molecules/CanvasAddress';
import Datalist from '../components/atoms/Form/Datalist';

export default function Checkout() {
  return (
        <>
            <Navbar />
            <section className={style.checkout}>
                <div className={`${style.cardProduct} card border-0 mb-2 mt-md-2 p-2`}>
                    <div className="row d-flex align-items-center">
                        <div className="position-relative col-6 p-1">
                            {/* {promo ? ( */}
                                <div className={style.promo}>
                                    <p className="px-2 pt-1">8%</p>
                                </div>
                            {/* ) : ''} */}
                            <img className="img-fluid" src="/images/product-3.png" alt="product-1" />
                        </div>
                        <div className="col-6 p-1">
                            <div className="my-2">
                            <h6>Nineten910 Shoes</h6>
                            {/* {promo
                            ? ( */}
                                <div className={style.promoPrice}>
                                    <h6 className="mt-2 mt-md-3">Rp 380.000</h6>
                                    <h5>Rp 350.000</h5>
                                </div>
                            {/* //   )
                            //   : <h5 className="mt-2 mt-md-3">{price}</h5>} */}
                            </div>
                            <div className="row align-items-center justify-content-between align-self-end pe-2">
                                <div className="col-8 p-1">
                                    <div className="d-flex align-items-center">
                                        <a className={style.btnMinus} href="">-</a>
                                        <h4 className="px-3 pt-2">1</h4>
                                        <a className={style.btnPlus} href="">+</a>
                                    </div>
                                </div>
                                <a href="" className="col-4">
                                    <img src="/icons/trash.svg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.cartDetail}>
                    <div className={`${style.cartDetail} card border-0 mt-2 p-3`}>
                        <a href="#offcanvasAddress" data-bs-toggle="offcanvas">
                            <div className="d-flex justify-content-between align-items-center">
                                <h5 className="pt-2">Alamat Pengiriman</h5>
                                <div>
                                    <img src="/icons/chevron-down-1.svg" alt="" />
                                </div>
                            </div>
                        </a>
                        <CanvasAddress />
                    </div>

                    <div className={`${style.cartDetail} card border-0 mt-2 p-3`}>
                        <Datalist
                          idInputDatalist="inputPengiriman"
                          idOptionDatalist="optionPengiriman"
                          title="Pilih jasa pengiriman"
                          option1="Wahana"
                          option2="Sicepat"
                          option3="JNE"
                          option4="J&T"
                        />
                    </div>

                    <div className={`${style.cartDetail} card border-0 mt-2 p-3`}>
                        <table>
                            <tr>
                                <td>Nineten910 Shoes</td>
                                <td className="text-end">Rp 355.000</td>
                            </tr>
                            <tr>
                                <td>Ongkos kirim</td>
                                <td className="text-end">Rp 24.000</td>
                            </tr>
                            <tr className={style.total}>
                                <td>Total</td>
                                <td className="col-6 text-end">Rp 1.249.000</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div className="mt-3">
                    <Button href="/payment" title="Continue" />
                </div>
            </section>
        </>
  );
}
