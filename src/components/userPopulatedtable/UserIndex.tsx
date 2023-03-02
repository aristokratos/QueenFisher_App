import axios from 'axios';
import React, {useState, useEffect} from 'react'
import UserPopulatedTable from './UserPopulatedTable';
import { IUser } from './UserTypes';

const UserIndex = () => {

    const [data, setData] = useState<IUser[]>([]);

  const fetchData = async () => {
    const uri = "https://jsonplaceholder.typicode.com/users";
    const response = await axios.get<IUser[]>(uri);
    console.log(response);
    setData(response.data);
  };
  //fetch the api here.
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div> <UserPopulatedTable/></div>
  )
}

export default UserIndex