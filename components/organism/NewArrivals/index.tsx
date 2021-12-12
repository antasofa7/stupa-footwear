import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import style from './NewArrivals.module.scss';
import ProductItem from './ProductItem';
import resposive from '../../../utils/ResponsiveScreen';

export default function NewArrivals() {
  return (
        <section className={style.newArrivals}>
            <div className="d-flex justify-content-between align-items-center mt-2 mt-md-4 mb-lg-2 p-2">
              <h4>New Arrivals</h4>
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
              <ProductItem href="/detail" image="product-1" title="Ortuseight Forte Instinct In" price="Rp 355.000" />
              <ProductItem href="/detail" image="product-2" title="Patrobas Catalyst" price="Rp 380.000" />
              <ProductItem href="/detail" image="product-3" title="Nineten910 Shoes" price="Rp 350.000" />
              <ProductItem href="/detail" image="product-4" title="Patrobas Catalist Inc" price="Rp 330.000" />
              <ProductItem href="/detail" image="product-4" title="Patrobas Catalist Inc" price="Rp 330.000" />
            </Carousel>
        </section>
  );
}
