import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

function Animation() {
  const el = useRef(null);

  const [isShow, setIsShow] = useState(false);
  const tl = gsap.timeline({ paused: true });
  useEffect(() => {
    el.current && tl.set(el.current, { height: 0 });
    tl.to(el.current, {
      duration: 1.75,
      height: "auto",
    });
  }, []);

  useEffect(() => {}, [isShow]);

  return (
    <div>
      <div style={{ display: "flex", margin: "3rem" }}>
        <button
          style={{ marginRight: "3rem" }}
          onClick={() => {
            tl.play();

            setIsShow(!isShow);
          }}
          className="btn"
        >
          Click Down
        </button>
        <button
          onClick={() => {
            tl.reverse();
            setIsShow(!isShow);
          }}
          className="btn btn--secondary"
        >
          Click Up
        </button>
      </div>
      <div
        className="el"
        ref={el}
        style={{ overflow: "hidden", width: "400px", margin: "3rem" }}
      >
        <div style={{ height: "100px", background: "yellow" }}>
          <h1>SLIM</h1>
        </div>
      </div>
    </div>
  );
}

export default Animation;
