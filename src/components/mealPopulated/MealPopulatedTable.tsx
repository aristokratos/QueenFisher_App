import { Column, useTable } from 'react-table';
import React, { useMemo, useState, useEffect } from 'react';
import { IMeal } from './mealType';
import { MealService } from './MealService';
import './MealPopulatedTable.css';
import arrow from '../../assets/arrow.png';
import { Link } from 'react-router-dom';

interface IState {
  users: IMeal[];
}

const UserPopulatedTable = () => {
  const [data, setData] = useState<IState>({
    users: [],
  });

  const [timetableForm, setTimetableForm] = useState({
    day: '',
    time: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const meals = await MealService.getMealsByTimetable(
        timetableForm.day,
        timetableForm.time
      );
      setData({ users: meals });
    };
    fetchData();
  }, [timetableForm]);

  console.log(data);

  const handleTimetableChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTimetableForm({
      ...timetableForm,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="meal-table-container">
      <div className="meal-arrow-span">
        <Link to="/resetpassword">
          <img src={arrow} alt="backarrow" className="meal-table-arrow" />
        </Link>

        <span className="meal-span-table">Go Back</span>
      </div>
      <div className="meal-table-overall">
        <div className="user-container">
          <h1>Meal</h1>
          <p className="meal-table-solution">
            Adding values to customers, one solution
            <br /> at a time.
          </p>
        </div>
        <form>
          <label>
            Day:
            <input
              type="text"
              name="day"
              value={timetableForm.day}
              onChange={handleTimetableChange}
            />
          </label>
          <label>
            Time:
            <input
              type="text"
              name="time"
              value={timetableForm.time}
              onChange={handleTimetableChange}
            />
          </label>
        </form>
        <table className="meal-table">
          <thead>
            <tr>
              <div className="meal-th">
                <th className="name-th">Name</th>
                <th className="name-th">Number</th>
                <th className="name-th">Email</th>
              </div>
            </tr>
          </thead>
          <tbody className="body-meal">
            {data.users.map((data) => (
              <tr key={data.Country}>
                <div className="meal-td">
                  <td className="meal-td-child">{data.MealName}</td>
                  <td className="meal-td-child">{data.MealType}</td>
                  <td className="meal-td-child">{data.Country}</td>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserPopulatedTable;
