import Link from 'next/link';

interface MenuDropdownItemProps {
    title: any;
    href: any;
}

export default function MenuDropdownItem(props: MenuDropdownItemProps) {
  const { title, href } = props;
  return (
        <li>
          <Link href={href}>
            <a className="dropdown-item">{title}</a>
          </Link>
        </li>
  );
}
