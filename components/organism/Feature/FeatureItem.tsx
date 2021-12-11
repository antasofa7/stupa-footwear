interface FeatureItemProps {
    icon: string;
    title: string;
}

export default function FeatureItem(props: FeatureItemProps) {
  const { icon, title } = props;
  return (
        <div className="col-6 col-sm-3 col-lg-3 p-4 p-lg-5">
            <div className="mb-1">
                <img src={`/icons/${icon}.svg`} />
            </div>
            <h6>{title}</h6>
        </div>
  );
}
