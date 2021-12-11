interface FormFloatingProps {
    id: string;
    type: string;
    placeholder: string;
    title: string;
}

export default function FormFloating(props: FormFloatingProps) {
  const {
    id, type, placeholder, title,
  } = props;
  return (
    <label htmlFor={id}>
        <input type={type} id={id} placeholder={placeholder} />
        <span>{title}</span>
    </label>
  );
}
