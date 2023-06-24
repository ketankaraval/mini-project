import React, { useState } from "react";
import classes from "./adduser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModule from "../UI/ErrorModule";
// import UsersList from "./UsersList";
const AddUser = (props) => {
  const intialValue = {
    name: "",
    age: "",
  };

  const [userData, setUserData] = useState(intialValue);
  const [error, setError] = useState();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };
  const displayData = (event) => {
    event.preventDefault();
    const userName = event.target.name.value;
    const userAge = event.target.age.value;
    if (userName === "" || userAge === "") {
      setError({
        title: "Blank Input",
        message: "please enter some value",
      });
      return;
    }
    if (+userAge < 1) {
      setError({
        title: "Invalid Age",
        message: "please enter valid age value",
      });
      return;
    }
    console.log(Math.floor(Math.random() * 11));
    props.addData(userData);
    setUserData(intialValue);
  };
  const errorHandler = () => {
    setError(null);
  };

  // console.log(users)

  return (
    <div>
      {error && (
        <ErrorModule
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        ></ErrorModule>
      )}
      <Card className={classes.input}>
        <form onSubmit={displayData}>
          <label htmlFor="name">UserName</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userData.name}
            onChange={handleChange}
          />
          <label htmlFor="age"> Age (Years)</label>
          <input
            type="number"
            id="age"
            name="age"
            value={userData.age}
            onChange={handleChange}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
