import React from 'react'
import Container from './Container'
import { Tabs } from '@ark-ui/react'
import Image from 'next/image'
import Latest from '@/assets/latest.png'
import Latest2 from '@/assets/latest2.png'
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { LuZoomIn } from "react-icons/lu";

const LatestProduct = () => {
    return (
        <section className='sec_pad'>
            <Container>
                <div className="text-center">
                    <h2 className='heading'>Leatest Products</h2>
                </div>
                <div className="">
                    <Tabs.Root defaultValue="new_arrival">
                        <Tabs.List className='flex gap-x-20 justify-center mb-[50px]'>
                            <Tabs.Trigger value="new_arrival" className='text-[18px] font-bold text-[#151875]'>New Arrival</Tabs.Trigger>
                            <Tabs.Trigger value="best_seller" className='text-[18px] font-bold text-[#151875]'>Best Seller</Tabs.Trigger>
                            <Tabs.Trigger value="featured" className='text-[18px] font-bold text-[#151875]'>Featured</Tabs.Trigger>
                            <Tabs.Trigger value="speacial_offer" className='text-[18px] font-bold text-[#151875]'>Special Offer</Tabs.Trigger>
                            <Tabs.Indicator/>
                        </Tabs.List>
                        <Tabs.Content value="new_arrival">
                            <div className="flex justify-between flex-wrap">
                                <div className="w-[32%] group mb-[100px]">
                                    <div className="w-full bg-[#F7F7F7] h-[270px] py-3 flex justify-center relative overflow-hidden group-hover:bg-[#FFF]">
                                        <Image src={Latest} alt='latest_product'/>
                                        <div className="absolute bottom-[-150px] left-5 flex flex-col text-[20px] text-[#1389FF] group-hover:bottom-6 duration-500 ease-in-out">
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                                        </div>
                                        <div className="absolute top-[-40px] left-2 -rotate-[0] duration-700 ease-in-out group-hover:-rotate-[25deg] group-hover:top-7">
                                            <h5 className='text-[16px] text-[#FFF] px-[50px] py-2 bg-[#3F509E]'>Sale</h5>
                                        </div>
                                    </div>
                                    <div className="flex justify-between pt-3">
                                        <div className="">
                                            <h4 className='text-[16px] font-normal text-[#151875] relative after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#EEEFFB] after:bottom-0 after:left-0'>Comfort Handy Craft</h4>
                                        </div>
                                        <div className="flex">
                                            <h4 className='text-[16px] font-normal text-[#151875] pr-4'>$42.00</h4>
                                            <h5 className='text-[16px] font-normal text-[#FB2448] pr-4 line-through'>$65.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[32%] group mb-[100px]">
                                    <div className="w-full bg-[#F7F7F7] h-[270px] py-3 flex justify-center relative overflow-hidden group-hover:bg-[#FFF]">
                                        <Image src={Latest} alt='latest_product'/>
                                        <div className="absolute bottom-[-150px] left-5 flex flex-col text-[20px] text-[#1389FF] group-hover:bottom-6 duration-500 ease-in-out">
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                                        </div>
                                        <div className="absolute top-[-40px] left-2 -rotate-[0] duration-700 ease-in-out group-hover:-rotate-[25deg] group-hover:top-7">
                                            <h5 className='text-[16px] text-[#FFF] px-[50px] py-2 bg-[#3F509E]'>Sale</h5>
                                        </div>
                                    </div>
                                    <div className="flex justify-between pt-3">
                                        <div className="">
                                            <h4 className='text-[16px] font-normal text-[#151875] relative after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#EEEFFB] after:bottom-0 after:left-0'>Comfort Handy Craft</h4>
                                        </div>
                                        <div className="flex">
                                            <h4 className='text-[16px] font-normal text-[#151875] pr-4'>$42.00</h4>
                                            <h5 className='text-[16px] font-normal text-[#FB2448] pr-4 line-through'>$65.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[32%] group mb-[100px]">
                                    <div className="w-full bg-[#F7F7F7] h-[270px] py-3 flex justify-center relative overflow-hidden group-hover:bg-[#FFF]">
                                        <Image src={Latest} alt='latest_product'/>
                                        <div className="absolute bottom-[-150px] left-5 flex flex-col text-[20px] text-[#1389FF] group-hover:bottom-6 duration-500 ease-in-out">
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                                        </div>
                                        <div className="absolute top-[-40px] left-2 -rotate-[0] duration-700 ease-in-out group-hover:-rotate-[25deg] group-hover:top-7">
                                            <h5 className='text-[16px] text-[#FFF] px-[50px] py-2 bg-[#3F509E]'>Sale</h5>
                                        </div>
                                    </div>
                                    <div className="flex justify-between pt-3">
                                        <div className="">
                                            <h4 className='text-[16px] font-normal text-[#151875] relative after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#EEEFFB] after:bottom-0 after:left-0'>Comfort Handy Craft</h4>
                                        </div>
                                        <div className="flex">
                                            <h4 className='text-[16px] font-normal text-[#151875] pr-4'>$42.00</h4>
                                            <h5 className='text-[16px] font-normal text-[#FB2448] pr-4 line-through'>$65.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[32%] group mb-[100px]">
                                    <div className="w-full bg-[#F7F7F7] h-[270px] py-3 flex justify-center relative overflow-hidden group-hover:bg-[#FFF]">
                                        <Image src={Latest} alt='latest_product'/>
                                        <div className="absolute bottom-[-150px] left-5 flex flex-col text-[20px] text-[#1389FF] group-hover:bottom-6 duration-500 ease-in-out">
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                                        </div>
                                        <div className="absolute top-[-40px] left-2 -rotate-[0] duration-700 ease-in-out group-hover:-rotate-[25deg] group-hover:top-7">
                                            <h5 className='text-[16px] text-[#FFF] px-[50px] py-2 bg-[#3F509E]'>Sale</h5>
                                        </div>
                                    </div>
                                    <div className="flex justify-between pt-3">
                                        <div className="">
                                            <h4 className='text-[16px] font-normal text-[#151875] relative after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#EEEFFB] after:bottom-0 after:left-0'>Comfort Handy Craft</h4>
                                        </div>
                                        <div className="flex">
                                            <h4 className='text-[16px] font-normal text-[#151875] pr-4'>$42.00</h4>
                                            <h5 className='text-[16px] font-normal text-[#FB2448] pr-4 line-through'>$65.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[32%] group mb-[100px]">
                                    <div className="w-full bg-[#F7F7F7] h-[270px] py-3 flex justify-center relative overflow-hidden group-hover:bg-[#FFF]">
                                        <Image src={Latest} alt='latest_product'/>
                                        <div className="absolute bottom-[-150px] left-5 flex flex-col text-[20px] text-[#1389FF] group-hover:bottom-6 duration-500 ease-in-out">
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                                        </div>
                                        <div className="absolute top-[-40px] left-2 -rotate-[0] duration-700 ease-in-out group-hover:-rotate-[25deg] group-hover:top-7">
                                            <h5 className='text-[16px] text-[#FFF] px-[50px] py-2 bg-[#3F509E]'>Sale</h5>
                                        </div>
                                    </div>
                                    <div className="flex justify-between pt-3">
                                        <div className="">
                                            <h4 className='text-[16px] font-normal text-[#151875] relative after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#EEEFFB] after:bottom-0 after:left-0'>Comfort Handy Craft</h4>
                                        </div>
                                        <div className="flex">
                                            <h4 className='text-[16px] font-normal text-[#151875] pr-4'>$42.00</h4>
                                            <h5 className='text-[16px] font-normal text-[#FB2448] pr-4 line-through'>$65.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[32%] group mb-[100px]">
                                    <div className="w-full bg-[#F7F7F7] h-[270px] py-3 flex justify-center relative overflow-hidden group-hover:bg-[#FFF]">
                                        <Image src={Latest} alt='latest_product'/>
                                        <div className="absolute bottom-[-150px] left-5 flex flex-col text-[20px] text-[#1389FF] group-hover:bottom-6 duration-500 ease-in-out">
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                                        </div>
                                        <div className="absolute top-[-40px] left-2 -rotate-[0] duration-700 ease-in-out group-hover:-rotate-[25deg] group-hover:top-7">
                                            <h5 className='text-[16px] text-[#FFF] px-[50px] py-2 bg-[#3F509E]'>Sale</h5>
                                        </div>
                                    </div>
                                    <div className="flex justify-between pt-3">
                                        <div className="">
                                            <h4 className='text-[16px] font-normal text-[#151875] relative after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#EEEFFB] after:bottom-0 after:left-0'>Comfort Handy Craft</h4>
                                        </div>
                                        <div className="flex">
                                            <h4 className='text-[16px] font-normal text-[#151875] pr-4'>$42.00</h4>
                                            <h5 className='text-[16px] font-normal text-[#FB2448] pr-4 line-through'>$65.00</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tabs.Content>
                        <Tabs.Content value="best_seller">
                        <div className="flex justify-between flex-wrap">
                                <div className="w-[32%] group mb-[100px]">
                                    <div className="w-full bg-[#F6F7FB] h-[270px] py-3 flex justify-center relative overflow-hidden group-hover:bg-white">
                                        <Image src={Latest2} alt='latest_product'/>
                                        <div className="absolute bottom-[-150px] left-5 flex flex-col text-[20px] text-[#1389FF] group-hover:bottom-6 duration-500 ease-in-out">
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                                        </div>
                                        <div className="absolute top-[-40px] left-2 -rotate-[0] duration-700 ease-in-out group-hover:-rotate-[25deg] group-hover:top-7">
                                            <h5 className='text-[16px] text-[#FFF] px-[50px] py-2 bg-[#3F509E]'>Sale</h5>
                                        </div>
                                    </div>
                                    <div className="flex justify-between pt-3 bg-white">
                                        <div className="">
                                            <h4 className='text-[16px] font-normal text-[#151875] relative after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#EEEFFB] after:bottom-0 after:left-0'>Comfort Handy Craft</h4>
                                        </div>
                                        <div className="flex">
                                            <h4 className='text-[16px] font-normal text-[#151875] pr-4'>$42.00</h4>
                                            <h5 className='text-[16px] font-normal text-[#FB2448] pr-4 line-through'>$65.00</h5>
                                        </div>
                                    </div>
                                </div>                                                         
                                <div className="w-[32%] group mb-[100px]">
                                    <div className="w-full bg-[#F6F7FB] h-[270px] py-3 flex justify-center relative overflow-hidden group-hover:bg-white">
                                        <Image src={Latest2} alt='latest_product'/>
                                        <div className="absolute bottom-[-150px] left-5 flex flex-col text-[20px] text-[#1389FF] group-hover:bottom-6 duration-500 ease-in-out">
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                                        </div>
                                        <div className="absolute top-[-40px] left-2 -rotate-[0] duration-700 ease-in-out group-hover:-rotate-[25deg] group-hover:top-7">
                                            <h5 className='text-[16px] text-[#FFF] px-[50px] py-2 bg-[#3F509E]'>Sale</h5>
                                        </div>
                                    </div>
                                    <div className="flex justify-between pt-3 bg-white">
                                        <div className="">
                                            <h4 className='text-[16px] font-normal text-[#151875] relative after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#EEEFFB] after:bottom-0 after:left-0'>Comfort Handy Craft</h4>
                                        </div>
                                        <div className="flex">
                                            <h4 className='text-[16px] font-normal text-[#151875] pr-4'>$42.00</h4>
                                            <h5 className='text-[16px] font-normal text-[#FB2448] pr-4 line-through'>$65.00</h5>
                                        </div>
                                    </div>
                                </div>                                                         
                                <div className="w-[32%] group mb-[100px]">
                                    <div className="w-full bg-[#F6F7FB] h-[270px] py-3 flex justify-center relative overflow-hidden group-hover:bg-white">
                                        <Image src={Latest2} alt='latest_product'/>
                                        <div className="absolute bottom-[-150px] left-5 flex flex-col text-[20px] text-[#1389FF] group-hover:bottom-6 duration-500 ease-in-out">
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                                        </div>
                                        <div className="absolute top-[-40px] left-2 -rotate-[0] duration-700 ease-in-out group-hover:-rotate-[25deg] group-hover:top-7">
                                            <h5 className='text-[16px] text-[#FFF] px-[50px] py-2 bg-[#3F509E]'>Sale</h5>
                                        </div>
                                    </div>
                                    <div className="flex justify-between pt-3 bg-white">
                                        <div className="">
                                            <h4 className='text-[16px] font-normal text-[#151875] relative after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#EEEFFB] after:bottom-0 after:left-0'>Comfort Handy Craft</h4>
                                        </div>
                                        <div className="flex">
                                            <h4 className='text-[16px] font-normal text-[#151875] pr-4'>$42.00</h4>
                                            <h5 className='text-[16px] font-normal text-[#FB2448] pr-4 line-through'>$65.00</h5>
                                        </div>
                                    </div>
                                </div>                                                         
                                <div className="w-[32%] group mb-[100px]">
                                    <div className="w-full bg-[#F6F7FB] h-[270px] py-3 flex justify-center relative overflow-hidden group-hover:bg-white">
                                        <Image src={Latest2} alt='latest_product'/>
                                        <div className="absolute bottom-[-150px] left-5 flex flex-col text-[20px] text-[#1389FF] group-hover:bottom-6 duration-500 ease-in-out">
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                                        </div>
                                        <div className="absolute top-[-40px] left-2 -rotate-[0] duration-700 ease-in-out group-hover:-rotate-[25deg] group-hover:top-7">
                                            <h5 className='text-[16px] text-[#FFF] px-[50px] py-2 bg-[#3F509E]'>Sale</h5>
                                        </div>
                                    </div>
                                    <div className="flex justify-between pt-3 bg-white">
                                        <div className="">
                                            <h4 className='text-[16px] font-normal text-[#151875] relative after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#EEEFFB] after:bottom-0 after:left-0'>Comfort Handy Craft</h4>
                                        </div>
                                        <div className="flex">
                                            <h4 className='text-[16px] font-normal text-[#151875] pr-4'>$42.00</h4>
                                            <h5 className='text-[16px] font-normal text-[#FB2448] pr-4 line-through'>$65.00</h5>
                                        </div>
                                    </div>
                                </div>                                                         
                                <div className="w-[32%] group mb-[100px]">
                                    <div className="w-full bg-[#F6F7FB] h-[270px] py-3 flex justify-center relative overflow-hidden group-hover:bg-white">
                                        <Image src={Latest2} alt='latest_product'/>
                                        <div className="absolute bottom-[-150px] left-5 flex flex-col text-[20px] text-[#1389FF] group-hover:bottom-6 duration-500 ease-in-out">
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                                        </div>
                                        <div className="absolute top-[-40px] left-2 -rotate-[0] duration-700 ease-in-out group-hover:-rotate-[25deg] group-hover:top-7">
                                            <h5 className='text-[16px] text-[#FFF] px-[50px] py-2 bg-[#3F509E]'>Sale</h5>
                                        </div>
                                    </div>
                                    <div className="flex justify-between pt-3 bg-white">
                                        <div className="">
                                            <h4 className='text-[16px] font-normal text-[#151875] relative after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#EEEFFB] after:bottom-0 after:left-0'>Comfort Handy Craft</h4>
                                        </div>
                                        <div className="flex">
                                            <h4 className='text-[16px] font-normal text-[#151875] pr-4'>$42.00</h4>
                                            <h5 className='text-[16px] font-normal text-[#FB2448] pr-4 line-through'>$65.00</h5>
                                        </div>
                                    </div>
                                </div>                                                         
                                <div className="w-[32%] group mb-[100px]">
                                    <div className="w-full bg-[#F6F7FB] h-[270px] py-3 flex justify-center relative overflow-hidden group-hover:bg-white">
                                        <Image src={Latest2} alt='latest_product'/>
                                        <div className="absolute bottom-[-150px] left-5 flex flex-col text-[20px] text-[#1389FF] group-hover:bottom-6 duration-500 ease-in-out">
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                                        </div>
                                        <div className="absolute top-[-40px] left-2 -rotate-[0] duration-700 ease-in-out group-hover:-rotate-[25deg] group-hover:top-7">
                                            <h5 className='text-[16px] text-[#FFF] px-[50px] py-2 bg-[#3F509E]'>Sale</h5>
                                        </div>
                                    </div>
                                    <div className="flex justify-between pt-3 bg-white">
                                        <div className="">
                                            <h4 className='text-[16px] font-normal text-[#151875] relative after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#EEEFFB] after:bottom-0 after:left-0'>Comfort Handy Craft</h4>
                                        </div>
                                        <div className="flex">
                                            <h4 className='text-[16px] font-normal text-[#151875] pr-4'>$42.00</h4>
                                            <h5 className='text-[16px] font-normal text-[#FB2448] pr-4 line-through'>$65.00</h5>
                                        </div>
                                    </div>
                                </div>                                                        
                            </div>
                        </Tabs.Content>
                        <Tabs.Content value="featured">
                        <div className="flex justify-between flex-wrap">
                                <div className="w-[32%] group mb-[100px]">
                                    <div className="w-full bg-[#F6F7FB] h-[270px] py-3 flex justify-center relative overflow-hidden group-hover:bg-white">
                                        <Image src={Latest} alt='latest_product'/>
                                        <div className="absolute bottom-[-150px] left-5 flex flex-col text-[20px] text-[#1389FF] group-hover:bottom-6 duration-500 ease-in-out">
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                                        </div>
                                        <div className="absolute top-[-40px] left-2 -rotate-[0] duration-700 ease-in-out group-hover:-rotate-[25deg] group-hover:top-7">
                                            <h5 className='text-[16px] text-[#FFF] px-[50px] py-2 bg-[#3F509E]'>Sale</h5>
                                        </div>
                                    </div>
                                    <div className="flex justify-between pt-3 bg-white">
                                        <div className="">
                                            <h4 className='text-[16px] font-normal text-[#151875] relative after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#EEEFFB] after:bottom-0 after:left-0'>Comfort Handy Craft</h4>
                                        </div>
                                        <div className="flex">
                                            <h4 className='text-[16px] font-normal text-[#151875] pr-4'>$42.00</h4>
                                            <h5 className='text-[16px] font-normal text-[#FB2448] pr-4 line-through'>$65.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[32%] group mb-[100px]">
                                    <div className="w-full bg-[#F6F7FB] h-[270px] py-3 flex justify-center relative overflow-hidden group-hover:bg-white">
                                        <Image src={Latest} alt='latest_product'/>
                                        <div className="absolute bottom-[-150px] left-5 flex flex-col text-[20px] text-[#1389FF] group-hover:bottom-6 duration-500 ease-in-out">
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                                        </div>
                                        <div className="absolute top-[-40px] left-2 -rotate-[0] duration-700 ease-in-out group-hover:-rotate-[25deg] group-hover:top-7">
                                            <h5 className='text-[16px] text-[#FFF] px-[50px] py-2 bg-[#3F509E]'>Sale</h5>
                                        </div>
                                    </div>
                                    <div className="flex justify-between pt-3 bg-white">
                                        <div className="">
                                            <h4 className='text-[16px] font-normal text-[#151875] relative after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#EEEFFB] after:bottom-0 after:left-0'>Comfort Handy Craft</h4>
                                        </div>
                                        <div className="flex">
                                            <h4 className='text-[16px] font-normal text-[#151875] pr-4'>$42.00</h4>
                                            <h5 className='text-[16px] font-normal text-[#FB2448] pr-4 line-through'>$65.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[32%] group mb-[100px]">
                                    <div className="w-full bg-[#F6F7FB] h-[270px] py-3 flex justify-center relative overflow-hidden group-hover:bg-white">
                                        <Image src={Latest} alt='latest_product'/>
                                        <div className="absolute bottom-[-150px] left-5 flex flex-col text-[20px] text-[#1389FF] group-hover:bottom-6 duration-500 ease-in-out">
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                                        </div>
                                        <div className="absolute top-[-40px] left-2 -rotate-[0] duration-700 ease-in-out group-hover:-rotate-[25deg] group-hover:top-7">
                                            <h5 className='text-[16px] text-[#FFF] px-[50px] py-2 bg-[#3F509E]'>Sale</h5>
                                        </div>
                                    </div>
                                    <div className="flex justify-between pt-3 bg-white">
                                        <div className="">
                                            <h4 className='text-[16px] font-normal text-[#151875] relative after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#EEEFFB] after:bottom-0 after:left-0'>Comfort Handy Craft</h4>
                                        </div>
                                        <div className="flex">
                                            <h4 className='text-[16px] font-normal text-[#151875] pr-4'>$42.00</h4>
                                            <h5 className='text-[16px] font-normal text-[#FB2448] pr-4 line-through'>$65.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[32%] group mb-[100px]">
                                    <div className="w-full bg-[#F6F7FB] h-[270px] py-3 flex justify-center relative overflow-hidden group-hover:bg-white">
                                        <Image src={Latest} alt='latest_product'/>
                                        <div className="absolute bottom-[-150px] left-5 flex flex-col text-[20px] text-[#1389FF] group-hover:bottom-6 duration-500 ease-in-out">
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                                        </div>
                                        <div className="absolute top-[-40px] left-2 -rotate-[0] duration-700 ease-in-out group-hover:-rotate-[25deg] group-hover:top-7">
                                            <h5 className='text-[16px] text-[#FFF] px-[50px] py-2 bg-[#3F509E]'>Sale</h5>
                                        </div>
                                    </div>
                                    <div className="flex justify-between pt-3 bg-white">
                                        <div className="">
                                            <h4 className='text-[16px] font-normal text-[#151875] relative after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#EEEFFB] after:bottom-0 after:left-0'>Comfort Handy Craft</h4>
                                        </div>
                                        <div className="flex">
                                            <h4 className='text-[16px] font-normal text-[#151875] pr-4'>$42.00</h4>
                                            <h5 className='text-[16px] font-normal text-[#FB2448] pr-4 line-through'>$65.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[32%] group mb-[100px]">
                                    <div className="w-full bg-[#F6F7FB] h-[270px] py-3 flex justify-center relative overflow-hidden group-hover:bg-white">
                                        <Image src={Latest} alt='latest_product'/>
                                        <div className="absolute bottom-[-150px] left-5 flex flex-col text-[20px] text-[#1389FF] group-hover:bottom-6 duration-500 ease-in-out">
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                                        </div>
                                        <div className="absolute top-[-40px] left-2 -rotate-[0] duration-700 ease-in-out group-hover:-rotate-[25deg] group-hover:top-7">
                                            <h5 className='text-[16px] text-[#FFF] px-[50px] py-2 bg-[#3F509E]'>Sale</h5>
                                        </div>
                                    </div>
                                    <div className="flex justify-between pt-3 bg-white">
                                        <div className="">
                                            <h4 className='text-[16px] font-normal text-[#151875] relative after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#EEEFFB] after:bottom-0 after:left-0'>Comfort Handy Craft</h4>
                                        </div>
                                        <div className="flex">
                                            <h4 className='text-[16px] font-normal text-[#151875] pr-4'>$42.00</h4>
                                            <h5 className='text-[16px] font-normal text-[#FB2448] pr-4 line-through'>$65.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[32%] group mb-[100px]">
                                    <div className="w-full bg-[#F6F7FB] h-[270px] py-3 flex justify-center relative overflow-hidden group-hover:bg-white">
                                        <Image src={Latest} alt='latest_product'/>
                                        <div className="absolute bottom-[-150px] left-5 flex flex-col text-[20px] text-[#1389FF] group-hover:bottom-6 duration-500 ease-in-out">
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                                        </div>
                                        <div className="absolute top-[-40px] left-2 -rotate-[0] duration-700 ease-in-out group-hover:-rotate-[25deg] group-hover:top-7">
                                            <h5 className='text-[16px] text-[#FFF] px-[50px] py-2 bg-[#3F509E]'>Sale</h5>
                                        </div>
                                    </div>
                                    <div className="flex justify-between pt-3 bg-white">
                                        <div className="">
                                            <h4 className='text-[16px] font-normal text-[#151875] relative after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#EEEFFB] after:bottom-0 after:left-0'>Comfort Handy Craft</h4>
                                        </div>
                                        <div className="flex">
                                            <h4 className='text-[16px] font-normal text-[#151875] pr-4'>$42.00</h4>
                                            <h5 className='text-[16px] font-normal text-[#FB2448] pr-4 line-through'>$65.00</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tabs.Content>
                        <Tabs.Content value="speacial_offer">
                        <div className="flex justify-between flex-wrap">
                                <div className="w-[32%] group mb-[100px]">
                                    <div className="w-full bg-[#F6F7FB] h-[270px] py-3 flex justify-center relative overflow-hidden group-hover:bg-white">
                                        <Image src={Latest2} alt='latest_product'/>
                                        <div className="absolute bottom-[-150px] left-5 flex flex-col text-[20px] text-[#1389FF] group-hover:bottom-6 duration-500 ease-in-out">
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                                        </div>
                                        <div className="absolute top-[-40px] left-2 -rotate-[0] duration-700 ease-in-out group-hover:-rotate-[25deg] group-hover:top-7">
                                            <h5 className='text-[16px] text-[#FFF] px-[50px] py-2 bg-[#3F509E]'>Sale</h5>
                                        </div>
                                    </div>
                                    <div className="flex justify-between pt-3 bg-white">
                                        <div className="">
                                            <h4 className='text-[16px] font-normal text-[#151875] relative after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#EEEFFB] after:bottom-0 after:left-0'>Comfort Handy Craft</h4>
                                        </div>
                                        <div className="flex">
                                            <h4 className='text-[16px] font-normal text-[#151875] pr-4'>$42.00</h4>
                                            <h5 className='text-[16px] font-normal text-[#FB2448] pr-4 line-through'>$65.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[32%] group mb-[100px]">
                                    <div className="w-full bg-[#F6F7FB] h-[270px] py-3 flex justify-center relative overflow-hidden group-hover:bg-white">
                                        <Image src={Latest2} alt='latest_product'/>
                                        <div className="absolute bottom-[-150px] left-5 flex flex-col text-[20px] text-[#1389FF] group-hover:bottom-6 duration-500 ease-in-out">
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                                        </div>
                                        <div className="absolute top-[-40px] left-2 -rotate-[0] duration-700 ease-in-out group-hover:-rotate-[25deg] group-hover:top-7">
                                            <h5 className='text-[16px] text-[#FFF] px-[50px] py-2 bg-[#3F509E]'>Sale</h5>
                                        </div>
                                    </div>
                                    <div className="flex justify-between pt-3 bg-white">
                                        <div className="">
                                            <h4 className='text-[16px] font-normal text-[#151875] relative after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#EEEFFB] after:bottom-0 after:left-0'>Comfort Handy Craft</h4>
                                        </div>
                                        <div className="flex">
                                            <h4 className='text-[16px] font-normal text-[#151875] pr-4'>$42.00</h4>
                                            <h5 className='text-[16px] font-normal text-[#FB2448] pr-4 line-through'>$65.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[32%] group mb-[100px]">
                                    <div className="w-full bg-[#F6F7FB] h-[270px] py-3 flex justify-center relative overflow-hidden group-hover:bg-white">
                                        <Image src={Latest2} alt='latest_product'/>
                                        <div className="absolute bottom-[-150px] left-5 flex flex-col text-[20px] text-[#1389FF] group-hover:bottom-6 duration-500 ease-in-out">
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                                        </div>
                                        <div className="absolute top-[-40px] left-2 -rotate-[0] duration-700 ease-in-out group-hover:-rotate-[25deg] group-hover:top-7">
                                            <h5 className='text-[16px] text-[#FFF] px-[50px] py-2 bg-[#3F509E]'>Sale</h5>
                                        </div>
                                    </div>
                                    <div className="flex justify-between pt-3 bg-white">
                                        <div className="">
                                            <h4 className='text-[16px] font-normal text-[#151875] relative after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#EEEFFB] after:bottom-0 after:left-0'>Comfort Handy Craft</h4>
                                        </div>
                                        <div className="flex">
                                            <h4 className='text-[16px] font-normal text-[#151875] pr-4'>$42.00</h4>
                                            <h5 className='text-[16px] font-normal text-[#FB2448] pr-4 line-through'>$65.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[32%] group mb-[100px]">
                                    <div className="w-full bg-[#F6F7FB] h-[270px] py-3 flex justify-center relative overflow-hidden group-hover:bg-white">
                                        <Image src={Latest2} alt='latest_product'/>
                                        <div className="absolute bottom-[-150px] left-5 flex flex-col text-[20px] text-[#1389FF] group-hover:bottom-6 duration-500 ease-in-out">
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                                        </div>
                                        <div className="absolute top-[-40px] left-2 -rotate-[0] duration-700 ease-in-out group-hover:-rotate-[25deg] group-hover:top-7">
                                            <h5 className='text-[16px] text-[#FFF] px-[50px] py-2 bg-[#3F509E]'>Sale</h5>
                                        </div>
                                    </div>
                                    <div className="flex justify-between pt-3 bg-white">
                                        <div className="">
                                            <h4 className='text-[16px] font-normal text-[#151875] relative after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#EEEFFB] after:bottom-0 after:left-0'>Comfort Handy Craft</h4>
                                        </div>
                                        <div className="flex">
                                            <h4 className='text-[16px] font-normal text-[#151875] pr-4'>$42.00</h4>
                                            <h5 className='text-[16px] font-normal text-[#FB2448] pr-4 line-through'>$65.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[32%] group mb-[100px]">
                                    <div className="w-full bg-[#F6F7FB] h-[270px] py-3 flex justify-center relative overflow-hidden group-hover:bg-white">
                                        <Image src={Latest2} alt='latest_product'/>
                                        <div className="absolute bottom-[-150px] left-5 flex flex-col text-[20px] text-[#1389FF] group-hover:bottom-6 duration-500 ease-in-out">
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                                        </div>
                                        <div className="absolute top-[-40px] left-2 -rotate-[0] duration-700 ease-in-out group-hover:-rotate-[25deg] group-hover:top-7">
                                            <h5 className='text-[16px] text-[#FFF] px-[50px] py-2 bg-[#3F509E]'>Sale</h5>
                                        </div>
                                    </div>
                                    <div className="flex justify-between pt-3 bg-white">
                                        <div className="">
                                            <h4 className='text-[16px] font-normal text-[#151875] relative after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#EEEFFB] after:bottom-0 after:left-0'>Comfort Handy Craft</h4>
                                        </div>
                                        <div className="flex">
                                            <h4 className='text-[16px] font-normal text-[#151875] pr-4'>$42.00</h4>
                                            <h5 className='text-[16px] font-normal text-[#FB2448] pr-4 line-through'>$65.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[32%] group mb-[100px]">
                                    <div className="w-full bg-[#F6F7FB] h-[270px] py-3 flex justify-center relative overflow-hidden group-hover:bg-white">
                                        <Image src={Latest2} alt='latest_product'/>
                                        <div className="absolute bottom-[-150px] left-5 flex flex-col text-[20px] text-[#1389FF] group-hover:bottom-6 duration-500 ease-in-out">
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                                        </div>
                                        <div className="absolute top-[-40px] left-2 -rotate-[0] duration-700 ease-in-out group-hover:-rotate-[25deg] group-hover:top-7">
                                            <h5 className='text-[16px] text-[#FFF] px-[50px] py-2 bg-[#3F509E]'>Sale</h5>
                                        </div>
                                    </div>
                                    <div className="flex justify-between pt-3 bg-white">
                                        <div className="">
                                            <h4 className='text-[16px] font-normal text-[#151875] relative after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#EEEFFB] after:bottom-0 after:left-0'>Comfort Handy Craft</h4>
                                        </div>
                                        <div className="flex">
                                            <h4 className='text-[16px] font-normal text-[#151875] pr-4'>$42.00</h4>
                                            <h5 className='text-[16px] font-normal text-[#FB2448] pr-4 line-through'>$65.00</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tabs.Content>
                    </Tabs.Root>
                </div>
            </Container>
        </section>
    )
}

export default LatestProduct
