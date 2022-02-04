import { ImStarEmpty, ImStarHalf, ImStarFull } from "react-icons/im";

function Rate({ rate }: any) {
  const starEmpty = <ImStarEmpty className="star" />;
  const starHalf = <ImStarHalf className="star" />;
  const starFull = <ImStarFull className="star" />;
  let tmp = [];

  for (let i = 0; i < 5; i++) {
    tmp.push(starEmpty);
  }

  if (rate > 0) {
    for (let i = 0; i < Math.floor(rate); i++) {
      tmp[i] = starFull;
    }
    if (Math.floor(rate) < 5 && rate % 1 > 0) {
      tmp[Math.floor(rate)] = starHalf;
    }
  }

  return <div>{tmp.map((star) => star)}</div>;
}

export default Rate;
