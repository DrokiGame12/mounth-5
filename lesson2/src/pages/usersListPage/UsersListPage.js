import React from "react";
import { Button } from "react-bootstrap/";
import { useDispatch } from "react-redux";
import { getUsersAction } from "../../redux/action";
import { useSelector } from "react-redux";
import UserCard from "../../components/Card";

function UsersListPage() {
  const dispatch = useDispatch();
  const helo = async () => {
    const data = await getUsersAction();
    dispatch(data);
  };

  const users = useSelector((state) => state.usersReduser.users);
  return (
    <div className="usersListPage">
      <Button variant="outline-warning" onClick={() => helo()}>
        Get users
      </Button>
      {!!users && 
        <div className="userList">
          {users.map(user => <UserCard user={user} key={user.id}/>)}
        </div>
      }
    </div>
  );
}

export default UsersListPage;
