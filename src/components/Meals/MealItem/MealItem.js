import classes from "./MealItem.module.css";

import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const { id, name, description, price } = props.meal;
  const priced = `$${price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={price}>{priced}</div>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
};

export default MealItem;
