import {Column, useTable} from 'react-table';
import React, {useMemo, useState, useEffect} from 'react'
import { IUser } from "./UserTypes";
import './UserPopulatedTable.css';
import {UserService} from './UserService';
import './UserPopulatedTable.css';
import arrow from "../../assets/arrow.png";
import { Link } from 'react-router-dom';


interface IState {
      users: IUser[];
     };

const UserPopulatedTable = () => {

  const [data, setData] = useState<IState>({
          users: UserService.getAllUsers(),
        });
  console.log(data);
  return (
    <div className='table-container-user'>

      <div className='arrow-span-user'>
        <Link to ="/resetpassword">
        <img src={arrow} alt="backarrow" className='table-arrow-user'/>
        </Link>
      
      <span className='span-table-user'>Go Back</span>
     </div>
    <div className='table-overall-user'>   
             <div className='user-container'> 
             <h1>Users</h1>
             <p className='table-solution-user'>Adding values to customers, one solution<br/> at a time.</p>
             </div>
      <table className='user-table'>
        <thead>
          <tr className='tr'>
            <div className='parent-user'>
            <th className='child-user'>Name</th>
            <th className='child-user'>Number</th>
            <th className='child-user'>Email</th>
        

            </div>
            
          </tr>
        </thead>
        <tbody className='user-body'>
          {data.users.map(data=>(
            <tr key={data.Number}>
              <div className='user-td'>
              <td className='child-user-td'>{data.Name}</td>
              <td className='child-user-td'>{data.Number}</td>
              <td className='child-user-td'>{data.Email}</td>
              </div>
              
            </tr>
          ))}
        </tbody>
      </table>
      </div>
   </div>

   
  )
}

export default UserPopulatedTable




             


