import Image from 'next/image'
import React from 'react'

export default function Portfolio() {
    return (
        <section className='max-w-screen-xl mx-auto lg:px-28 py-20' >
            <h5 className='text-3xl lg:text-5xl font-bold text-center relative text-[#EFAE02] my-10'><span className='outline-border font-bold absolute text-[32px] lg:text-[51px] tracking-wider -ml-6'  >Portfolio Made With</span>Portfolio Made With</h5>
            <div className='lg:p-10 grid grid-cols-3 lg:grid-cols-3 gap-2 lg:gap-4 space-y-6'>
                <p 
                    className='lg:p-2 bg-white rounded-full text-[#424242] mt-6 font-bold  lg:text-2xl flex lg:gap-4 items-center justify-center  '>
                    <Image fill src="/figma.webp" alt="" className='!relative !w-6 !h-6 lg:!w-10 lg:!h-10' />
                    Figma
                </p>

                <p  
                    className='lg:p-2 bg-white rounded-full text-[#424242] mt-6 font-bold  lg:text-2xl flex lg:gap-4 items-center justify-center'>
                    <Image fill src="/react.svg" alt="" className='!relative !w-6 !h-6 lg:!w-10 lg:!h-10' />
                    ReactJS
                </p>

                <p   className='p-2 lg:p-2 bg-white rounded-full text-[#424242] mt-6 font-bold  lg:text-2xl flex lg:gap-4 items-center justify-center'>
                    <Image fill src="/next-js.svg" alt="" className='!relative !w-6 !h-6 lg:!w-10 lg:!h-10' />
                    NextJS
                </p>

                <p data-aos="zoom-in" className='p-1 px-2 bg-white rounded-full text-[#424242] font-bold  text-2xl flex items-center justify-center gap-4 mx-6 col-span-3 lg:col-span-2 lg:mx-16'>
                    <Image fill src="/Tailwind.webp" alt="" className='!relative !w-10 !h-10' />
                    TailwindCSS
                </p>

                <p  
                    className='p-1 px-2 bg-white rounded-full text-[#424242] font-bold text-2xl flex items-center justify-center max-lg:col-span-3 mx-6 gap-4 '>
                    <Image fill src="/aos.webp" alt="" className='!relative !w-10 !h-10 !rounded-full' />
                    Animation On Scroll
                </p>
                <p  
                     className='p-1 px-2 bg-white rounded-full text-[#424242] font-bold text-2xl flex items-center justify-center gap-4 col-span-3 mx-4 lg:mr-52'>
                    <Image fill src="/vscode.webp" alt="" className='!relative !w-10 !h-10 !rounded-full' />
                    Visual Studio Code
                </p>

            </div>

        </section>
    )
}
