import Button from '../../atoms/Button';
import Address from './Address';
import style from './CanvasCart.module.scss';
import CartItem from './CartItem';
import CartPrice from './CartPrice';
import Shipping from './Shipping';

export default function CanvasCart() {
  return (
        <div
          className={`${style.canvasCart} offcanvas offcanvas-end`}
          tabIndex={-1}
          id="offcanvasCart"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header">
            <h4 className="offcanvas-title" id="offcanvasLabel">
              {/* <img src="/icons/bagGrey.svg" alt="" /> */}
              {' '}
              Cart
            </h4>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            <CartItem
              title="Piero Arc Wave Navy Red White"
              position="position-relative"
              image="promo"
              price="Rp 410.000"
              promo
              promoValue={8}
              promoPrice="Rp 450.000"
            />

            <CartItem
              title="Nineten910 Shoes"
              image="product-3"
              price="Rp 355.000"
            />
            <div className={`${style.cartDetail} card border-0 mt-3 p-2`}>
              <Address />
              <Shipping />
              <CartPrice />
            </div>

            <div className="mt-3">
              <Button href="/checkout" title="Checkout" image icon="bagWhite" />
            </div>
          </div>
        </div>
  );
}
