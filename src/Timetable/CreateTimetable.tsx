import './createTimetable.css';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const CreateTimetable = () => {
  return (
    <>
        <section className='createtimetable'>
            <div className='createtimetable-container'>
                <div className='createtimetable-container-details'>
                <div className='create-timetable-title-elements'>
                    <div className='create-timetable-title-elements-left'>
                    <h3 className='create-timetable-title'> Create Timetable</h3>
                    <p className='create-timetable-subtitle'>Fill in the items below</p>
                    </div>
                    <div className='create-timetable-title-elements-right'>
                        <CloseIcon/>
                    </div>
                    </div>

                    

                    <form className='create-timetable-form'>
                        <h5 className='meal-type-label'>Meal Type</h5>
                        <select placeholder='Select' className='meal-type-box'>
                            <option value='option 1' >Breakfast</option>
                            <option value='option 2'>Lunch</option>
                            <option value='option 3'>Dinner</option>
                        </select>

                        <h5 className='meal-type-label'>Start Date</h5>
                        <input type="date" className='meal-type-box'></input>
                        <h5 className='meal-type-label'>End Date</h5>
                        <input type="date" className='meal-type-box' ></input>
                        <h5 className='meal-type-label'>Country</h5>
                        <input className='meal-type-box' placeholder='Enter Country'></input>
                        <div>
                        <button className='create-timetable-button'>
                           <Link to='/Continue'>Continue</Link> 
                            </button>
                            </div>
                    </form>
                
                
                   
                
                </div>


               

            </div>

        </section>
    
    </>
  )
}

export default CreateTimetable