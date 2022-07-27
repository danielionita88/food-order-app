import { Fragment } from "react";

import CartButton from "./CartButton";
import mealsImage from "../../assets/meals.jpeg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <CartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Table full of food" />
      </div>
    </Fragment>
  );
};

export default Header;
