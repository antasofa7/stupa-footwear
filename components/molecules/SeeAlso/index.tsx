import style from './SeeAlso.module.scss';
import ProductItem from './ProductItem';

export default function SeeAlso() {
  return (
        <section className={`${style.newArrivals} d-none d-sm-block mb-4`}>
          <h4 className="mt-3 mt-md-4 mt-lg-5 mb-lg-3 text-md-center text-lg-center">- See also -</h4>
          <div>
                <ProductItem href="/detail" image="product-1" title="Ortuseight Forte Instinct In" price="Rp 355.000" />
                <ProductItem href="/detail" image="product-2" title="Patrobas Catalyst" price="Rp 380.000" />
                <ProductItem href="/detail" image="product-3" title="Nineten910 Shoes" price="Rp 350.000" />
                <ProductItem href="/detail" image="product-4" title="Patrobas Catalist Inc" price="Rp 330.000" />
          </div>
        </section>
  );
}
