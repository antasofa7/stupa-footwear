interface ColorItemProps {
    colorStyle: string;
    id: string;
    value: string;
}
export default function ColorItem(props: ColorItemProps) {
  const { colorStyle, id, value } = props;
  return (
        <div className="form-check mx-1">
            <input
              className="form-check-input"
              style={{ backgroundColor: colorStyle, borderColor: colorStyle }}
              type="radio"
              name="color"
              id={id}
              value={value}
            />
        </div>
  );
}
