import { useEffect, useState } from "react";

import css from "./Card.module.css";
import logo from "../images/Logo.png";
import picture from "../images/picture2.png";
import ellipse from "../images/ellipse.png";
// import user from "../images/user.png";

export const Card = ({ user, onCardChange }) => {
  const [folowing, setfolowing] = useState(() => {
    return JSON.parse(localStorage.getItem("folowing")) ?? "passive";
  });

  // onCardChange(123);

  // console.log(userrrr);

  // console.log(users);

  // const [folowers, setfolowers] = useState(100500);

  useEffect(() => {
    localStorage.setItem("folowing", JSON.stringify(folowing));

    // if (folowing === "active") {
    //   // console.log("Збільшую");
    //   setfolowers((prevState) => prevState + 1);
    // } else {
    //   // console.log("Зменшую");
    //   setfolowers(100500);
    // }
  }, [folowing]);

  // const handleClick = (id) => {
  //   console.log("id: ", id);
  //   // setfolowing(folowing === "active" ? "passive" : "active");
  //   onCardChange(id);
  // };

  const { avatar, followers, tweets, id, active } = user;
  // console.log('id: ', id);

  return (
    <div className={css.card}>
      <img className={css.picture} src={picture} alt="bg-pic" />
      <img className={css.logo} src={logo} alt="card logo" />
      <div className={css.userWrapper}>
        <div className={css.line}></div>
        <div className={css.userBlock}>
          <img className={css.userAvatar} src={avatar} alt="user avatar" />
          <img className={css.ellipse} src={ellipse} alt="ellipse" />
        </div>
      </div>
      <p className={css.counter}>{tweets} tweets</p>
      <p className={css.counter}>
        {new Intl.NumberFormat("en-En").format(followers)} Followers
      </p>

      <button
        className={`${css.button} ${css[active]}`}
        type="button"
        onClick={() => onCardChange(id, followers, active)}
      >
        {active === "active" ? "Following" : "Follow"}
      </button>
    </div>
  );
};
