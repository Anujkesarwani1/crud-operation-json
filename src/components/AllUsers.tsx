import { useState, useEffect } from "react";

import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";
import { deleteUser, getUsers } from "../services/api";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
  background: #000;
  color: #ffffff;
  & > th {
    color: #fff;
    font-size: 20px;
  }
`;

export interface UserDetails {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

const AllUsers = () => {
  const [users, setUsers] = useState<UserDetails[]>([]);

  useEffect(() => {
    getUsersDetails();
  }, []);

  const deleteUserData = async (id: any) => {
    await deleteUser(id);
    getUsersDetails();
  };

  const getUsersDetails = async () => {
    let response = await getUsers();
    setUsers(response?.data);
  };

  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Link to={`/edit/${user.id}`}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ marginRight: "0.5rem" }}
                  size="small"
                >
                  Edit
                </Button>
              </Link>

              <Button
                variant="contained"
                color="secondary"
                size="small"
                onClick={() => deleteUserData(user.id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default AllUsers;
