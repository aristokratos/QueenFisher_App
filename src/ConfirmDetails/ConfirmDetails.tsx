import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classes from '../ConfirmDetails/ConfirmDetails.module.css';
import Vector from '../assets/Vector.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const ConfirmDetails: React.FC = () => {
    let { id } = useParams()

    

    const [details, setDetails] = useState<any>({})

    useEffect(() => {
        GetDetails()
    }, [])

    const GetDetails = async () => {

        let token = localStorage.getItem("token")
        const response = await axios.get(`https://queen-fisher-api.onrender.com/api/Timetable/${id}`, {
            headers: { "Authorization": `Bearer ${token}` }
        });

        const data = await response.data

       
 
       

        setDetails(data)

        /* if (response.status === 200) {
          toast.success('Timetable created successfully');
          // Redirect to the next page
          navigate('/Continue'); */


    };

    let startDate = new Date(details?.data?.startDate)
    let newDateStart = startDate.getFullYear()+'-' + (startDate.getMonth()+1) + '-'+startDate.getDate(); 


    let formatDateStart = new Date(newDateStart).toUTCString().split(" ").slice(1,4).join(" ")

    let startDateEnd = new Date(details?.data?.endDate)
    let newDateEnd = startDate.getFullYear()+'-' + (startDate.getMonth()+1) + '-'+startDate.getDate(); 


    let formatDateEnd = new Date(newDateStart).toUTCString().split(" ").slice(1,4).join(" ")
    
    

   /*  console.log("deets", details?.data?.mealType)
    console.log("startdate", newDateStart)
    console.log("format", formatDateStart) */
   /*  console.log("format", formatDateEnd) */
    
    return (
        <>
            <div className='confirm-container'>
                <div className={classes.body}>
                    <div className={classes.Confirm}>
                        <h3 className={classes.h2}>Confirmation Details</h3>
                        <p className={classes.para}>Make sure you confirm all items</p>
                    </div>

                    <div className={classes.Meal}>
                        {
                            /* details.map((elm) => ( */
                                <div>
                                    <p className='confirm-label'>Meal Type</p>
                                    <h3 className={classes.h3}>{details?.data?.mealType}</h3>

                                    <p className='confirm-label'>Start Date</p>
                                    <h3 className={classes.h3}>{formatDateStart}</h3>

                                    <p className='confirm-label'>Start Date</p>
                                    <h3 className={classes.h3}>{formatDateEnd }</h3>

                                    <p className='confirm-label'>Country</p>
                                    <h3 className={classes.h3}>{details?.data?.country} cuisine</h3>
                                </div>

                            /* )) */
                        }


                        <button className={classes.button}>
                            <Link to="/successful">
                                Generate
                            </Link>


                        </button>

                    </div>
                </div>
            </div>
        </>


    );
}
