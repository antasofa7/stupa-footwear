import style from './Size.module.scss';

interface SizeItemProps {
    id: string;
    title: string;
}
export default function SizeItem(props: SizeItemProps) {
  const { id, title } = props;
  return (
        <>
            <input type="radio" className="btn-check" name="size" id={id} autoComplete="off" />
            <label className={style.size} htmlFor={id}>{title}</label>
        </>
  );
}
