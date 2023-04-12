import React from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import SingleJob from '../SingleJob/SingleJob';
import JobFeatrues from '../JobFeatures/JobFeatrues';
import Banner from '../Banner/Banner';

const Home = () => {
    const allJobs = useLoaderData()
    // console.log(allJobs)
    return (
        <div>
            <Banner></Banner>
          
            <div className='single-job-container '>
            {allJobs.map(singleJob =><SingleJob
             key={singleJob.id}
             singleJob={singleJob}
            ></SingleJob>)}
            </div>


     <div className='features-section'>
        <h3 className='features-section-title'>Featured Job</h3>
            <p className='features-desc'>A Featured Job has all the elements of a Standard Job posting . In addition, a Featured Job posting will appear on the home page visible for all visitors to see. It will be kept at the top of the list above all Standard Job postings.</p>
            <div className='job-features-container'>
            {
             allJobs.map(singleJob =><JobFeatrues
                    key={singleJob.id}
                    singleJob={singleJob}
                ></JobFeatrues>)
             }    
            </div>

            
            </div>


         
        </div>
    );
};

export default Home;