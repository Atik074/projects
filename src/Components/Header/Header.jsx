import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
    <div>
    <nav className='nav-container flex'>
            <h2>DreamHub</h2>
            <div className='nav-item flex'>
               <Link to='/'>Home</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/appliedJobs'>Applied Jobs</Link>
                <Link to='/Blog'>Blog</Link>
            </div>
            <button>Star Applying</button>
        </nav>   

        </div>
    
    );
};

export default Header;