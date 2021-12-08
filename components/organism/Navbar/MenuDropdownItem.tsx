import Link from 'next/link';

interface MenuDropdownItemProps {
    title: any;
    href: any;
}

export default function MenuDropdownItem(props: MenuDropdownItemProps) {
  const { title, href } = props;
  return (
        <li>
            <a className="dropdown-item" href={href}>{title}</a>
        </li>
  );
}
