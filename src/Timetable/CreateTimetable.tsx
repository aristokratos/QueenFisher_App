import './createTimetable.css';
import CloseIcon from '@mui/icons-material/Close';
import {  useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Select from 'react-select'
import {format, parseISO} from 'date-fns'





const CreateTimetable = () => {

    const navigate = useNavigate();

    const [selected, setSelected] = useState<any>({});
    const [selectedStartDate, setSelectedStartDate] = useState<Date | any>(new Date());
     const [selectedEndDate, setSelectedEndDate] = useState<Date | any>(new Date()); 
    const [country, setCountry] = useState<string>('');

    const options = 
    [
        
        { value: "Breakfast", label: "Breakfast" },

        { value: "Lunch", label: "Lunch" },

        { value: "Dinner", label: "Dinner" },
    
    ]

    const handleChange = (selectedOption: any) => {
        setSelected(selectedOption)
    
    }

    /* console.log( selected.value);
    console.log( country);
    console.log( format(selectedStartDate, "yyyy-MM-dd"));
    console.log( format(selectedEndDate, "yyyy-MM-dd")); */

   //let meal = selected.value as unknown as string
    
    

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        const data =  {
           mealType: selected.value,
            startDate: format(selectedStartDate, "yyyy-MM-dd"),
            endDate: format(selectedEndDate, "yyyy-MM-dd"),
            country,
          }
        let token = localStorage.getItem("token")
        const response = await axios.post('https://queen-fisher-api.onrender.com/CreateTimetable', data,{
             headers:{"Authorization": `Bearer ${token}`} 
        });
        
      if (response.status === 200) {
        toast.success('Timetable created successfully');
        // Redirect to the next page
        navigate(`/Continue/${response.data.data}`);

      }
    } catch (error) {
      toast.error('An error occurred while creating the timetable');
    }
  };

  //onSubmit={handleSubmit}
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

                    

                    <form className='create-timetable-form' onSubmit={handleSubmit}>
                        <h5 className='meal-type-label'>Meal Type</h5>
                          
                        <Select

                            options = {options}
                            onChange={handleChange}
                            autoFocus= {true}
                          className= "meal-type-box"
                        
                        />

                        <h5 className='meal-type-label'>Start Date</h5>
                        <DatePicker
                            selected={selectedStartDate}
                            onChange={date => setSelectedStartDate(date)}
                            dateFormat="yyyy-MM-dd"
                            placeholderText="Select a date"
                            className='meal-type-box'

                            
                            /* name="startDate"
                            minDate={new Date()}
                            maxDate={new Date('2030-12-31')}
                            dateFormat="yyyy/MM/dd"
                            placeholderText="Select a date"
                            */

                        
                            /> 

                        <h5 className='meal-type-label'>End Date</h5>
                         <DatePicker
                            selected={selectedEndDate}
                            onChange={(date) => setSelectedEndDate(date)}
                            dateFormat="yyyy-MM-dd"
                            className='meal-type-box'
                            /> 
                        <h5 className='meal-type-label'>Country</h5>
                        <input
                         className='meal-type-box'
                         placeholder='Enter Country'
                         value={country}
                         onChange={(e) => setCountry(e.target.value)} 
                          ></input>
                        <div>
                       {/* <button type="submit" className='create-timetable-button'>
                           Continue
                            </button>  */}
                             <button type="submit" style={{
                               background:"#772917",
                               color:"white",
                               width:"590px",
                               height:"46px",
                               borderRadius:"6px",
                               marginLeft: "25px"

                               }}> Continue </button>
                             
                            </div>
                    </form>
                
                
                   
                
                </div>


               

            </div>

        </section>
    
    </>
  )
}

export default CreateTimetable