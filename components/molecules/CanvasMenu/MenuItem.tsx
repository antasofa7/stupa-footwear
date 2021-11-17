import Link from 'next/link';
import style from './CanvasMenu.module.scss';

interface MenuItemProps {
    href: any;
    title: any;
}

export default function MenuItem(props: MenuItemProps) {
  const { href, title } = props;
  return (
        <div className={style.menuItem}>
            <Link href={href}>
                <a className="btn d-flex justify-content-between align-items-center">
                    {title}
                    <img src="/icons/chevron-right.svg" alt="" width={18} />
                </a>
            </Link>
        </div>
  );
}
