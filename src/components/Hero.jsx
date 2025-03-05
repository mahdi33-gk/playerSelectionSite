import React from 'react';

const Hero = () => {
    return (
        <div>
            
            <img className='w-full relative object-cover rounded-xl' src="/images/bg-shadow.png" alt="" />
            <img className='absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src="/images/banner-main.png" alt="" />
        </div>
    );
};

export default Hero;