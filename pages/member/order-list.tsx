import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import Button from '../../components/atoms/Button';
import Navbar from '../../components/organism/Navbar';
import style from '../../styles/PaymentSuccess.module.scss';
import resposive from '../../utils/ResponsiveScreen/bestSellers';

export default function OrderList() {
  return (
      <>
        <Navbar />
        <section className={style.paymentSuccess}>
            <Carousel
              responsive={resposive}
              infinite={false}
              removeArrowOnDeviceType={['desktop', 'tablet', 'mobile']}
            >
                <div className={style.carouselItem}>
                    <Link href="/">
                        <a role="button" className={style.tab}>Menunggu Pembayaran</a>
                    </Link>
                </div>
                <div className={style.carouselItem}>
                    <Link href="/">
                        <a role="button" className={style.tab}>Dalam Proses</a>
                    </Link>
                </div>
                <div className={style.carouselItem}>
                    <Link href="/">
                        <a role="button" className={style.tab}>Selesai</a>
                    </Link>
                </div>
            </Carousel>
            <div className={style.successArea}>
                <div>
                    <h4>Ooops!</h4>
                    <img src="/images/order list.png" alt="payment success" className="img-fluid" />
                    <h6>
                        You don&lsquo;t have
                        {' '}
                        <br />
                        an order list yet.
                    </h6>
                </div>
            </div>
            <Button title="Shop Now" href="/collections" />
        </section>
      </>
  );
}
