import React from 'react';
import './SingleJob.css'


const SingleJob = ({singleJob}) => {
  
    const {iconPng, title,vacancy} = singleJob
    return (
    <div>
         
  <div className='single-job'>
             <img src={iconPng} alt=''/>
            <h2>{title}</h2>
            <p>{vacancy}</p>
        </div>


    </div>
           
       
    );
};

export default SingleJob;