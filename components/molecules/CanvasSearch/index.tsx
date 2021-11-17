import style from './CanvasSearch.module.scss';

export default function CanvasSearch() {
  return (
        <div
          className={`${style.canvasSearch} offcanvas offcanvas-top`}
          tabIndex={-1}
          id="offcanvasSearch"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            <div className={`${style.input} mb-3`}>
              <input
                type="text"
                id="searchInput"
                className="form-control"
                placeholder="Search..."
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <a onClick={() => document.getElementById('searchInput').value = ''}>
                  <img src="/icons/x.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
  );
}
