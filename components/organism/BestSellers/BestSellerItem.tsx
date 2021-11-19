import Link from 'next/link';
import classname from 'classnames';
import style from './BestSellers.module.scss';

interface BestSellerItemProps {
    position?: boolean;
    href: any;
    title: string;
    price: string;
    promo: boolean;
    promoPrice?: string;
    promoValue?: number;
    image: string;
}

export default function BestSellerItem(props: Partial<BestSellerItemProps>) {
  const {
    position, href, title, price, promo, promoPrice, promoValue, image,
  } = props;

  const classBestSellers = classname({
    'border-0': true,
    position,
  });

  return (
        <div className={`${style.cardProduct} card me-2 me-md-3 p-2`}>
            <div className={classBestSellers}>
                <Link href={href}>
                    <a>
                        <div className="row align-items-center gx-0">
                            <div className="col-5 ps-4 ps-lg-5 flex-column">
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
                            <div className="col-7">
                                {promo ? (
                                    <div className={`${style.promo} position-absolute`}>
                                        <p className="px-3 pt-1 px-lg-4">
                                            {promoValue}
                                            %
                                        </p>
                                    </div>
                                ) : null }

                                <img src={`/images/${image}.png`} alt={image} />
                            </div>
                        </div>
                    </a>
                </Link>
            </div>
        </div>
  );
}
