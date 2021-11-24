import Link from 'next/link';
import style from './Footer.module.scss';

export default function Footer() {
  return (
        <footer>
            <div className={`${style.footerCard} card mt-3 p-3 p-md-4 p-lg-5 border-0`}>
                <div className="row mx-lg-4">
                    <div className={`${style.brand} col-md-4 col-lg-4 d-none d-md-block`}>
                        <Link href="/">
                            <a>
                                <img className="logo" src="/images/logo.png" alt="logo" height={42} />
                            </a>
                        </Link>
                        <h4 className="mt-3">
                            One Step Higher
                            {' '}
                            <br />
                            With Our Shoes
                        </h4>
                    </div>
                    <div className="col-6 col-md-4 col-lg-4">
                        <h4>Information</h4>
                        <Link href="">
                            <a>
                                <h5>Payment Confirmation</h5>
                            </a>
                        </Link>
                        <Link href="">
                            <a>
                                <h5>How to Order</h5>
                            </a>
                        </Link>
                        <Link href="">
                            <a>
                                <h5>Size Guide</h5>
                            </a>
                        </Link>
                        <Link href="">
                            <a>
                                <h5>Tips</h5>
                            </a>
                        </Link>
                        <Link href="">
                            <a>
                                <h5>FAQ</h5>
                            </a>
                        </Link>
                    </div>
                    <div className="col-6 col-md-4 col-sm-4">
                        <h4>Contact Us</h4>
                        <h5>0812-8278-1738</h5>
                        <h5>stupafootwear@gmail.com</h5>
                        <h5>
                            Gombong RT 002/004
                            Kembanglimus,
                            Kec. Borobudur,
                            Magelang, Jawa Tengah
                            56553
                        </h5>
                    </div>
                </div>
                <p className="text-center m-0 mt-md-3 mt-lg-4">Copyright 2021 designed by antasofa</p>
            </div>
        </footer>
  );
}
