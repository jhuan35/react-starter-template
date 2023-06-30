import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import {useDocTitle} from '../components/CustomHook';

import img from '../images/jebin_boat_cruise_cropped.jpg'; 
import img2 from '../images/jimmy_cropped_1.jpg';
import img3 from '../images/obama_uncropped.jpg';
import img4 from '../images/trump_uncropped.jpg';

const OurMission = () => {
    useDocTitle('Smart Mart - Providing high-quality vending machines')

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24 bg-gray-200">
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">

                    <div id="services" className="bg-gray-100 py-12" >
                        <section data-aos="zoom-in-down">
                            <div className="my-4 py-4">
                                <h2 className="my-2 text-center text-3xl text-cyan-600 uppercase font-bold">Our Mission</h2>

                                <div className='flex justify-center'>
                                    <div className='w-24 border-b-4 border-cyan-600'></div>
                                </div>
                                <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-cyan-600">We provide health products and other supplies in locations where anyone can access them.</h2>
                            </div>

                            <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

                                    <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                        <div className="m-2 text-justify text-sm">
                                            <img alt="card img" className="rounded group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                            <h2 className="font-semibold my-4 text-2xl text-center">Jebin John</h2>
                                            <p className="text-md font-medium">
                                                Jebin John earned his bachelor's degree in Statistics & Computer Science from the University of Illinois Urbana-Champaign. He dreams of making a positive impact on many communities, starting with the campus of his alma mater.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                        <div className="m-2 text-justify text-sm">
                                            <img alt="card img" className="rounded group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                                            <h2 className="font-semibold my-4 text-2xl text-center">Jimmy Huang</h2>
                                            <p className="text-md font-medium">
                                                Jimmy Huang is pursuing a double major in Mathematics & Computer Science and Statistics at the University of Illinois Urbana-Champaign. He enjoys using his coding skills to spread awareness about physical and mental health.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                        <div className="m-2 text-justify text-sm">
                                            <img alt="card img" className="rounded group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                            <h2 className="font-semibold my-4 text-2xl text-center ">Jebin's friend #1</h2>
                                            <p className="text-md font-medium">
                                                Jebin's friend #1 is a graduate from college. He is passionate about helping people get the supplies they need.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                        <div className="m-2 text-justify text-sm">
                                            <img alt="card img" className="rounded group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img4} />
                                            <h2 className="font-semibold my-4 text-2xl text-center ">Jebin's friend #2</h2>
                                            <p className="text-md font-medium">
                                            Jebin's friend #2 is a graduate from college. He has an entrepreneurial mindset and loves brainstorming ideas that can be beneficial to local communities.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
                                <div className="flex flex-col-reverse lg:flex-row py-8 justify-center lg:text-left" data-aos="zoom-out">
                                    <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center items-center">
                                        <div className='text-cyan-600 mb-4'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current'><path d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"></path><path d="M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538s4.538-2.036 4.538-4.538S14.502 7.462 12 7.462zm0 7.076c-1.399 0-2.538-1.139-2.538-2.538S10.601 9.462 12 9.462s2.538 1.139 2.538 2.538-1.139 2.538-2.538 2.538z"></path></svg>
                                        </div>
                                        <h3 className="text-3xl lg:text-center text-cyan-600 font-bold">Health products should be convenient and affordable.</h3>
                                        <div>
                                            <p className='my-3 text-xl text-gray-600 font-semibold'>
                                                Smart Mart aims to install Vengo vending machines in areas and communities that would benefit from convenient and afforable products, especially those related to health. Vengo machines are especially convenient due to the fact that they can placed in areas where the nearest store is somewhat far away, and also because of the speed at which transactions can be made on them.
                                            </p>
                                            <p className='my-3 text-xl text-gray-600 font-semibold'>
                                                In addition, while normal vending machines may have some notoriety for having above-market prices, the products in our Vengo vending machines are actually cheaper than those that can be bought in-store. For example, on the Urbana-Champaign campus, a single Plan B can be purchased for about $50 from Walgreens. However, our machines offer this product for less than $40.
                                            </p>
                                        </div>
                                    </div>
                                    {/* <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                                        <div className='text-cyan-600 mb-4'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current'><path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path></svg>
                                        </div>
                                        <h3 className="text-3xl  text-cyan-600 font-bold">We <span className='font-black'>Collaborate</span></h3>
                                        <div>
                                            <p className='my-3 text-xl text-gray-600 font-semibold'>We can collaborate with your existing tech team to scale existing software applications or design customized software applications that suits your everyday need and simplifies various processes.</p>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </section>
                    </div>
                       
                </div>
            </div>
            <Footer />
        </>
    )
}

export default OurMission;