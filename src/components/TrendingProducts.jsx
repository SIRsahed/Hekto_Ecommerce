import React from 'react'
import Container from './Container'
import Image from 'next/image'
import Latest from '@/assets/featured.png'
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { LuZoomIn } from "react-icons/lu";

const TrendingProducts = () => {
    return (
        <section id='' className='sec_pad'>
            <Container>
                <div className="text-center">
                    <h2 className='heading'>Trending Products</h2>
                </div>
                <div className="flex justify-between flex-wrap">
                    <div className="w-[24%] group px-3 pt-3 pb-8 bg-white shadow-2xl">
                        <div className="w-full bg-[#F6F7FB] h-[220px] py-3 flex justify-center relative overflow-hidden">
                            <Image src={Latest} alt='latest_product' className='group-hover:scale-110 duration-500 ease-in-out'/>
                            <div className="flex absolute top-4 left-[-150px] group-hover:left-2 duration-700 ease-in-out text-[20px] text-[#1389FF]">
                                <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                            </div>
                            <button className='absolute -bottom-12 text-[16px] font-medium py-[10px] px-[15px] bg-[#08D15F] rounded-md text-white group-hover:bottom-3 duration-500 ease-in-out'>View Details</button>
                        </div>
                        <div className="pt-6 bg-white text-center">
                            <div className="pb-3">
                                <h4 className='text-[16px] font-normal text-[#151875]'>Comfort Handy Craft</h4>
                            </div>
                            <div className="flex justify-center">
                                <h4 className='text-[16px] font-normal text-[#151875] pr-4'>$42.00</h4>
                                <h5 className='text-[16px] font-normal text-[#1518754D] pr-4 line-through'>$65.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="w-[24%] group px-3 pt-3 pb-8 bg-white shadow-2xl">
                        <div className="w-full bg-[#F6F7FB] h-[220px] py-3 flex justify-center relative overflow-hidden">
                            <Image src={Latest} alt='latest_product' className='group-hover:scale-110 duration-500 ease-in-out'/>
                            <div className="flex absolute top-4 left-[-150px] group-hover:left-2 duration-700 ease-in-out text-[20px] text-[#1389FF]">
                                <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                            </div>
                            <button className='absolute -bottom-12 text-[16px] font-medium py-[10px] px-[15px] bg-[#08D15F] rounded-md text-white group-hover:bottom-3 duration-500 ease-in-out'>View Details</button>
                        </div>
                        <div className="pt-6 bg-white text-center">
                            <div className="pb-3">
                                <h4 className='text-[16px] font-normal text-[#151875]'>Comfort Handy Craft</h4>
                            </div>
                            <div className="flex justify-center">
                                <h4 className='text-[16px] font-normal text-[#151875] pr-4'>$42.00</h4>
                                <h5 className='text-[16px] font-normal text-[#1518754D] pr-4 line-through'>$65.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="w-[24%] group px-3 pt-3 pb-8 bg-white shadow-2xl">
                        <div className="w-full bg-[#F6F7FB] h-[220px] py-3 flex justify-center relative overflow-hidden">
                            <Image src={Latest} alt='latest_product' className='group-hover:scale-110 duration-500 ease-in-out'/>
                            <div className="flex absolute top-4 left-[-150px] group-hover:left-2 duration-700 ease-in-out text-[20px] text-[#1389FF]">
                                <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                            </div>
                            <button className='absolute -bottom-12 text-[16px] font-medium py-[10px] px-[15px] bg-[#08D15F] rounded-md text-white group-hover:bottom-3 duration-500 ease-in-out'>View Details</button>
                        </div>
                        <div className="pt-6 bg-white text-center">
                            <div className="pb-3">
                                <h4 className='text-[16px] font-normal text-[#151875]'>Comfort Handy Craft</h4>
                            </div>
                            <div className="flex justify-center">
                                <h4 className='text-[16px] font-normal text-[#151875] pr-4'>$42.00</h4>
                                <h5 className='text-[16px] font-normal text-[#1518754D] pr-4 line-through'>$65.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="w-[24%] group px-3 pt-3 pb-8 bg-white shadow-2xl">
                        <div className="w-full bg-[#F6F7FB] h-[220px] py-3 flex justify-center relative overflow-hidden">
                            <Image src={Latest} alt='latest_product' className='group-hover:scale-110 duration-500 ease-in-out'/>
                            <div className="flex absolute top-4 left-[-150px] group-hover:left-2 duration-700 ease-in-out text-[20px] text-[#1389FF]">
                                <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                            </div>
                            <button className='absolute -bottom-12 text-[16px] font-medium py-[10px] px-[15px] bg-[#08D15F] rounded-md text-white group-hover:bottom-3 duration-500 ease-in-out'>View Details</button>
                        </div>
                        <div className="pt-6 bg-white text-center">
                            <div className="pb-3">
                                <h4 className='text-[16px] font-normal text-[#151875]'>Comfort Handy Craft</h4>
                            </div>
                            <div className="flex justify-center">
                                <h4 className='text-[16px] font-normal text-[#151875] pr-4'>$42.00</h4>
                                <h5 className='text-[16px] font-normal text-[#1518754D] pr-4 line-through'>$65.00</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default TrendingProducts
