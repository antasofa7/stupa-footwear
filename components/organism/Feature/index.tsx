import style from './Feature.module.scss';
import FeatureItem from './FeatureItem';

export default function Feature() {
  return (
        <section className={style.feature}>
          <div className={`${style.card} card mt-3 mt-lg-4 px-3 border-0`}>
            <div className="row align-items-center text-center">
                <FeatureItem icon="local" title="Local Pride" />
                <FeatureItem icon="fastDelivery" title="Fast Delivery" />
                <FeatureItem icon="warranty" title="Warranty" />
                <FeatureItem icon="admin" title="Fast Response" />
            </div>
          </div>
        </section>
  );
}
