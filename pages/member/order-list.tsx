import Button from '../../components/atoms/Button';
import Navbar from '../../components/organism/Navbar';
import style from '../../styles/PaymentSuccess.module.scss';

export default function OrderList() {
  return (
      <>
        <Navbar />
        <section className={style.paymentSuccess}>
            <div className={style.successArea}>
                <div>
                    <h4>Ooops!</h4>
                    <img src="/images/order list.png" alt="payment success" className="img-fluid" />
                    <h6>
                        You don't have
                        {' '}
                        <br />
                        an order list yet.
                    </h6>
                </div>
            </div>
            <Button title="Shop Now" href="/collections" />
        </section>
      </>
  );
}
