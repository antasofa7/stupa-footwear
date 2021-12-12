interface DatalistProps {
    title: string;
    option1: string;
    option2: string;
    option3: string;
    option4: string;
    idInputDatalist: string;
    idOptionDatalist: string;
}

export default function Datalist(props: DatalistProps) {
  const {
    title, option1, option2, option3, option4, idInputDatalist, idOptionDatalist,
  } = props;
  return (
        <>
            <label htmlFor={idInputDatalist} className="form-label mt-3">{title}</label>
            <input className="form-control" list={idOptionDatalist} id={idInputDatalist} placeholder={title} />
            <datalist id={idOptionDatalist}>
                <option value={option1}>{option1}</option>
                <option value={option2}>{option2}</option>
                <option value={option3}>{option3}</option>
                <option value={option4}>{option4}</option>
            </datalist>
        </>
  );
}
