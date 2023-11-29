import { useState, useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import UserCards from "../../Components/UserCards/UserCards";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { users } from "../../data/user-cards.json";
import "./LandingPage.css";

function LandingPage({ data }) {
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const previousSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  useEffect(() => {
    const intervalID = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(intervalID);
  });
  return (
    <div className="landing-page-container">
      <div className="landing-page-content">
        {/* <NavBar /> */}
        <BsArrowLeftCircleFill
          className="arrow arrow-left"
          onClick={previousSlide}
        />
        <NavBar />
        <div className="header-container">
          <p>Your Style, Your Rules</p>
          <h1>Find Your Stylist Today</h1>
        </div>
        {data.map((item, i) => {
          return (
            <img
              src={item.src}
              alt={item.alt}
              key={i}
              className={slide === i ? "slide" : "slide slide-hidden"}
            />
          );
        })}
        <BsArrowRightCircleFill
          className="arrow arrow-right"
          onClick={nextSlide}
        />
        <span className="indicators">
          {data.map((_, i) => {
            return (
              <button
                key={i}
                onClick={() => setSlide(i)}
                className={
                  slide === i ? "indicator" : "indicator indicator-disabled"
                }
              ></button>
            );
          })}
        </span>
      </div>
      <div className="userCards-landingPage-container">
        <UserCards users={users} />
      </div>
    </div>
  );
}

export default LandingPage;
