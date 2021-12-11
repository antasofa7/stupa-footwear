import style from '../styles/Payment.module.scss';
import Navbar from '../components/organism/Navbar';
import PaymentItem from '../components/molecules/PaymentItem';
import FormInput from '../components/atoms/Form/FormInput';
import Button from '../components/atoms/Button';

export default function Payment() {
  return (
        <>
            <Navbar />
            <section className={style.payment}>
                <div style={{ minHeight: '75vh' }}>
                    <PaymentItem namaBank="Permata Bank" namaPemilik="Andri" nomerRekening="8528 0852 2873 7238" idAccordion="permata" />
                    <PaymentItem namaBank="Dana" namaPemilik="Andri" nomerRekening="0852 2873 7258" idAccordion="dana" />
                    <FormInput type="file" title="Upload Bukti Pembayaran" placeholder="Browse file..." />
                    <FormInput type="text" title="Nama Bank" placeholder="Masukkan nama bank" />
                    <FormInput type="text" title="Nama Pengirim" placeholder="Masukkan nama pengirim" />

                </div>
                <div className="row align-items-center g-0">
                    <div className="col-5">
                        <h6>Total</h6>
                        <h4>
                            <span>Rp</span>
                            {' '}
                            1.249.000
                        </h4>
                    </div>
                    <div className="col-7">
                        <Button href="/payment-success" title="Pay Now" />
                    </div>
                </div>
            </section>
        </>
  );
}
