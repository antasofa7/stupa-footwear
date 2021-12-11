import Button from '../components/atoms/Button';
import Navbar from '../components/organism/Navbar';
import style from '../styles/PaymentSuccess.module.scss';

export default function PaymentSuccess() {
  return (
      <>
        <Navbar />
        <section className={style.paymentSuccess}>
            <div className={style.successArea}>
                <div>
                    <h4>Payment Success</h4>
                    <img src="/images/payment_success.png" alt="payment success" className="img-fluid" />
                    <h6>
                        Your payment was successful!
                        <br />
                        Please check order status
                        <br />
                        on the user page!
                    </h6>
                </div>
            </div>
            <Button title="Back to Home" href="/" />
        </section>
      </>
  );
}
