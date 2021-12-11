import Link from 'next/link';
import style from './NewArrivals.module.scss';

interface ProductItemProps {
    href: any;
    image: string;
    title: string;
    price: string;
}

export default function ProductItem(props: ProductItemProps) {
  const {
    href, image, title, price,
  } = props;
  return (
        <div className={`${style.cardProduct} card border-0 p-2`}>
            <div>
                <Link href={href}>
                    <a>
                        <div className={style.cardImage}>
                            <img src={`/images/${image}.png`} alt={image} />
                        </div>
                        <div className="flex-column">
                            <h6>{title}</h6>
                            <h5>{price}</h5>
                        </div>
                    </a>
                </Link>
            </div>
        </div>
  );
}
