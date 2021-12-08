import Link from 'next/link';
import Button from '../../atoms/Button';
import style from './CanvasMenu.module.scss';
import MenuAccordionItem from './MenuAccordionItem';
import MenuItem from './MenuItem';

export default function CanvasMenu() {
  return (
    <div
      className={`${style.menuCanvas} offcanvas offcanvas-start`}
      tabIndex={-1}
      id="offcanvasMenu"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div className="offcanvas-header">
        <Link href="/">
          <a className={style.brand}>
            <img
              src="/images/logo.png"
              alt="logo"
            />
          </a>
        </Link>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div className="offcanvas-body d-flex flex-column justify-content-between">
        <div>
          <MenuItem href="/new-arrivals" title="New Arrivals" />
          <MenuItem href="/best-sellers" title="Best Sellers" />
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <MenuAccordionItem
              title="Sneakers"
              idCollapse="flush-collapseSneakers"
              idHeading="flush-headingSneakers"
              href1="/collections"
              itemDropdown1="Warriors"
              href2="/collections"
              itemDropdown2="Kofuku"
              href3="/collections"
              itemDropdown3="Ventela"
            />
            <MenuAccordionItem
              title="Sports"
              idCollapse="flush-collapseSports"
              idHeading="flush-headingSports"
              href1="/collections"
              itemDropdown1="Patrobas"
              href2="/collections"
              itemDropdown2="Piero"
              href3="/collections"
              itemDropdown3="Specs"
            />
            <MenuAccordionItem
              title="Others"
              idCollapse="flush-collapseOthers"
              idHeading="flush-headingOthers"
              href1="/collections"
              itemDropdown1="Tas"
              href2="/collections"
              itemDropdown2="Accesories"
            />
            <MenuAccordionItem
              title="Info"
              idCollapse="flush-collapseInfo"
              idHeading="flush-headingInfo"
              href1="/collections"
              itemDropdown1="Payment Confirmation"
              href2="/collections"
              itemDropdown2="Size Guide"
              href3="/collections"
              itemDropdown3="FAQ"
            />
          </div>
        </div>

        <div className="mt-4 mb-2">
          <Button href="/login" title="Sign In" />
        </div>
      </div>
    </div>
  );
}
