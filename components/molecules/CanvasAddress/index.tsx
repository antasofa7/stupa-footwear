import Button from '../../atoms/Button';
import Datalist from '../../atoms/Form/Datalist';
import FormInput from '../../atoms/Form/FormInput';
import style from './CanvasAddress.module.scss';

export default function CanvasAddress() {
  return (
        <div
          className={`${style.canvasAddress} offcanvas offcanvas-bottom`}
          tabIndex={-1}
          id="offcanvasAddress"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-body">
            <div className={style.cardForm}>
              <FormInput type="text" title="Nama Penerima" placeholder="Masukkan nama penerima" />
              <Datalist title="Provinsi" idInputDatalist="inputProvinsi" idOptionDatalist="optionProvinsi" option1="Jawa Tengah" option2="Riau" option3="Gorontalo" option4="Maluku Utara" />
              <Datalist title="Kabupaten" idInputDatalist="inputProvinsi" idOptionDatalist="optionProvinsi" option1="Jawa Tengah" option2="Riau" option3="Gorontalo" option4="Maluku Utara" />
              <Datalist title="Kecamatan" idInputDatalist="inputProvinsi" idOptionDatalist="optionProvinsi" option1="Jawa Tengah" option2="Riau" option3="Gorontalo" option4="Maluku Utara" />
              <div className="mt-2">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Detail alamat</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} placeholder="Masukkan detail alamat" />
              </div>
            </div>
            <div className="form-check mt-3">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Simpan sebagai member
              </label>
            </div>
            <div className="row mt-3">
                <div className="col-6">
                    <button
                      type="button"
                      className={style.btn_cancel}
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    >
                        Cancel
                    </button>
                </div>
                <div className="col-6">
                    <Button href="/checkout" title="Save" />
                </div>
            </div>
          </div>
        </div>
  );
}
