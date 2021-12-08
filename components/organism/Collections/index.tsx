import style from './Collections.module.scss';
import CollectionItem from './CollectionItem';

export default function Collections() {
  return (
        <section className={style.collection}>
            <h4 className="mt-3 text-md-center text-lg-center">Best Sellers</h4>
            <div className={style.gridContainer}>
                <CollectionItem
                  title="Ortuseight Forte Instinct In"
                  href="/detail"
                  image="product-1"
                  price="Rp 350.000"
                  promoPrice="Rp 380.000"
                />
                <CollectionItem
                  title="Ortuseight Forte Instinct In"
                  href="/detail"
                  image="product-1"
                  price="Rp 350.000"
                  promo
                  promoPrice="Rp 380.000"
                />
                <CollectionItem
                  title="Ortuseight Forte Instinct In"
                  href="/detail"
                  image="product-1"
                  price="Rp 350.000"
                  promo
                  promoPrice="Rp 380.000"
                />
                <CollectionItem
                  title="Ortuseight Forte Instinct In"
                  href="/detail"
                  image="product-1"
                  price="Rp 350.000"
                  promoPrice="Rp 380.000"
                />
            </div>
            <div className="d-flex justify-content-center my-3">
                <a href="" className={style.btnMore}>
                    Load More
                </a>
            </div>
        </section>
  );
}
