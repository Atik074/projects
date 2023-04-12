import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import './JobDetails.css'
import { BiDollarCircle} from "react-icons/Bi";
import { AiFillCheckSquare} from "react-icons/Ai";


const JobDetails = () => {
    
    const {detailsId} = useParams();
    const details = useLoaderData()
    // console.log(details)
    const [data, setData] = useState({})
   
    useEffect(()=>{
       const findJobData = details.find(jobData => jobData.id == detailsId)
        setData(findJobData )
       
    },[])
    // console.log(data)

    return (
        <div className='job-details-container' >
            <h2>Job Details</h2>

     <div className='job-details'>
           <div className='job-details-info'>
            <p>Job Description : <span>{data.description} </span></p>
            <p>Job Requirments : <span>{data.requirements} </span></p>
            <p>Experience : <span>{data.experience}</span></p>
           </div>

           <div className='job-details-card'>
            <h3>Job Details</h3>
            <hr></hr>
            <p><BiDollarCircle/> Salary : <span>{data.salary}</span></p>
            <p><AiFillCheckSquare/>Job title : <span>{data.post}</span></p>
          
              <h3>Contact Information</h3>
              <hr></hr>
              <p>Phone : <span>{data.phone}</span> </p>
              <p>Email : <span>{data.email}</span> </p>
              <p>Address : <span>{data.address}</span> </p>
           </div>

        

        </div>

      <Link><button className='apply-button'>Apply Now</button></Link>
        </div>
      

    );
};

export default JobDetails;