import ColorItem from './ColorItem';
import style from './Colors.module.scss';

export default function Colors() {
  return (
        <div className={style.colors}>
                    <div className="d-flex justify-content-center">
                        <ColorItem color="black" black />
                        <ColorItem color="white" white />
                        <ColorItem color="red" red />
                        <ColorItem color="blue" blue />
                    </div>
        </div>
  );
}
