import style from './CanvasSize.module.scss';

export default function CanvasSize() {
  return (
        <div
          className={`${style.canvasSize} offcanvas offcanvas-bottom`}
          tabIndex={-1}
          id="offcanvasSize"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-body">
            Size Guide
          </div>
        </div>
  );
}
