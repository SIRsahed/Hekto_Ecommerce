import React from 'react'
import Container from './Container'
import Image from 'next/image'
import Logo from "@/assets/logo.png"
import Link from 'next/link'
import { Lato } from 'next/font/google'
import { IoSearch } from "react-icons/io5";

const lato = Lato({
    subsets: ["latin"],
    weight: ["400"]
})

const Navbar = () => {
    return (
        <section className='py-4'>
            <Container>
                <div className="flex justify-between items-center">
                    <div className="w-[20%] items-center">
                        <Image src={Logo} alt='latest_product'/>
                    </div>
                    <div className="w-[50%]">
                        <ul className={`${lato.className} flex gap-x-10 items-center`}>
                            <li><Link href={""}>Home</Link></li>
                            <li><Link href={""}>Pages</Link></li>
                            <li><Link href={""}>Products</Link></li>
                            <li><Link href={""}>Blog</Link></li>
                            <li><Link href={""}>Shop</Link></li>
                            <li><Link href={""}>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="w-[30%] flex items-center">
                        <input type="search" className='w-[85%] bg-[#D9D9D9] h-[40px] outline-none px-5' />
                        <IoSearch className='w-[15%] bg-[#FB2E86] h-[40px] py-[10px] text-white'/>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Navbar
