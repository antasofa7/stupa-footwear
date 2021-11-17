import Link from 'next/link';

interface NavIconProps {
    href: any;
    image:string;
    canvas?: string;
    classname?: string;
}

export default function NavIcon(props: Partial<NavIconProps>) {
  const {
    href, image, canvas, classname,
  } = props;
  return (
        <Link href={href}>
          <a data-bs-toggle={canvas} className={classname}>
            <img src={image} alt={image} />
          </a>
        </Link>
  );
}
