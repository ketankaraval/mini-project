import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";
const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul >
        {props.data.map((user) => (
          <li key={ Math.floor(Math.random() * 11)}>{user.name}({user.age} years old)</li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
