import Button from '../../atoms/Button';

export default function Modal() {
  return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Alamat Pengiriman</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                modal
              </div>
              <div className="modal-footer">
                <Button href="#" title="Save" />
              </div>
            </div>
          </div>
        </div>
  );
}
