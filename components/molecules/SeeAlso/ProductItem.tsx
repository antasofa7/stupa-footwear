import Link from 'next/link';
import style from './SeeAlso.module.scss';

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
        <div className={`${style.cardProduct} card border-0 px-3 py-2 me-2 me-md-3 flex-column`}>
            <Link href={href}>
                <a>
                    <div className="mx-auto mb-2">
                        <img src={`/images/${image}.png`} alt={image} />
                    </div>
                    <div className="flex-column">
                        <h6>{title}</h6>
                        <h5>{price}</h5>
                    </div>
                </a>
            </Link>
        </div>
  );
}
