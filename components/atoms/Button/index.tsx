import Link from 'next/link';
import style from './Button.module.scss';

interface ButtonProps {
    href: any;
    title?: string;
    icon?: string;
}

export default function Button(props: Partial<ButtonProps>) {
  const {
    href, title, icon,
  } = props;
  return (
        <div className={style.button}>
          <Link href={href}>
            <a className="d-flex align-items-center justify-content-center">
              { icon ? <img src={`/icons/${icon}.svg`} alt="" /> : '' }
              {title ?? ''}
            </a>
          </Link>
        </div>
  );
}
