import React from 'react';
import './subscribe.css';
import Fade from 'react-reveal/Fade';

const Subscribe = () => {
    return (
        <Fade bottom delay={500}>
            <div className='flex flex-col w-screen bg-hero-bg px-0'>
                <span className='mx-auto lg:pt-24 md:pt-24 xs:pt-16 text-center md:text-xl xs:text-[16px] text-gray-500'>Subscribe our newsletter to get more update.</span>
                <span className='mx-auto md:text-5xl xs:text-2xl font-bold mt-3 tracking-wider text-gray-800'>WENT TO GET STARTED</span>
                <div className="px-4 mx-auto sm:px-8 md:px-20 mt-10 lg:w-[50em] md:w-[45em] sm:w-[35em]">
                    <div className="flex pl-6 bg-white mx-auto rounded-full mb-20">
                        <div className='email-icon lg:w-[3em] lg:h-[4em]'></div>
                        <input type="email" placeholder='Enter Your Email:' className='focus:outline-none w-full px-0 py-2 md:py-4 md:pl-4 sm:pl-2 sm:text-xl xs:text-lg text-gray-600' />
                        <button className={`sm:text-lg text-white rounded-full sm:tracking-widest xs:tracking-wide font-bold sm:py-4 sm:px-8 xs:py-2 xs:px-3 bg-start-btn-bg-off hover:bg-start-btn-bg-on`}>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </Fade>
    );
}

export default Subscribe;
