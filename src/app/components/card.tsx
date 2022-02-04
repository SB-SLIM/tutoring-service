interface CardProps {
  icon?: any;
  title: String;
  descr: String;
}

function Card({ icon, title, descr }: CardProps) {
  return (
    <div className="card">
      <div className="card__icon">{icon}</div>
      <div className="card__details">
        <h4>{title}</h4>
        <p>{descr}</p>
      </div>
    </div>
  );
}

export default Card;
