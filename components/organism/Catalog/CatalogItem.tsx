import Link from 'next/link';
import style from './Catalog.module.scss';

interface CatalogItemProps {
    href: any;
    image: string;
    title: string;
    price: string;
    promo?: number;
    promoPrice?: string;
}

export default function CatalogItem(props: Partial<CatalogItemProps>) {
  const {
    href, image, title, price, promo, promoPrice,
  } = props;
  return (
        <div className="col-6 col-sm-4 col-lg-3">
            <Link href={href}>
                <a>
                    <div className={`${style.cardProduct} card border-0 px-2 py-2 m-1 position-relative`}>
                        {promo ? (
                            <div className={`${style.promo} position-absolute`}>
                                <p className="px-2 px-md-3 py-1">
                                    {promo}
                                    %
                                </p>
                            </div>
                        ) : null}
                        <div className={style.cardImg}>
                            <img className="mx-auto mb-2" src={`/images/${image}.png`} alt={image} />
                        </div>
                        <div className={style.cardBody}>
                            <h6>{title}</h6>
                            {promoPrice ? (
                                <div className={style.promoPrice}>
                                    <h6>{promoPrice}</h6>
                                    <h5 className="ms-lg-2">{price}</h5>
                                </div>
                            ) : <h5 className="ms-lg-2">{price}</h5>}

                        </div>
                    </div>
                </a>
            </Link>
        </div>
  );
}
