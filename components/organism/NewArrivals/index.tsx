import Link from 'next/link';
import ProductItem from './ProductItem';
import style from './NewArrivals.module.scss';

export default function NewArrivals() {
  return (
        <section className={style.newArrivals}>
          <div className="d-flex justify-content-between justify-content-lg-center align-items-center mt-3 mt-md-4 mt-lg-5 mb-lg-3">
            <h4 className="text-lg-center">New Arrivals</h4>
            <h6 className="d-lg-none">
              <Link href="/collections"><a>View all</a></Link>
            </h6>
          </div>
          <div>
                <ProductItem href="/detail" image="product-1" title="Ortuseight Forte Instinct In" price="Rp 355.000" />
                <ProductItem href="/detail" image="product-2" title="Patrobas Catalyst" price="Rp 380.000" />
                <ProductItem href="/detail" image="product-3" title="Nineten910 Shoes" price="Rp 350.000" />
                <ProductItem href="/detail" image="product-4" title="Patrobas Catalist Inc" price="Rp 330.000" />
          </div>
        </section>
  );
}
