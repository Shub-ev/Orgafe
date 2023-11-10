import React from 'react';
import './fruitbasket.css';
import '../../output.css';
import Fade from 'react-reveal/Fade';

const FruitBasket = () => {
    return (
        <div className='flex flex-row sm:flex-col lg:justify-center overflow-hidden lg:px-14 xs:px-8 lg:pb-28 sm:pb-20'>
            <div className='lg:flex lg:flex-row sm:flex-col lg:mt-28 sm:mt-28 lg:mx-auto lg:w-fit'>
                <div className='basket-img lg:w-[180em] lg:h-[30em] xs:h-[25em] lg:mr-32 max-w-[520px]'></div>
                <div className='flex flex-col lg:ml-[-50px] mx-auto lg:max-w-2xl sm:px-3 lg:pr-10 xs:mt-6'>
                    <Fade bottom distance='60px'><div className='cherry block sm:w-[51px] sm:h-[57px] float-left'></div></Fade>
                    <Fade bottom><span className='block lg:text-5xl sm:text-3xl font-bold lg:text-gray-900 sm:text-gray-600'>THE BEST TRUSTED FARMS FOR YOU</span></Fade>
                    <Fade bottom delay={200}><span className='text-gray-500 lg:text-xl lg:pt-14 sm:pt-6'>Discover a world of freshness and quality at our trusted farms. We pride ourselves on providing the finest selection of organic produce, sourced directly from local farmers who are dedicated to sustainable and ethical farming practices. With a passion for delivering farm-fresh goodness to your table, we ensure that every fruit, vegetable, and product we offer is of the highest quality.</span></Fade>
                    <Fade bottom delay={400}><button className='basket-button rounded-full p-4 font-bold text-gray-100 tracking-widest lg:w-52 sm:w-48 lg:mt-20 xs:mt-10 hover:cursor-pointer hover:bg-orange-500'>READ MORE</button></Fade>
                </div>
                <div className='pear absolute lg:block right-10 md:hidden xs:hidden w-full lg:w-[270px] h-[265px] lg:mt-72'></div>
            </div>
        </div>
    )
}

export default FruitBasket;
