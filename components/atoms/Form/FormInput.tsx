interface FormInputProps{
  title: string;
  type: string;
  placeholder: string;
}

export default function FormInput(props: FormInputProps) {
  const { title, type, placeholder } = props;
  return (
        <div className="my-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">{title}</label>
            <input type={type} className="form-control" id="exampleFormControlInput1" placeholder={placeholder} />
        </div>
  );
}
