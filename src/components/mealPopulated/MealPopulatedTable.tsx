import React, { useState, useEffect } from 'react';
import type { IMeal } from './mealType';
import { MealService } from './MealService';
import './MealPopulatedTable.css';
import arrow from '../../assets/arrow.png';
import { Link } from 'react-router-dom';

interface IState {
  meals: IMeal[];
}

const MealPopulatedTable = () => {
  const [data, setData] = useState<IState>({
    meals: [],
  });

  const [timetableForm, setTimetableForm] = useState({
    day: '',
    time: '',
  });

  useEffect(() => {
    MealService.getMealsByTimetable(timetableForm)
      .then((meals) => {
        setData({ meals });
      })
      .catch((error) => {
        console.log(error);
      });
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
                <th className="name-th">Type</th>
                <th className="name-th">Country</th>
              </div>
            </tr>
          </thead>
          <tbody className="body-meal">
            {data.meals.map((meal) => (
              <tr key={meal.id}>
                <div className="meal-td">
                  <td className="meal-td-child">{meal.name}</td>
                  <td className="meal-td-child">{meal.type}</td>
                  <td className="meal-td-child">{meal.country}</td>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MealPopulatedTable;
