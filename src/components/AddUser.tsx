import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import { addUser } from "../services/api";
import { useNavigate } from "react-router-dom";

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

const AddUser = () => {
  const [user, setUser] = useState(initialValues);
  let navigate = useNavigate();

  const onValueChange = (e: any) => {
    console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const addUserDetails = async () => {
    await addUser(user);
    navigate("/all");
  };

  return (
    <Container>
      <Typography variant="h4">Add User</Typography>
      <Control>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" />
      </Control>
      <Control>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="username" />
      </Control>
      <Control>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" />
      </Control>
      <Control>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone" />
      </Control>
      <Control>
        <Button variant="contained" onClick={addUserDetails}>
          Add Users
        </Button>
      </Control>
    </Container>
  );
};

export default AddUser;
