import BrandItem from './BrandItem';
import style from './Brand.module.scss';

export default function Brand() {
  return (
        <section className="d-lg-none d-xl-block">
          <div className={`${style.brand} mt-3 mt-md-4 `}>
              <BrandItem href="list.html" title="Warrior" />
              <BrandItem href="list.html" title="Ventela" />
              <BrandItem href="list.html" title="Patrobas" />
              <BrandItem href="list.html" title="Piero" />
              <BrandItem href="list.html" title="Specs" />
              <BrandItem href="list.html" title="Ortuseight" />
          </div>
        </section>
  );
}
