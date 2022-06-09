import React from 'react';
import Typical from 'react-typical'; 
import Resume from '../../../assets/Resume.pdf';
import './Profile.css';

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                    <a href="https://web.facebook.com/Brownfish.shuv0/">
                        <i className='fa fa-facebook-square'></i>
                    </a>
                    <a href="https://github.com/Mehadi-Hasan98">
                        <i className='fa fa-github'></i>
                    </a>
                    <a href="https://www.linkedin.com/in/mehadihasan1998/">
                        <i className='fa fa-linkedin'></i>
                    </a>
                    </div>
                    
                </div>
                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        Hello, I'M <span className='highlighted-text'>Mehadi</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            {" "}
                            <Typical
                            
                            steps={[
                               "Enthusiastic Dev",
                               1000, 
                               "FullStack Developer",
                               1000, 
                               "MERN Stack Developer",
                               1000, 
                               "React Developer",
                               1000,  
                            ]}
                            loop={Infinity}
                            wrapper="p"
                            />
                        </h1>
                        <span className='profile-role-tagline'>
                            Knack of building applications with front and back end operations.
                        </span>
                    </span>
                </div>
                <div className='profile-options'>
                    <button className='btn primary-btn'>
                        {""}
                        Hire Me{" "}
                    </button>
                    <a href={Resume} download>
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                </div>
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'></div>
            </div>
        </div>
    </div>
  )
}

