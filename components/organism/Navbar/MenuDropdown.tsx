import MenuDropdownItem from './MenuDropdownItem';

interface MenuDropdownProps {
    title: string;
    href1: any;
    href2: any;
    href3?: any;
    dropdownItem1: string;
    dropdownItem2: string;
    dropdownItem3?: string;
}

export default function MenuDropdown(props: Partial<MenuDropdownProps>) {
  const {
    title, href1, href2, href3, dropdownItem1, dropdownItem2, dropdownItem3,
  } = props;
  return (
        <li className="nav-item mx-2 my-auto dropdown">
          <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {title}
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <MenuDropdownItem title={dropdownItem1} href={href1} />
            <MenuDropdownItem title={dropdownItem2} href={href2} />
            <MenuDropdownItem title={dropdownItem3} href={href3} />
          </ul>
        </li>
  );
}
