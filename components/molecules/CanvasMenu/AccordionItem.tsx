import Link from 'next/link';
import style from './CanvasMenu.module.scss';

interface AccordionItemProps {
    href: any;
    title: string
}

export default function AccordionItem(props: AccordionItemProps) {
  const { href, title } = props;
  return (
        <div>
            {href !== undefined
              ? (
            <div className={style.accordionBody}>
              <Link href={href}>
                <a className="btn d-flex justify-content-between align-items-center">
                    {title}
                    <img src="/icons/chevron-right.svg" alt="" />
                </a>
              </Link>
            </div>
              ) : ''}
        </div>
  );
}
