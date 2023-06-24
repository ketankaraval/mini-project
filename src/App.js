import React, { useState } from 'react';
import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';

function App() {
  const [users, setUsers] = useState([]);
  const getList = (props)=>{
    setUsers((prevValue) => [...prevValue, props]);
  }
  return (
    <div>
    <AddUser addData={getList}/>
    <UsersList data={users}/>
    </div>
  );
}

export default App;
