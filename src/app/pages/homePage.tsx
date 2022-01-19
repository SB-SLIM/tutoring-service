import Button from "app/components/button";
import React from "react";
import women from "../../assets/images/1x/img-women-1x.png";
import womenMask1x from "../../assets/images/1x/img-women-mask-1x.png";
import womenMask2x from "../../assets/images/2x/img-women-mask-2x.png";

import Card from "app/components/card";

import { ReactComponent as Icalender } from "../../assets/icon-calender.svg";
import { ReactComponent as Icam } from "../../assets/icon-cam.svg";
import { ReactComponent as Icoins } from "../../assets/icon-coins.svg";
import { ReactComponent as Ishare } from "../../assets/icon-share.svg";
import Accordion from "app/components/accordion";

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
          <picture>
            <source
              srcSet={`${womenMask1x} 1x, ${womenMask2x} 2x`}
              media="(max-width: 1400em)"
            />
            <img
              srcSet={`${womenMask1x} 1x, ${womenMask2x} 2x`}
              alt="women cask"
              src={womenMask1x}
            ></img>
          </picture>
        </div>
      </section>
      <section className="faqs">
        <div className="title u-mb">
          <h3>FAQs</h3>
        </div>
        <div className="u-mb">
          <Accordion
            title="Which countries do you operate?"
            body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde sequi voluptatem ut distinctio corporis soluta doloremque ipsum, pariatur totam voluptate? Earum dolore delectus explicabo cum reiciendis ipsam maiores fugit consequuntur.
Rerum vero dolorum praesentium quis voluptatem minus accusantium repellat obcaecati illum eum sapiente a porro alias asperiores eligendi quas at numquam omnis, perspiciatis voluptates velit tempore veritatis repellendus fugiat. Beatae."
          />
          <Accordion
            title="Subjects offered?"
            body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde sequi voluptatem ut distinctio corporis soluta doloremque ipsum, pariatur totam voluptate? Earum dolore delectus explicabo cum reiciendis ipsam maiores fugit consequuntur.
Rerum vero dolorum praesentium quis voluptatem minus accusantium repellat obcaecati illum eum sapiente a porro alias asperiores eligendi quas at numquam omnis, perspiciatis voluptates velit tempore veritatis repellendus fugiat. Beatae."
          />
          <Accordion
            title="School Curriculum offered?"
            body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde sequi voluptatem ut distinctio corporis soluta doloremque ipsum, pariatur totam voluptate? Earum dolore delectus explicabo cum reiciendis ipsam maiores fugit consequuntur.
Rerum vero dolorum praesentium quis voluptatem minus accusantium repellat obcaecati illum eum sapiente a porro alias asperiores eligendi quas at numquam omnis, perspiciatis voluptates velit tempore veritatis repellendus fugiat. Beatae."
          />
          <Accordion
            title="Do I set my own fee or is it a fixed fee?"
            body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde sequi voluptatem ut distinctio corporis soluta doloremque ipsum, pariatur totam voluptate? Earum dolore delectus explicabo cum reiciendis ipsam maiores fugit consequuntur.
Rerum vero dolorum praesentium quis voluptatem minus accusantium repellat obcaecati illum eum sapiente a porro alias asperiores eligendi quas at numquam omnis, perspiciatis voluptates velit tempore veritatis repellendus fugiat. Beatae."
          />
          <Accordion
            title="Do I have to download special software?"
            body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde sequi voluptatem ut distinctio corporis soluta doloremque ipsum, pariatur totam voluptate? Earum dolore delectus explicabo cum reiciendis ipsam maiores fugit consequuntur.
Rerum vero dolorum praesentium quis voluptatem minus accusantium repellat obcaecati illum eum sapiente a porro alias asperiores eligendi quas at numquam omnis, perspiciatis voluptates velit tempore veritatis repellendus fugiat. Beatae."
          />
        </div>
      </section>
      <div className="faqs__btn-container">
        <Button type="primary-outlined">More FAQs</Button>
      </div>
    </main>
  );
};

export default Home;
