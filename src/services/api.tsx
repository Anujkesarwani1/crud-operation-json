import axios from "axios";

const usersUrl = "http://localhost:3002/users/";

export const getUsers = async (id: any) => {
  id = id || "";
  try {
    return await axios.get(`${usersUrl}/${id}`);
  } catch (error) {
    console.log("Error while calling getUsers api ", error);
  }
};

export const addUser = async (user: any) => {
  try {
    const response = await axios.post(usersUrl, user);
    console.log("User added successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
};

export const deleteUser = async (id: number) => {
  return await axios.delete(`${usersUrl}/${id}`);
};

export const editUser = async (id: number, user: any) => {
  return await axios.put(`${usersUrl}/${id}`, user);
};
