import Link from 'next/link';
import style from './Collections.module.scss';

interface CollectionItemProps {
    title: string;
    href: any;
    image: string;
    price: string;
    promo?: boolean;
    promoPrice?: string;
    promoValue?: number;
}

export default function CollectionItem(props: Partial<CollectionItemProps>) {
  const {
    title, href, image, price, promo, promoPrice,
  } = props;
  return (
        <div className={style.gridItem}>
            <Link href={href}>
                <a className="card border-0">
                        {promo
                          ? (
                            <div className={style.promo}>
                                <p className="px-2 px-md-3 py-1">8%</p>
                            </div>
                          )
                          : ''}
                        <div className={style.cardImage}>
                          <img src={`/images/${image}.png`} alt={image} />
                        </div>
                        <div className="card-body p-0">
                            <h6>{title}</h6>
                            {promo
                              ? (
                                <div className={style.promoPrice}>
                                    <h6>{promoPrice}</h6>
                                    <h5 className="ms-lg-2">{price}</h5>
                                </div>
                              )
                              : <h5 className="ms-lg-2">{price}</h5>}
                        </div>
                </a>
            </Link>
        </div>
  );
}
