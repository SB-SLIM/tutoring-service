import Button from "app/components/button";
import React from "react";
import women from "../../assets/img-women.png";
import womenMask from "../../assets/img-women-mask.png";
import Card from "app/components/card";

import { ReactComponent as Icalender } from "../../assets/icon-calender.svg";
import { ReactComponent as Icam } from "../../assets/icon-cam.svg";
import { ReactComponent as Icoins } from "../../assets/icon-coins.svg";
import { ReactComponent as Ishare } from "../../assets/icon-share.svg";


const Home = () => {
  return (
    <main className="home ">
      <section className="hero">
        <div className="hero__img">
          <div className="circle-1" />
          <div className="circle-2" />
          <img src={women} alt="img-women" />
        </div>

        <div className="hero__title">
          <div className="circle-3" />
          <h4 className="title">B.TUTOR</h4>
          <h1 className="title">we bring empowerment to tutoring services</h1>
          <p className="u-mb">
            With us, dive deeper into the ocean of knowledge
          </p>
          <Button>Become a tutor now!</Button>
        </div>
      </section>
      <section className="how">
        <div className="how__work">
          <div className="title u-mb">
            <h3>How it Works</h3>
            <p>An outstanding place for better education!</p>
          </div>
          <div className="cards">
            <Card
              icon={<Icam />}
              title="All Online"
              descr="Chat using WhatsApp, Messenger, or SMS, Audio, Video, Screen Sharing, and White Board."
            />
            <Card
              icon={<Icalender />}
              title="Flexible Schedule"
              descr="Set your working hours Prescheduled or On Demand Session."
            />

            <Card
              icon={<Icoins />}
              title="Make Extra Money"
              descr="Earn up to $20 per hour for scheduled sessions of up to $30 for on-demand sessions."
            />
            <Card
              icon={<Ishare />}
              title="Get Paid Weekly"
              descr="Setup your bank account and automatically receive funds weekly."
            />
          </div>
        </div>
        <div className="how__tuto">
          <div className="info">
            <h3>Start tutoring with B.tutor</h3>
            <p className="u-mb">
              We’re always looking for talented tutors. Set your own rate, get
              paid and make a difference.
            </p>
            <Button>Become a tutor now!</Button>
          </div>
          <img src={womenMask} alt="" />
        </div>
      </section>
      <section>section 3</section>
    </main>
  );
};

export default Home;
