import cx from 'classnames';
// import style from './Colors.module.scss';

interface ColorItemProps {
  color: string,
  // checked?: boolean,
  white?: boolean,
  black?: boolean,
  red?: boolean,
  blue?: boolean,
}

export default function ColorItem(props: Partial<ColorItemProps>) {
  const {
    black, white, red, blue, color,
  } = props;
  const classColor = cx({
    black, white, red, blue,
  });
  return (
        <div className="mx-1">
          <label htmlFor={color} className={classColor} />
        </div>
  );
}
