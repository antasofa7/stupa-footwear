import style from './Brand.module.scss';

interface BrandItemProps {
    href: any;
    title: string;
}

export default function BrandItem(props: BrandItemProps) {
  const { title, href } = props;
  return (
        <a href={href} role="button" className={style.btnBrand}>{title}</a>
  );
}
