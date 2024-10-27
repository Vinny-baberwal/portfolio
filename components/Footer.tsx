import Image from 'next/image'
import React from 'react'

function Footer() {
    return (
        <>
            <footer className="pb-5 bottom-4  inset-x-0  flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm max-sm:bg-[#121212] ">
                <nav
                    className="relative max-w-[85rem] w-full bg-[#EFAE02] border border-gray-700 rounded-[25px] mx-2  px-2 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto "

                >
                    <div className="flex justify-between items-center w-full md:flex-nowrap md:space-x-3 text-white " >
                        <div className='flex items-center gap-'>
                        <Image src={"/vs.png"} alt="" fill className="!relative !w-14 zooming2 rounded-full p-2 !py-5 " />
                        <p className='lg:text-2xl text-black'>Vinit  <span className='font-bold'>Saini </span></p>
                        </div>
                        <p className='lg:text-2xl text-black'>Designed & Build by  <span className='font-bold'>Vinit Saini </span></p>
                    </div>

                </nav>
            </footer>
        </>
    )
}

export default Footer
