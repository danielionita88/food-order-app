// import { useRef, useState } from "react";
import useInput from "../hooks/use-input";

import classes from "./Checkout.module.css";

const isNotEmpty = (value) => value.trim() !== "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: enteredNameInvalid,
    valueChangeHandler: nameChangedHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);

  const {
    value: enteredStreet,
    isValid: streetIsValid,
    hasError: enteredStreetInvalid,
    valueChangeHandler: streetChangedHandler,
    valueBlurHandler: streetBlurHandler,
    reset: resetStreet,
  } = useInput(isNotEmpty);

  const {
    value: enteredCity,
    isValid: cityIsValid,
    hasError: enteredCityInvalid,
    valueChangeHandler: cityChangedHandler,
    valueBlurHandler: cityBlurHandler,
    reset: resetCity,
  } = useInput(isNotEmpty);

  const {
    value: enteredPostalCode,
    isValid: postalCodeIsValid,
    hasError: enteredPostalCodeInvalid,
    valueChangeHandler: postalCodeChangedHandler,
    valueBlurHandler: postalCodeBlurHandler,
    reset: resetPostalCode,
  } = useInput(isFiveChars);

  let formIsValid =
    nameIsValid &&
    cityIsValid &&
    streetIsValid &&
    postalCodeIsValid;

  const confirmHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    
    props.onConfirm({
        name: enteredName,
        street: enteredStreet,
        city: enteredCity,
        postalCode: enteredPostalCode
    })

    resetName();
    resetStreet();
    resetCity();
    resetPostalCode();
  };

  const nameControlClasses = `${classes.control} ${
    enteredNameInvalid ? classes.invalid : ""
  }`;

  const streetControlClasses = `${classes.control} ${
    enteredStreetInvalid ? classes.invalid : ""
  }`;

  const cityControlClasses = `${classes.control} ${
    enteredCityInvalid ? classes.invalid : ""
  }`;

  const postalControlClasses = `${classes.control} ${
    enteredPostalCodeInvalid ? classes.invalid : ""
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
        />
        {enteredNameInvalid && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          value={enteredStreet}
          onChange={streetChangedHandler}
          onBlur={streetBlurHandler}
        />
        {enteredStreetInvalid && <p>Please enter a valid street!</p>}
      </div>
      <div className={postalControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          value={enteredPostalCode}
          onChange={postalCodeChangedHandler}
          onBlur={postalCodeBlurHandler}
        />
        {enteredPostalCodeInvalid && <p>Please enter a valid postal code!</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={enteredCity}
          onChange={cityChangedHandler}
          onBlur={cityBlurHandler}
        />
        {enteredCityInvalid && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit} disabled={!formIsValid}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
