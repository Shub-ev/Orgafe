import React from "react";
import './bestfeatures.css';
import Fade from 'react-reveal/Fade';

const BestFeatures = () => {
    return(
        <div className="Features bg-features-bg lg:mb-20 pt-20">
            <div className="mx-auto pt-28 xs:flex xs:flex-col lg:w-[75vw] xs:w-[70vw]">
                <div className="title xs:mx-auto lg:mx-0 flex flex-col">
                    <Fade left delay={100}><span className="lg:text-2xl xs:text-xl text-orange-500 font-bold xs:text-center lg:text-left">Best Features</span></Fade>
                    <Fade left delay={400}><span className="block lg:text-[3em] sm:text-[1.6em] xs:text-[1.3em] xs:text-center lg:leading-[50px] sm:leading-8 font-bold text-gray-800 mt-4 lg:text-left sm:tracking-wide">WE ARE TRUSTED BY MORE THAN 5K CLIENTS</span></Fade>
                </div>

                <div className="features mx-auto mt-20">
                <div className="features lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 gap-8 pb-24">
                    <Fade left delay={800}>
                        <div className="foods w-auto h-80">
                            <div className="img flex">
                                <div className="w-40 xs:w-full">
                                    <div className="img1-food w-[6.5em] h-[6.5em] mt-5 xs:mx-auto"></div>
                                </div>
                                <div className="w-40 lg:block xs:hidden">
                                    <div className="img2-arrowDown w-28 h-40"></div>
                                </div>
                            </div>
                            <div className="details1 lg:text-left xs:text-center">
                                <span className="block text-2xl font-bold text-gray-800 mb-4 xs:text-center xs:mt-6 lg:text-left">NATURAL FOODS</span>
                                <span className="text-gray-500">Lorem ipsum dolor conse ctetur adipisicing elit sed do eiusmo tem incididunt labore apericons.</span>
                            </div>
                        </div>
                    </Fade>

                    <Fade left delay={600}>
                        <div className="foods w-auto h-80">
                            <div className="img flex">
                                <div className="w-40 xs:w-full">
                                    <div className="img1-FORMALIN w-[6.5em] h-[6.5em] mt-5 xs:mx-auto"></div>
                                </div>
                                <div className="w-40 lg:block xs:hidden">
                                    <div className="img2-arrowUp w-28 h-40"></div>
                                </div>
                            </div>
                            <div className="details1 lg:text-left xs:text-center">
                                <span className="block text-2xl font-bold text-gray-800 mb-4 xs:text-center xs:mt-6 lg:text-left">SAFE FORMALIN</span>
                                <span className="text-gray-500">Lorem ipsum dolor conse ctetur adipisicing elit sed do eiusmo tem incididunt labore apericons.</span>
                            </div>
                        </div>
                    </Fade>

                    <Fade left delay={400}>
                        <div className="foods w-auto h-80">
                            <div className="img flex">
                                <div className="w-40 xs:w-full">
                                    <div className="img1-testy w-[6.5em] h-[6.5em] mt-5 xs:mx-auto"></div>
                                </div>
                                <div className="w-40 lg:block xs:hidden">
                                    <div className="img2-arrowDown w-28 h-40"></div>
                                </div>
                            </div>
                            <div className="details1 lg:text-left xs:text-center">
                                <span className="block text-2xl font-bold text-gray-800 mb-4 xs:text-center xs:mt-6 lg:text-left">100% TESTY FOOD</span>
                                <span className="text-gray-500">Lorem ipsum dolor conse ctetur adipisicing elit sed do eiusmo tem incididunt labore apericons.</span>
                            </div>
                        </div>
                    </Fade>

                    <Fade left delay={0}>
                        <div className="foods w-auto h-80">
                            <div className="img flex">
                                <div className="w-40 xs:w-full">
                                    <div className="img1-team w-[6.5em] h-[6.5em] mt-5 xs:mx-auto"></div>
                                </div>
                                <div className="w-40 lg:block xs:hidden">
                                    <div className="w-28 h-40"></div>
                                </div>
                            </div>
                            <div className="details1 lg:text-left xs:text-center">
                                <span className="block text-2xl font-bold text-gray-800 mb-4 xs:text-center xs:mt-6 lg:text-left">EXCLUSIVE TEAM</span>
                                <span className="text-gray-500">Lorem ipsum dolor conse ctetur adipisicing elit sed do eiusmo tem incididunt labore apericons.</span>
                            </div>
                        </div>
                    </Fade>
                </div>
                </div>
            </div>
        </div>
    )
}

export default BestFeatures;