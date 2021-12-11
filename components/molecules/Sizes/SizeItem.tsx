import style from './Sizes.module.scss';

interface SizeItemProps {
    title: string;
    id: string;
    checked?: boolean
}

export default function SizeItem(props: Partial<SizeItemProps>) {
  const { title, id, checked } = props;
  return (
        <>
            <input type="radio" name="btn-size" id={id} autoComplete="off" checked={checked} />
            <label htmlFor={id} className={style.label}>{title}</label>
        </>
  );
}
