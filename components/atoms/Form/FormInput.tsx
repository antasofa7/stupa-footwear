interface FormInputProps{
  title: string;
  type: string;
  placeholder: string;
  focus?: any;
}

export default function FormInput(props: Partial<FormInputProps>) {
  const {
    title, type, placeholder, focus,
  } = props;
  return (
        <div className="mt-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">{title}</label>
            <input type={type} className="form-control" placeholder={placeholder} ref={focus} />
        </div>
  );
}
