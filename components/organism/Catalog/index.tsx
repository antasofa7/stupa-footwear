import Link from 'next/link';
import CatalogItem from './CatalogItem';
import style from './Catalog.module.scss';

export default function Catalog() {
  return (
        <section className={style.catalog}>
            <h4 className="mt-3 mt-lg-4 text-center">- Ventela -</h4>
            <div className="row g-0">
                <CatalogItem
                  href="/detail"
                  image="product-1"
                  title="Ortuseight Forte Instinct In"
                  promo={8}
                  promoPrice="Rp 450.000"
                  price="Rp 410.000"
                />
                <CatalogItem
                  href="/detail"
                  image="IVAN LOW WHITE 2"
                  title="Ortuseight Forte Instinct In"
                  price="Rp 410.000"
                />
                <CatalogItem
                  href="/detail"
                  image="product-2"
                  title="Ortuseight Forte Instinct In"
                  price="Rp 410.000"
                />
                <CatalogItem
                  href="/detail"
                  image="product-3"
                  title="Ortuseight Forte Instinct In"
                  promo={8}
                  promoPrice="Rp 450.000"
                  price="Rp 410.000"
                />
                <CatalogItem
                  href="/detail"
                  image="product-1"
                  title="Ortuseight Forte Instinct In"
                  price="Rp 410.000"
                />
            </div>
            <div className="d-flex justify-content-center my-3">
                <Link href="">
                    <a className={style.btnMore}>
                        Load More
                    </a>
                </Link>
            </div>
        </section>
  );
}
