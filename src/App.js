import React, { useState } from "react";
import AddUser from "./components/User/AddUser";
import UsersList from "./components/User/UsersList";
import Wrapper from "./components/Helper/Wrapper";

function App() {
  const [users, setUsers] = useState([]);
  const getList = (props) => {
    setUsers((prevValue) => [...prevValue, props]);
  };
  return (
    <Wrapper>
      <AddUser addData={getList} />
      <UsersList data={users} />
    </Wrapper>
  );
}

export default App;
