import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import BestSellerItem from './BestSellerItem';
import resposive from '../../../utils/ResponsiveScreen/bestSellers';
import style from './BestSellers.module.scss';

export default function BestSellers() {
  return (
        <section className={style.bestSellers}>
            <div className="d-flex justify-content-between align-items-center mt-2 mt-md-4 mt-lg-4 mb-lg-2 p-2">
              <h4>Best Sellers</h4>
              <Link href="/collections">
                <a>
                  <h6>View all</h6>
                </a>
              </Link>
            </div>
            <Carousel
              responsive={resposive}
              infinite
              autoPlay
              removeArrowOnDeviceType={['tablet', 'mobile']}
            >
              <BestSellerItem href="/detail" title="Piero Arc Wave Navy Red White" price="Rp 450.000" promo promoPrice="Rp 410.000" promoValue={8} image="promo" />
              <BestSellerItem href="/detail" title="Ivan Low White 2" price="Rp 355.000" image="IVAN LOW WHITE 2" />
              <BestSellerItem href="/detail" title="Ortuseight Forte Instinct In" price="Rp 390.000" image="best-seller" />
              <BestSellerItem href="/detail" title="Ivan Low White 2" price="Rp 355.000" image="IVAN LOW WHITE 2" />
            </Carousel>
        </section>
  );
}
