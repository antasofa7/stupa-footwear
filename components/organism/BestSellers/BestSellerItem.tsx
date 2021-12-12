import Link from 'next/link';
import style from './BestSellers.module.scss';

interface BestSellerItemProps {
    href: any;
    title: string;
    price: string;
    promo?: boolean;
    promoPrice?: string;
    promoValue?: number;
    image: string;
}

export default function BestSellerItem(props: Partial<BestSellerItemProps>) {
  const {
    href, title, price, promo, promoPrice, promoValue, image,
  } = props;

  return (
        <div className={`${style.cardProduct} card border-0 p-2 h-100`}>
            <Link href={href}>
                <a>
                    <div className="row align-items-center gx-0">
                        <div className="col-4 col-lg-5 ps-2 p-lg-3 flex-column">
                            <h6>{title}</h6>
                            {promo
                              ? (
                                <div className={style.promoPrice}>
                                    <h6 className="mt-2 mt-md-3">{price}</h6>
                                    <h5>{promoPrice}</h5>
                                </div>
                              )
                              : <h5 className="mt-2 mt-md-3">{price}</h5>}
                        </div>
                        <div className="col-8 col-lg-7">
                            {promo ? (
                                <div className={style.promo}>
                                    <p>
                                        {promoValue}
                                        <span>%</span>
                                    </p>
                                </div>
                            ) : null }

                                <img src={`/images/${image}.png`} alt={image} />
                        </div>
                    </div>
                </a>
            </Link>
        </div>
  );
}
