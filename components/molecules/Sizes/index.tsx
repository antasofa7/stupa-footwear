import CanvasSize from '../CanvasSize';
import SizeItem from './SizeItem';
import style from './Sizes.module.scss';

export default function Sizes() {
  return (
        <div className={style.sizes}>
            <div className="d-flex mt-4 justify-content-between">
                <h6>Choose Size</h6>
                <div>
                <a href="#offcanvasSize" data-bs-toggle="offcanvas">Size guide</a>
                    <CanvasSize />
                </div>
            </div>
            <div className="mb-2">
                <div className={style.size}>
                    <div className="d-flex justify-content-between">
                        <SizeItem title="39" id="39" checked />
                        <SizeItem title="40" id="40" checked />
                        <SizeItem title="41" id="41" checked />
                        <SizeItem title="42" id="42" checked />
                        <SizeItem title="43" id="43" checked />
                    </div>
                </div>
            </div>
        </div>
  );
}
