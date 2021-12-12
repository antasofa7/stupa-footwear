import BrandItem from './BrandItem';
import style from './Brand.module.scss';

export default function Brand() {
  return (
        <section className="d-lg-none mt-3">
          <div className={style.brand}>
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
