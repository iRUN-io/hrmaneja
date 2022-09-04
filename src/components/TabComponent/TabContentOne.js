import React from 'react'
import Image from "../elements/Image";

const TabContentOne = () => {
  return (
    <div>
        <div className='project-m row '>
            <div className='col-lg-6 col-md-6 col-sm-12'>
                <div className="section-title">
                <Image
                    src={require("../../assets/images/home/group.png")}
                    alt="Open"
                    className="img-fluid"
                />
                </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 services-text'>
                <p className='text-large '>Let's be great together.</p>
                <p className='text-heading'>What can HR Maneja do for you</p>
                <p className='text-tiny'>We all need to start well must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound. We all need to start well must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I </p>
                <div className='hero-links'>
                    <a href="" className="btn btn-lg btn-hero-2 btn-outline btn-services">
                    Get Started For Free
                    </a>
                    
                </div>
            </div>

        </div>
    </div>
  )
}

export default TabContentOne