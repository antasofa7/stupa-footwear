import style from './Color.module.scss';
import ColorItem from './ColorItem';

export default function Color() {
  return (
        <div className={style.color}>
          <div className="row px-2 align-items-center">
              <div className="col-3 mt-1">
                  <h6>Color</h6>
              </div>
              <div className="col-9">
                  <div className="d-flex justify-content-end">
                      <ColorItem colorStyle="#1818F0" id="blue" value="blue" />
                      <ColorItem colorStyle="#000000" id="black" value="black" />
                      <ColorItem colorStyle="#F01818" id="red" value="red" />
                      <ColorItem colorStyle="#F0F0F8" id="white" value="white" />
                  </div>
              </div>
          </div>
        </div>
  );
}
