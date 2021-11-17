interface MenuProps {
    title: string;
    href: any;
}

export default function Menu(props: MenuProps) {
  const { title, href } = props;
  return (
        <li className="nav-item my-auto mx-2">
            <a className="nav-link" href={href}>{title}</a>
        </li>
  );
}
