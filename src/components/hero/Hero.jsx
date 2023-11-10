import React, { useEffect, useState } from 'react';
import '../../output.css';
import './hero.css';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Hero = () => {
    const [startIcon, setStartIcon] = useState(false);
    const [cirAnime, setCirAnime] = useState(false);
    const [heroTitle, setHeroTitle] = useState(false);
    const [heroSubTitle, setHeroSubTitle] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setCirAnime(true);
        }, 0);

        setTimeout(() => {
            setHeroTitle(true);
        }, 500);

        setTimeout(() => {
            setHeroSubTitle(true);
        }, 1400)
    }, []);

    const handleMouseEnter = () => {
        setStartIcon(true);
    };

    const handleMouseLeave = () => {
        setStartIcon(false);
    };

    return (
        <div className='hero bg-hero-bg flex flex-col justify-center items-center'>
            <div className={`${cirAnime ? 'play-cir-on' : 'play-cir-off'}`}>
                <div className={`out-cir rounded-full mt-40 flex justify-center items-center`}>
                    <div className={`in-cir rounded-full flex justify-center items-center hover:cursor-pointer ${startIcon ? 'bg-start-btn-bg-on' : 'bg-start-btn-bg-off'}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <FontAwesomeIcon icon={faPlay} className='play-icon h-6' />
                    </div>
                </div>
            </div>
            <div className='pinaaple absolute lg:left-[-10vw] md:left-[-10vw] hidden xl:block'></div>
            <div className='berry absolute right-0 top-40 hidden xl:block z-0 w-80 h-60'></div>
            <div className={`hero-title ${heroTitle ? 'hero-title-anime-on' : 'hero-title-anime-off'} mt-8 text-center lg:text-7xl sm:text-3xl xs:text-xl lg:text-gray-800 font-bold z-10 fadeInUp-title`}>MOST WORLD LARGE ORGANIC FARM</div>
            <div className={`${heroSubTitle ? 'hero-subTitle-anime-on' : 'hero-subTitle-anime-off'} text-center lg:text-3xl lg:text-gray-500 lg:mt-8 sm:text-xl text-gray-700 mb-[200px] px-10 z-10 fadeInUp-subTitle`}>Extra 50% off For All Winter Products</div>
        </div>
    );
};

export default Hero;
