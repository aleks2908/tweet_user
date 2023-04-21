import css from "./Card.module.css";
import logo from "../images/Logo.png";
import picture from "../images/picture2.png";
import ellipse from "../images/ellipse.png";
import user from "../images/user.png";

export const Card = () => {
  return (
    <div className={css.card}>
      {/* <div className={css.bgImageWrapper}> */}
      <img className={css.picture} src={picture} alt="" />
      {/* </div> */}

      <img className={css.logo} src={logo} alt="card logo" />

      {/* <img className={css.picture} src={picture} alt="" /> */}

      <div className={css.userWrapper}>
        <div className={css.line}></div>
        <div className={css.userBlock}>
          <img className={css.user} src={user} alt="" />
          <img className={css.ellipse} src={ellipse} alt="" />
        </div>
      </div>

      <p className={css.counter}>777 tweets</p>
      <p className={css.counter}>100,501 Followers</p>

      <button className={css.button} type="button">
        Follow
      </button>
    </div>
  );
};
