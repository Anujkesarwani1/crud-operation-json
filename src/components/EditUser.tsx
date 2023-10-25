import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";
import { editUser, getUser } from "../services/api";
import { useNavigate, useParams } from "react-router-dom";

const Container = styled(FormGroup)({
  width: "50%",
  margin: "5% auto 0 auto",
});

const Control = styled(FormControl)({
  marginTop: "20px",
});

const initialValues = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const EditUser = () => {
  const [user, setUser] = useState(initialValues);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    let response = await getUser(id);
    setUser(response?.data);
  };

  const onValueChange = (e: any) => {
    console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const addUserDetails = async () => {
    await editUser(id, user);
    navigate("/all");
  };

  return (
    <Container>
      <Typography variant="h4">Edit User</Typography>
      <Control>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" value={user.name} />
      </Control>
      <Control>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="username" value={user.username} />
      </Control>
      <Control>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" value={user.email} />
      </Control>
      <Control>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone" value={user.phone} />
      </Control>
      <Control>
        <Button variant="contained" onClick={addUserDetails}>
          Edit User
        </Button>
      </Control>
    </Container>
  );
};

export default EditUser;
