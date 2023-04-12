
import React from 'react';
import './JobFeatrues.css'
import { Link } from 'react-router-dom';
import {GoLocation} from 'react-icons/Go';
import {BiDollarCircle} from 'react-icons/Bi';


const JobFeatrues = ({singleJob}) => {
    // console.log(singleJob)
    const {id,img,post,company,jobType,location,salary} = singleJob
  
    return (
        <div className='single-job-features'>
            <img src={img} alt=""/>
           <h2 className='features-title'>{post}</h2>
           <p className='company'>{company}</p>
           <Link><button className='btn-job-type'>{jobType}</button></Link>
           <Link><button className='btn-job-type'>{jobType}</button></Link>

           <div className='features-location-salary'>
            <p>
            <small><GoLocation/></small>
            <span>{location}</span>
            </p>
            <p>
                <small><BiDollarCircle/></small>
                <span>{salary}</span>
            </p> 
        </div>

   <Link to={`/details/${id}`}><button>View Details</button></Link>

             
        </div>
    );
};

export default JobFeatrues;