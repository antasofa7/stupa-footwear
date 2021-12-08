import Link from 'next/link';
import BestSellerItem from './BestSellerItem';
import style from './BestSellers.module.scss';

export default function BestSellers() {
  return (
        <section className={style.bestSellers}>
            <div className="justify-content-between align-items-center mt-3 mt-md-4 mb-lg-3 text-md-center text-lg-center">
              <h4>Best Sellers</h4>
              <Link href="/collections">
                <a>
                  <h6>View all</h6>
                </a>
              </Link>
            </div>
          <div>
              <BestSellerItem href="/detail" title="Piero Arc Wave Navy Red White" price="Rp 450.000" promo promoPrice="Rp 410.000" promoValue={8} image="promo" />
              <BestSellerItem href="/detail" title="Ivan Low White 2" price="Rp 355.000" image="IVAN LOW WHITE 2" />
              <BestSellerItem href="/detail" title="Ortuseight Forte Instinct In" price="Rp 390.000" image="best-seller" />
              <BestSellerItem href="/detail" title="Ivan Low White 2" price="Rp 355.000" image="IVAN LOW WHITE 2" />
          </div>
        </section>
  );
}
