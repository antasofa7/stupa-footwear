import BestSellerItem from './BestSellerItem';
import style from './BestSellers.module.scss';

export default function BestSellers() {
  return (
        <section className={style.bestSellers}>
          <h4 className="mt-3 mt-md-4 mt-lg-5 mb-lg-3 text-md-center text-lg-center">Best Sellers</h4>
          <div>
              <BestSellerItem href="/detail" title="Piero Arc Wave Navy Red White" price="Rp 450.000" promo promoPrice="Rp 410.000" promoValue={8} image="promo" position="position-relative" />
              <BestSellerItem href="/detail" title="Ivan Low White 2" price="Rp 355.000" image="IVAN LOW WHITE 2" />
              <BestSellerItem href="/detail" title="Ortuseight Forte Instinct In" price="Rp 390.000" image="best-seller" />
              <BestSellerItem href="/detail" title="Ivan Low White 2" price="Rp 355.000" image="IVAN LOW WHITE 2" />
          </div>
        </section>
  );
}
