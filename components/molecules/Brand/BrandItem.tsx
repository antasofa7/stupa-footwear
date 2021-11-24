import Link from 'next/link';
import style from './Brand.module.scss';

interface BrandItemProps {
    href: any;
    title: string;
}

export default function BrandItem(props: BrandItemProps) {
  const { title, href } = props;
  return (
    <Link href={href}>
        <a role="button" className={style.btnBrand}>{title}</a>
    </Link>
  );
}
