import Link from 'next/link';

interface MenuProps {
    title: string;
    href: any;
}

export default function Menu(props: MenuProps) {
  const { title, href } = props;
  return (
        <li className="nav-item my-auto mx-2">
          <Link href={href}>
            <a className="nav-link">{title}</a>
          </Link>
        </li>
  );
}
