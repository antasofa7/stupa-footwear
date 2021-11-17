import AccordionItem from './AccordionItem';
import style from './CanvasMenu.module.scss';

interface MenuAccordionItemProps {
    title: string;
    idCollapse: string;
    idHeading: string;
    href1: any;
    href2: any;
    href3?: any;
    itemDropdown1: any;
    itemDropdown2: any;
    itemDropdown3?: any;
}

export default function MenuAccordionItem(props: Partial<MenuAccordionItemProps>) {
  const {
    title, idCollapse, idHeading, href1, href2, href3, itemDropdown1, itemDropdown2, itemDropdown3,
  } = props;
  console.log(href3);
  return (
        <div className={`${style.accordionItem} accordion-item`}>
            <h2 className="accordion-header" id={idHeading}>
                <button
                  className={`${style.accordionButton} accordion-button collapsed`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${idCollapse}`}
                  aria-expanded="false"
                  aria-controls={idCollapse}
                >
                {title}
                </button>
            </h2>
            <div
              id={idCollapse}
              className="accordion-collapse collapse"
              aria-labelledby={idHeading}
              data-bs-parent="#accordionFlushExample"
            >
                <div className="accordion-body py-0">
                    <AccordionItem href={href1} title={itemDropdown1} />
                    <AccordionItem href={href2} title={itemDropdown2} />
                    <AccordionItem href={href3} title={itemDropdown3} />
                </div>
            </div>
        </div>
  );
}
