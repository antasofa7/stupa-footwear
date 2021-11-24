import CanvasCart from '../../molecules/CanvasCart';
import CanvasMenu from '../../molecules/CanvasMenu';
import CanvasSearch from '../../molecules/CanvasSearch';
import Menu from './Menu';
import MenuDropdown from './MenuDropdown';

import style from './Navbar.module.scss';
import NavIcon from './NavIcon';

export default function Navbar() {
  return (
    <nav className=" sticky-top px-1 px-md-4 pt-lg-3 px-lg-5">
      <div className="navbar navbar-expand-lg justify-content-between">
        <NavIcon href="#offcanvasMenu" image="/icons/menuBar.svg" classname={`${style.icon} navbar-toggler p-0 border-0`} canvas="offcanvas" />
        <CanvasMenu />
        <NavIcon href="/" image="/images/logo.png" classname={`${style.brand} navbar-brand`} />
        <div className="ms-lg-5">
          <NavIcon href="#offcanvasSearch" image="/icons/search.svg" canvas="offcanvas" classname={style.icon} />
          <NavIcon href="/sign-in" image="/icons/user.svg" classname={`${style.icon} mx-3 mx-lg-4`} />
          <NavIcon href="#offcanvasCart" image="/icons/bag.svg" canvas="offcanvas" classname={style.icon} />
          <CanvasSearch />
          <CanvasCart />
        </div>
      </div>
        {/* <hr className="d-none d-lg-block" /> */}
      <div className={`${style.nav} d-none d-lg-flex`} id="navbarNav">
        <ul className="ms-auto text-lg gap-lg-0 gap-2">
          <Menu href="/newArrivals" title="New Arrivals" />
          <Menu href="/bestSellers" title="Best Sellers" />
          <MenuDropdown
            title="Sneakers"
            href1="/collections"
            dropdownItem1="Kofuku"
            href2=""
            dropdownItem2="Ortuseight"
            href3=""
            dropdownItem3="Ventela"
          />
          <MenuDropdown
            title="Sports"
            href1=""
            dropdownItem1="Piero"
            href2=""
            dropdownItem2="Patrobas"
            href3=""
            dropdownItem3="Specs"
          />
          <MenuDropdown
            title="Others"
            href1=""
            dropdownItem1="Tas"
            href2=""
            dropdownItem2="Accesories"
          />
          <MenuDropdown
            title="Information"
            href1=""
            dropdownItem1="Payment Confirmation"
            href2=""
            dropdownItem2="How to Order"
            href3=""
            dropdownItem3="FAQ"
          />
        </ul>
      </div>
    </nav>
  );
}
