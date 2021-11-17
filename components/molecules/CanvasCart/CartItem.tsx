import style from './CanvasCart.module.scss';

interface CartItemProps {
    position?: string;
    title: string;
    price: string;
    promo: boolean;
    promoPrice?: string;
    promoValue?: number;
    image: string;
}

export default function CartItem(props: Partial<CartItemProps>) {
  const {
    position, title, price, promo, promoPrice, promoValue, image,
  } = props;
  return (
        <div className={`${style.cardProduct} card border-0 mb-2 mt-md-2 p-2`}>
            <div className="row d-flex align-items-center">
                <div className={`${position} col-6 p-1`}>
                    {promo ? (
                        <div className={style.promo}>
                            <p className="px-2 pt-1">
                                {promoValue}
                                {' '}
                                %
                            </p>
                        </div>
                    ) : ''}

                    <img className="img-fluid" src={`/images/${image}.png`} alt="product-1" />
                </div>
                <div className="col-6 p-1">
                    <div className="my-2">
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
                    <div className="row align-items-center justify-content-between align-self-end pe-2">
                        <div className="col-8 p-1">
                            <div className="d-flex align-items-center">
                                <a className={style.btnMinus} href="">-</a>
                                <h4 className="px-3 pt-2">1</h4>
                                <a className={style.btnPlus} href="">+</a>
                            </div>
                        </div>
                        <a href="" className="col-4">
                            <img src="/icons/trash.svg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
  );
}
