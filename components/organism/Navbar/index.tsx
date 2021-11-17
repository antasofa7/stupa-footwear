import CanvasCart from '../../molecules/CanvasCart';
import CanvasMenu from '../../molecules/CanvasMenu';
import CanvasSearch from '../../molecules/CanvasSearch';
import Menu from './Menu';
import MenuDropdown from './MenuDropdown';

import style from './Navbar.module.scss';
import NavIcon from './NavIcon';

export default function Navbar() {
  return (
    <nav className={`${style.nav} navbar navbar-expand-lg sticky-top px-1 px-md-4 py-lg-4 px-lg-5`}>
      <NavIcon href="#offcanvasMenu" image="/icons/menuBar.svg" classname={`${style.icon} navbar-toggler p-0 border-0`} canvas="offcanvas" />
      <CanvasMenu />
      <NavIcon href="/" image="/images/logo.png" classname={`${style.brand} navbar-brand`} />
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
          <Menu href="/newArrivals" title="New Arrivals" />
          <Menu href="/bestSellers" title="Best Sellers" />
          <MenuDropdown
            title="Sneakers"
            href1=""
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
            title="Info"
            href1=""
            dropdownItem1="Payment Confirmation"
            href2=""
            dropdownItem2="How to Order"
            href3=""
            dropdownItem3="FAQ"
          />
        </ul>
      </div>
      <div className="ms-lg-5">
        <NavIcon href="#offcanvasSearch" image="/icons/search.svg" canvas="offcanvas" />
        <NavIcon href="sign-in.html" image="/icons/user.svg" classname="mx-3 mx-lg-4" />
        <NavIcon href="#offcanvasCart" image="/icons/bag.svg" canvas="offcanvas" />
        <CanvasSearch />
        <CanvasCart />
      </div>
    </nav>
  );
}
