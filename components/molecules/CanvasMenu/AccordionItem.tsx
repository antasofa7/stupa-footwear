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
                <a className="btn d-flex justify-content-between align-items-center" href={href}>
                    {title}
                    <img src="/icons/chevron-right.svg" alt="" />
                </a>
            </div>
              ) : ''}
        </div>
  );
}
