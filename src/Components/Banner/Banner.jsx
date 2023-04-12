import React from 'react';
import logo from '../../assets/image/P3OLGJ1 copy 1.png'
import './Banner.css'

const Banner = () => {
    return (
        <div>
              <div className='flex'>
            <div>
                <h1 className='header-title'>One step <br></br> Closer To Your <br></br> <span>Dream Job</span></h1>
                <p className='header-description'>Choosing a career can help you select the right education and skills you need to obtain to support that career. Making careful and well-thought-out decisions regarding your career can increase your chance of success.</p>
                <button>Get Started</button>
            </div>
            <div>
                <img src={logo} alt='/'/>
            </div>
        </div>

        </div>
    );
};

export default Banner;