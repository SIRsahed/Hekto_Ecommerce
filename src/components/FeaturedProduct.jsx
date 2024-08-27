"use client"
import React from 'react'
import Container from './Container'
import Image from 'next/image'
import Featured from '@/assets/featured.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { LuZoomIn } from "react-icons/lu";

const FeaturedProduct = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
    };
    return (
        <>
            <section className='sec_pad'>
                <Container>
                    <div className="text-center">
                        <h2 className='heading'>Featured Products</h2>
                    </div>
                    <Slider {...settings}>
                        <div className="!w-[93%] shadow-md group">
                            <div className="w-full bg-[#F6F7FB] h-[235px] py-8 flex justify-center relative overflow-hidden">
                                <Image src={Featured} alt='latest_product' className='group-hover:scale-125 duration-700 ease-in-out' />
                                <div className="flex absolute top-4 left-[-150px] group-hover:left-2 duration-700 ease-in-out text-[20px] text-[#1389FF]">
                                    <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                    <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                    <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                                </div>
                                <button className='absolute bottom-3 text-[16px] font-medium py-[10px] px-[15px] bg-[#08D15F] rounded-md text-white opacity-0 group-hover:opacity-100'>View Details</button>
                            </div>
                            <div className="text-center py-[15px] bg-white group-hover:bg-[#2F1AC4] group-hover:text-white">
                                <h3 className='b_title text-[#FB2E86] group-hover:text-white'>Cantilever chair</h3>
                                <div className="flex justify-center gap-x-2 pb-3">
                                    <div className="clr bg-[#05E6b7] "></div>
                                    <div className="clr bg-[#F701A8] "></div>
                                    <div className="clr bg-[#00009D] "></div>
                                </div>
                                <h4 className='text-[14px] font-normal tect-[#151875] pb-[12px]'>Code - Y523201</h4>
                                <h5 className='text-[14px] font-normal tect-[#151875]'>$42.00</h5>
                            </div>
                        </div>
                        <div className="!w-[93%] shadow-md group">
                            <div className="w-full bg-[#F6F7FB] h-[235px] py-8 flex justify-center relative overflow-hidden">
                                <Image src={Featured} alt='latest_product' className='group-hover:scale-125 duration-700 ease-in-out' />
                                <div className="flex absolute top-4 left-[-150px] group-hover:left-2 duration-700 ease-in-out text-[20px] text-[#1389FF]">
                                    <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                    <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                    <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                                </div>
                                <button className='absolute bottom-3 text-[16px] font-medium py-[10px] px-[15px] bg-[#08D15F] rounded-md text-white opacity-0 group-hover:opacity-100'>View Details</button>
                            </div>
                            <div className="text-center py-[15px] bg-white group-hover:bg-[#2F1AC4] group-hover:text-white">
                                <h3 className='b_title text-[#FB2E86] group-hover:text-white'>Cantilever chair</h3>
                                <div className="flex justify-center gap-x-2 pb-3">
                                    <div className="clr bg-[#05E6b7] "></div>
                                    <div className="clr bg-[#F701A8] "></div>
                                    <div className="clr bg-[#00009D] "></div>
                                </div>
                                <h4 className='text-[14px] font-normal tect-[#151875] pb-[12px]'>Code - Y523201</h4>
                                <h5 className='text-[14px] font-normal tect-[#151875]'>$42.00</h5>
                            </div>
                        </div>
                        <div className="!w-[93%] shadow-md group">
                            <div className="w-full bg-[#F6F7FB] h-[235px] py-8 flex justify-center relative overflow-hidden">
                                <Image src={Featured} alt='latest_product' className='group-hover:scale-125 duration-700 ease-in-out' />
                                <div className="flex absolute top-4 left-[-150px] group-hover:left-2 duration-700 ease-in-out text-[20px] text-[#1389FF]">
                                    <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                    <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                    <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                                </div>
                                <button className='absolute bottom-3 text-[16px] font-medium py-[10px] px-[15px] bg-[#08D15F] rounded-md text-white opacity-0 group-hover:opacity-100'>View Details</button>
                            </div>
                            <div className="text-center py-[15px] bg-white group-hover:bg-[#2F1AC4] group-hover:text-white">
                                <h3 className='b_title text-[#FB2E86] group-hover:text-white'>Cantilever chair</h3>
                                <div className="flex justify-center gap-x-2 pb-3">
                                    <div className="clr bg-[#05E6b7] "></div>
                                    <div className="clr bg-[#F701A8] "></div>
                                    <div className="clr bg-[#00009D] "></div>
                                </div>
                                <h4 className='text-[14px] font-normal tect-[#151875] pb-[12px]'>Code - Y523201</h4>
                                <h5 className='text-[14px] font-normal tect-[#151875]'>$42.00</h5>
                            </div>
                        </div>
                        <div className="!w-[93%] shadow-md group">
                            <div className="w-full bg-[#F6F7FB] h-[235px] py-8 flex justify-center relative overflow-hidden">
                                <Image src={Featured} alt='latest_product' className='group-hover:scale-125 duration-700 ease-in-out' />
                                <div className="flex absolute top-4 left-[-150px] group-hover:left-2 duration-700 ease-in-out text-[20px] text-[#1389FF]">
                                    <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                    <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                    <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                                </div>
                                <button className='absolute bottom-3 text-[16px] font-medium py-[10px] px-[15px] bg-[#08D15F] rounded-md text-white opacity-0 group-hover:opacity-100'>View Details</button>
                            </div>
                            <div className="text-center py-[15px] bg-white group-hover:bg-[#2F1AC4] group-hover:text-white">
                                <h3 className='b_title text-[#FB2E86] group-hover:text-white'>Cantilever chair</h3>
                                <div className="flex justify-center gap-x-2 pb-3">
                                    <div className="clr bg-[#05E6b7] "></div>
                                    <div className="clr bg-[#F701A8] "></div>
                                    <div className="clr bg-[#00009D] "></div>
                                </div>
                                <h4 className='text-[14px] font-normal tect-[#151875] pb-[12px]'>Code - Y523201</h4>
                                <h5 className='text-[14px] font-normal tect-[#151875]'>$42.00</h5>
                            </div>
                        </div>
                        <div className="!w-[93%] shadow-md group">
                            <div className="w-full bg-[#F6F7FB] h-[235px] py-8 flex justify-center relative overflow-hidden">
                                <Image src={Featured} alt='latest_product' className='group-hover:scale-125 duration-700 ease-in-out' />
                                <div className="flex absolute top-4 left-[-150px] group-hover:left-2 duration-700 ease-in-out text-[20px] text-[#1389FF]">
                                    <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                    <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                    <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                                </div>
                                <button className='absolute bottom-3 text-[16px] font-medium py-[10px] px-[15px] bg-[#08D15F] rounded-md text-white opacity-0 group-hover:opacity-100'>View Details</button>
                            </div>
                            <div className="text-center py-[15px] bg-white group-hover:bg-[#2F1AC4] group-hover:text-white">
                                <h3 className='b_title text-[#FB2E86] group-hover:text-white'>Cantilever chair</h3>
                                <div className="flex justify-center gap-x-2 pb-3">
                                    <div className="clr bg-[#05E6b7] "></div>
                                    <div className="clr bg-[#F701A8] "></div>
                                    <div className="clr bg-[#00009D] "></div>
                                </div>
                                <h4 className='text-[14px] font-normal tect-[#151875] pb-[12px]'>Code - Y523201</h4>
                                <h5 className='text-[14px] font-normal tect-[#151875]'>$42.00</h5>
                            </div>
                        </div>
                        <div className="!w-[93%] shadow-md group">
                            <div className="w-full bg-[#F6F7FB] h-[235px] py-8 flex justify-center relative overflow-hidden">
                                <Image src={Featured} alt='latest_product' className='group-hover:scale-125 duration-700 ease-in-out' />
                                <div className="flex absolute top-4 left-[-150px] group-hover:left-2 duration-700 ease-in-out text-[20px] text-[#1389FF]">
                                    <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                    <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                    <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                                </div>
                                <button className='absolute bottom-3 text-[16px] font-medium py-[10px] px-[15px] bg-[#08D15F] rounded-md text-white opacity-0 group-hover:opacity-100'>View Details</button>
                            </div>
                            <div className="text-center py-[15px] bg-white group-hover:bg-[#2F1AC4] group-hover:text-white">
                                <h3 className='b_title text-[#FB2E86] group-hover:text-white'>Cantilever chair</h3>
                                <div className="flex justify-center gap-x-2 pb-3">
                                    <div className="clr bg-[#05E6b7] "></div>
                                    <div className="clr bg-[#F701A8] "></div>
                                    <div className="clr bg-[#00009D] "></div>
                                </div>
                                <h4 className='text-[14px] font-normal tect-[#151875] pb-[12px]'>Code - Y523201</h4>
                                <h5 className='text-[14px] font-normal tect-[#151875]'>$42.00</h5>
                            </div>
                        </div>
                        <div className="!w-[93%] shadow-md group">
                            <div className="w-full bg-[#F6F7FB] h-[235px] py-8 flex justify-center relative overflow-hidden">
                                <Image src={Featured} alt='latest_product' className='group-hover:scale-125 duration-700 ease-in-out' />
                                <div className="flex absolute top-4 left-[-150px] group-hover:left-2 duration-700 ease-in-out text-[20px] text-[#1389FF]">
                                    <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                    <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                    <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                                </div>
                                <button className='absolute bottom-3 text-[16px] font-medium py-[10px] px-[15px] bg-[#08D15F] rounded-md text-white opacity-0 group-hover:opacity-100'>View Details</button>
                            </div>
                            <div className="text-center py-[15px] bg-white group-hover:bg-[#2F1AC4] group-hover:text-white">
                                <h3 className='b_title text-[#FB2E86] group-hover:text-white'>Cantilever chair</h3>
                                <div className="flex justify-center gap-x-2 pb-3">
                                    <div className="clr bg-[#05E6b7] "></div>
                                    <div className="clr bg-[#F701A8] "></div>
                                    <div className="clr bg-[#00009D] "></div>
                                </div>
                                <h4 className='text-[14px] font-normal tect-[#151875] pb-[12px]'>Code - Y523201</h4>
                                <h5 className='text-[14px] font-normal tect-[#151875]'>$42.00</h5>
                            </div>
                        </div>
                        <div className="!w-[93%] shadow-md group">
                            <div className="w-full bg-[#F6F7FB] h-[235px] py-8 flex justify-center relative overflow-hidden">
                                <Image src={Featured} alt='latest_product' className='group-hover:scale-125 duration-700 ease-in-out' />
                                <div className="flex absolute top-4 left-[-150px] group-hover:left-2 duration-700 ease-in-out text-[20px] text-[#1389FF]">
                                    <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                    <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                    <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                                </div>
                                <button className='absolute bottom-3 text-[16px] font-medium py-[10px] px-[15px] bg-[#08D15F] rounded-md text-white opacity-0 group-hover:opacity-100'>View Details</button>
                            </div>
                            <div className="text-center py-[15px] bg-white group-hover:bg-[#2F1AC4] group-hover:text-white">
                                <h3 className='b_title text-[#FB2E86] group-hover:text-white'>Cantilever chair</h3>
                                <div className="flex justify-center gap-x-2 pb-3">
                                    <div className="clr bg-[#05E6b7] "></div>
                                    <div className="clr bg-[#F701A8] "></div>
                                    <div className="clr bg-[#00009D] "></div>
                                </div>
                                <h4 className='text-[14px] font-normal tect-[#151875] pb-[12px]'>Code - Y523201</h4>
                                <h5 className='text-[14px] font-normal tect-[#151875]'>$42.00</h5>
                            </div>
                        </div>
                        <div className="!w-[93%] shadow-md group">
                            <div className="w-full bg-[#F6F7FB] h-[235px] py-8 flex justify-center relative overflow-hidden">
                                <Image src={Featured} alt='latest_product' className='group-hover:scale-125 duration-700 ease-in-out' />
                                <div className="flex absolute top-4 left-[-150px] group-hover:left-2 duration-700 ease-in-out text-[20px] text-[#1389FF]">
                                    <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                    <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                    <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                                </div>
                                <button className='absolute bottom-3 text-[16px] font-medium py-[10px] px-[15px] bg-[#08D15F] rounded-md text-white opacity-0 group-hover:opacity-100'>View Details</button>
                            </div>
                            <div className="text-center py-[15px] bg-white group-hover:bg-[#2F1AC4] group-hover:text-white">
                                <h3 className='b_title text-[#FB2E86] group-hover:text-white'>Cantilever chair</h3>
                                <div className="flex justify-center gap-x-2 pb-3">
                                    <div className="clr bg-[#05E6b7] "></div>
                                    <div className="clr bg-[#F701A8] "></div>
                                    <div className="clr bg-[#00009D] "></div>
                                </div>
                                <h4 className='text-[14px] font-normal tect-[#151875] pb-[12px]'>Code - Y523201</h4>
                                <h5 className='text-[14px] font-normal tect-[#151875]'>$42.00</h5>
                            </div>
                        </div>
                    </Slider>
                </Container>
            </section>
        </>
    )
}

export default FeaturedProduct
