import Link from 'next/link';
import BestSellerItem from './BestSellerItem';
import style from './BestSellers.module.scss';

export default function BestSellers() {
  return (
        <section className={style.bestSellers}>
          <div className="d-flex justify-content-between justify-content-lg-center align-items-center mt-3 mt-md-4 mt-lg-5 mb-lg-3">
            <h4 className="text-lg-center">Best Sellers</h4>
            <h6 className="d-lg-none">
              <Link href="/collections"><a>View all</a></Link>
            </h6>
          </div>
          <div>
              <BestSellerItem href="/detail" title="Piero Arc Wave Navy Red White" price="Rp 450.000" promoPrice="Rp 410.000" promoValue={8} image="promo" />
              <BestSellerItem href="/detail" title="Ivan Low White 2" price="Rp 355.000" image="IVAN LOW WHITE 2" />
              <BestSellerItem href="/detail" title="Ortuseight Forte Instinct In" price="Rp 390.000" image="best-seller" />
              <BestSellerItem href="/detail" title="Ivan Low White 2" price="Rp 355.000" image="IVAN LOW WHITE 2" />
          </div>
        </section>
  );
}
