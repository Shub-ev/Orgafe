import React, { useState } from 'react';
import '../../output.css';
import './product.css';
import StarRating from './StartRating';
import Fade from 'react-reveal/Fade';

const Products = () => {
    const rating = 5;
    const [moreProducts, setMoreProducts] = useState(false);

    const loadProducts = () => {
        setMoreProducts(!moreProducts);
    }
    return(
        <div className='products w-screen pt-24'>
            <div className='flex mx-auto flex-col lg:w-[75vw] md:w-[86vw] sm:w-[80vw]'>
                <div className="title flex flex-col lg:w-[40vw] mx-auto">
                    <Fade bottom><div className='tomato w-16 h-16 mx-auto'></div></Fade>
                    <Fade bottom><span className='text-center lg:text-5xl sm:text-2xl text-gray-700 font-bold mt-3'>OUR PRODUCTS</span></Fade>
                    <Fade bottom><span className='text-center mt-2 text-gray-700 px-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmotempor incididunt labore dolore magna aliqua minim veniam</span></Fade>
                </div>

                <div className="products grid lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-10 mt-14">
                    <Fade bottom delay={0}>
                        <div className="pro1 w-full">
                            <div className="orange-img product-img mx-auto"></div>
                            <span className='block font-bold text-xl text-center'>NATURE WATERMELON</span>
                            <div className='starRating w-fit mx-auto'>
                                <StarRating rating={rating} />
                            </div>
                            <span className='text-gray-700 block font-mono mx-auto text-center mt-2'>$42.00</span>
                        </div>
                    </Fade>

                    <Fade bottom delay={200}>
                        <div className="pro1 w-full">
                            <div className="berry-img product-img mx-auto"></div>
                            <span className='block font-bold text-xl text-center'>NATURE WATERMELON</span>
                            <div className='starRating w-fit mx-auto'>
                                <StarRating rating={rating} />
                            </div>
                            <span className='text-gray-700 block font-mono mx-auto text-center mt-2'>$42.00</span>
                        </div>
                    </Fade>

                    <Fade bottom delay={600}>
                        <div className="pro1 w-full">
                            <div className="melon-img product-img mx-auto"></div>
                            <span className='block font-bold text-xl text-center'>NATURE WATERMELON</span>
                            <div className='starRating w-fit mx-auto'>
                                <StarRating rating={rating} />
                            </div>
                            <span className='text-gray-700 block font-mono mx-auto text-center mt-2'>$42.00</span>
                        </div>
                    </Fade>

                    <Fade bottom delay={800}>
                        <div className="pro1 w-full">
                            <div className="strberry-img product-img mx-auto"></div>
                            <span className='block font-bold text-xl text-center'>NATURE WATERMELON</span>
                            <div className='starRating w-fit mx-auto'>
                                <StarRating rating={rating} />
                            </div>
                            <span className='text-gray-700 block font-mono mx-auto text-center mt-2'>$42.00</span>
                        </div>
                    </Fade>

                    <Fade bottom delay={800}>
                        <div className= {`pro1 w-full ${moreProducts ? 'block' : 'hidden'}`}>
                            <div className="lemon-img product-img mx-auto"></div>
                            <span className='block font-bold text-xl text-center'>NATURE WATERMELON</span>
                            <div className='starRating w-fit mx-auto'>
                                <StarRating rating={rating} />
                            </div>
                            <span className='text-gray-700 block font-mono mx-auto text-center mt-2'>$42.00</span>
                        </div>
                    </Fade>

                    <Fade bottom delay={800}>
                        <div className= {`pro1 w-full ${moreProducts ? 'block' : 'hidden'}`}>
                            <div className="mango-img product-img mx-auto"></div>
                            <span className='block font-bold text-xl text-center'>NATURE WATERMELON</span>
                            <div className='starRating w-fit mx-auto'>
                                <StarRating rating={rating} />
                            </div>
                            <span className='text-gray-700 block font-mono mx-auto text-center mt-2'>$42.00</span>
                        </div>
                    </Fade>

                    <Fade bottom delay={800}>
                        <div className= {`pro1 w-full ${moreProducts ? 'block' : 'hidden'}`}>
                            <div className="papaya-img product-img mx-auto"></div>
                            <span className='block font-bold text-xl text-center'>NATURE WATERMELON</span>
                            <div className='starRating w-fit mx-auto'>
                                <StarRating rating={rating} />
                            </div>
                            <span className='text-gray-700 block font-mono mx-auto text-center mt-2'>$42.00</span>
                        </div>
                    </Fade>

                    <Fade bottom delay={800}>
                        <div className= {`pro1 w-full ${moreProducts ? 'block' : 'hidden'}`}>
                            <div className="apple-img product-img mx-auto"></div>
                            <span className='block font-bold text-xl text-center'>NATURE WATERMELON</span>
                            <div className='starRating w-fit mx-auto'>
                                <StarRating rating={rating} />
                            </div>
                            <span className='text-gray-700 block font-mono mx-auto text-center mt-2'>$42.00</span>
                        </div>
                    </Fade>
                </div>
                <Fade bottom><button className='basket-button rounded-full p-4 font-bold text-gray-100 tracking-widest lg:w-44 sm:w-44 lg:mt-20 sm:mt-20 xs:mt-10 hover:cursor-pointer hover:bg-orange-500 mx-auto' onClick={loadProducts}>{moreProducts && <span>VIEW LESS</span>}{!moreProducts && <span>VIEW MORE</span>}</button></Fade>
            </div>
        </div>
    )
}

export default Products;