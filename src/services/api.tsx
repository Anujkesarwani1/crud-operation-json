import axios from "axios";

const usersUrl = "http://localhost:8082/users";

export const getUsers = async () => {
  try {
    return await axios.get(usersUrl);
  } catch (error: any) {
    console.log("Error while calling getUsers api ", error.message);
  }
};

export const getUser = async (data: any) => {
  try {
    return await axios.get(`${usersUrl}/${data}`);
  } catch (error: any) {
    console.log("Error while calling getUsers api ", error.message);
  }
};

export const addUser = async (user: any) => {
  return await axios.post(`${usersUrl}`, user);
};

export const deleteUser = async (id: any) => {
  try {
    return await axios.delete(`${usersUrl}/${id}`);
  } catch (error: any) {
    console.log("Error while calling getUsers api ", error.message);
  }
};

export const editUser = async (id: any, user: any) => {
  try {
    return await axios.put(`${usersUrl}/${id}`, user);
  } catch (error: any) {
    console.log("Error while calling getUsers api ", error.message);
  }
};
