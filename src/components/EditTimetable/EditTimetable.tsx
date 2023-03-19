 import React, { useState } from 'react';
import Vector from '../../assets/Vector.png';
import Image from '../../images/queenfisher-logo.png';
import { redirect, useLocation, useParams } from 'react-router-dom';
import calenderIcon from '../assets/calenderIcon.png';
import './editmeal.css'
import { Link } from 'react-router-dom';


const EditTimetable: React.FC = () => {
  const location = useLocation();

  const { get } = new URLSearchParams(location.search);
  const onChange = () => {
    redirect('/continue');
  };

  interface EditTimetable {
    mealType: string;
    startDate: string;
    endDate: string;
    country: string;
  }

  const mealTypeOptions = ['Breakfast', 'Lunch', 'Dinner'];

  const [formData, setFormData] = useState<EditTimetable>({
    mealType: 'select',
    startDate: new URLSearchParams(location.search).get('startDate') || '',
    endDate: new URLSearchParams(location.search).get('endDate') || '',
    country: new URLSearchParams(location.search).get('country') || '',
  });

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <>
      <section className="editmeal">
        <div className="edit-meal-container">
          <img src={Image} alt="" className="editmeal-image" />
        </div>

        <div className="editmeal-form">
          <h3 className="editmeal-header">Edit Timetable</h3>
          <p className="editmeal-header-p">Fill the list of items below</p>

          <form>
            <div>
              <div className="details">
                <h5>Meal Type </h5>
                <select
                  name="mealType"
                  value={formData.mealType || 'test'}
                  onChange={handleInputChange}
                  required
                >
                  {mealTypeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="details">
              <h5>Start Date</h5>
              <input
                type="text"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                required
              ></input>
            </div>

            <div className="details">
              <h5>End Date</h5>
              <input
                type="text"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                required
              ></input>
            </div>

            <div className="details">
              <h5>Country</h5>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
              ></input>
            </div>
          </form>
          <div>
            <button onClick={onChange} className="submiteditmeal">
              <Link to="/Continue">Update</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditTimetable;
