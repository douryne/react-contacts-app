import axios from "axios";


interface IContact {
  id: number,
  name: string,
  telNumber: string
}

interface IGetUserProps {
  username: string,
  contacts?: IContact[]
}

export default class AuthServer {
  static getUser = async ({username}: IGetUserProps) => {
    const response = await axios.get(`http://localhost:3001/users?username=${username}`);
    return response.data;
  }
  static postContacts = async (form: IGetUserProps) => {
    const username = form.username;
    const users = await this.getUser({username});
    const id = users[0].id;
    const response = await axios.put(`http://localhost:3001/users/${id}/`,{...users[0], contacts: form.contacts});
    return response.data;
  }
}