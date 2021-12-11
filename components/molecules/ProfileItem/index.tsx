import Link from 'next/link';

interface ProfileItemProps {
    title: string;
    href: any;
    valueItem?: string;
}

export default function ProfileItem(props: Partial<ProfileItemProps>) {
  const { title, href, valueItem } = props;
  return (
      <Link href={href}>
        <a className="py-2">
            <div className="d-flex justify-content-between">
                <h6>{title}</h6>
                <div className="d-flex">
                    {valueItem !== '' ? <span>{valueItem}</span> : '' }
                    <img src="/icons/chevron-right.svg" alt="" height={12} />
                </div>
            </div>
        </a>
      </Link>
  );
}
