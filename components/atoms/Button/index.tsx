import style from './Button.module.scss';

interface ButtonProps {
    href: string;
    title: string;
    image: boolean;
    icon?: string;
}

export default function Button(props: Partial<ButtonProps>) {
  const {
    href, title, image, icon,
  } = props;
  return (
        <div className={style.button}>
          <a href={href} className="d-flex align-items-center justify-content-center">
            { image ? <img src={`/icons/${icon}.svg`} alt="" /> : '' }
            {title}
          </a>
        </div>
  );
}
