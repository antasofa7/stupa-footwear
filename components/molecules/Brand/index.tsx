import BrandItem from './BrandItem';
import style from './Brand.module.scss';

export default function Brand() {
  return (
        <section className="d-lg-none d-xl-block">
          <div className={`${style.brand} mt-3 mt-md-4 `}>
              <BrandItem href="/collections" title="Warrior" />
              <BrandItem href="/collections" title="Ventela" />
              <BrandItem href="/collections" title="Patrobas" />
              <BrandItem href="/collections" title="Piero" />
              <BrandItem href="/collections" title="Specs" />
              <BrandItem href="/collections" title="Ortuseight" />
          </div>
        </section>
  );
}
