import style from './PaymentItem.module.scss';

interface PaymentItemProps {
    namaBank: string;
    namaPemilik: string;
    nomerRekening: string;
    idAccordion: string;
}

export default function PaymentItem(props: PaymentItemProps) {
  const {
    namaBank, namaPemilik, nomerRekening, idAccordion,
  } = props;
  return (
    <div className={style.payment}>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${idAccordion}`}
                  aria-expanded="false"
                  aria-controls={idAccordion}
                >
                    {namaBank}
                </button>
                </h2>
                <div id={idAccordion} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <div className={style.paymentCard}>
                        <img src="/images/payment_card.png" alt="payment card" />
                        <h6>{namaPemilik}</h6>
                        <h5>{namaBank}</h5>
                        <h4>{nomerRekening}</h4>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  );
}
