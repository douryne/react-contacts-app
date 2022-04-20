import axios from "axios";

interface IGetUserProps {
  username: string,
  password?: string
}

export default class AuthServer {
  static getUser = async ({username, password}: IGetUserProps) => {
    const response = await axios.get(`http://localhost:3001/users?username=${username}`);
    return response.data;
  }
}