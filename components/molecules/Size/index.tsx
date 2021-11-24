import style from './Size.module.scss';
import SizeItem from './SizeItem';

export default function Size() {
  return (
    <div className={`${style.sizeProduct} my-2`}>
        <div className="row px-2 align-items-center">
            <div className="col-2 mt-1">
                <h6>Size</h6>
            </div>
            <div className="col-10">
                <div className="d-flex justify-content-end">
                    <SizeItem id="39" title="39" />
                    <SizeItem id="40" title="40" />
                    <SizeItem id="41" title="41" />
                    <SizeItem id="42" title="42" />
                    <SizeItem id="43" title="43" />
                </div>
            </div>
            <div className="d-flex justify-content-between">
                {/* <div /> */}
                <div className="m-2">
                    <a data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">+ Size guide</a>
                    <div className="collapse" id="collapseExample">
                        <div className="card card-body">
                            Some placeholder content for
                            the collapse component.
                            This panel is hidden by default
                            but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

  );
}
