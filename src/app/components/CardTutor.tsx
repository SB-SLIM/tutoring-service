import { Button } from ".";
import Rate from "./Rate";
import { ReactComponent as Iconmsg } from "../../assets/icon-msg.svg";
import { ReactComponent as IconOpenBook } from "../../assets/icon-open-book.svg";

function CardTutor({ name, desc, picture, price, rate, speaks, teaches }: any) {
  return (
    <div className="card-tutor">
      <div className="card-tutor__teacher">
        <img src={picture.large} alt="pl" />
        <div className="card-tutor__details">
          <h3>{name}</h3>
          <p>{desc}</p>
          <div className="teaches">
            <p>
              <IconOpenBook className="icon" />
              Teaches
            </p>
            <p>{teaches} langage</p>
          </div>
          <div className="speakes">
            <p>
              <Iconmsg className="icon" /> Speakes
            </p>
            <div className="speakes__list">
              {speaks.map(
                (s: { langage: string; level: string }, index: number) => {
                  const { langage, level } = s;
                  return (
                    <div key={index} className="speakes__item">
                      <p>{langage}</p>
                      <p>{level}</p>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
        <div className="card-tutor__rate">
          <div>
            <span className="price">{price}$</span> per hour
          </div>
          <Rate rate={rate} />
        </div>
      </div>
      <div className="card-tutor__btn-container">
        <a href="#/" className="btn btn--secondary-outlined">
          View Profile
        </a>
        <Button label="Book Lesson" />
      </div>
    </div>
  );
}

export default CardTutor;
