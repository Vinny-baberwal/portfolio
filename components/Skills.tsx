import Image from 'next/image'
import React from 'react'

export default function Skills() {
    return (
        <section className='max-w-screen-xl mx-auto text-white py-40 lg:py-80' >
            <h1 className='text-4xl lg:text-5xl font-bold text-center relative text-[#EFAE02] py-4 lg:mb-16'><span className='outline-border font-bold absolute text-5xl lg:text-6xl'  >Skills</span>Skills</h1>

            <h5 className='text-4xl lg:text-5xl font-bold text-center relative text-[#EFAE02] mb-6 lg:mb-16'><span className='outline-border font-bold absolute text-[38px]  lg:text-[50px]'  >Design Tools I Use</span>Design Tools I Use</h5>
            <div className='flex items-center justify-center text-black'>
                <p   className='p-2 items-center bg-white rounded-full  font-bold text-2xl flex gap-4 mr-4 '>
                    <Image fill src="/figma.webp" alt="" className='!relative !w-10 !h-10' />
                    Figma
                </p>

                <p   className='p-2 pl-4 bg-white rounded-full font-bold text-2xl flex items-center gap-4'>
                    <Image fill src="/palette.webp" alt="" className='!relative !w-10 !h-10' />
                    Canva
                </p>
            </div>

            <div className=''>


                {/* ----- */}
                <h5 className='text-4xl lg:text-5xl font-bold text-center relative text-[#EFAE02] my-10'><span className='outline-border font-bold absolute text-[38px] lg:text-[50px]'  >Technologies I Use</span>Technologies I Use</h5>

                <div className='lg:p-10 grid grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-4 space-y-6'>
                    <p 
                        className='lg:p-2 bg-white rounded-full text-[#424242] mt-6 font-bold  lg:text-2xl flex lg:gap-4 items-center justify-center  '>
                        <Image fill src="/html-5.webp" alt="" className='!relative !w-6 !h-6 lg:!w-10 lg:!h-10' />
                        Html5
                    </p>

                    <p 
                      className='lg:p-2 bg-white rounded-full text-[#424242] mt-6 font-bold  lg:text-2xl flex lg:gap-4 items-center justify-center'>
                        <Image fill src="/css-3.webp" alt="" className='!relative !w-6 !h-6 lg:!w-10 lg:!h-10' />
                        CSS3
                    </p>

                    <p   className='p-2 lg:p-2 bg-white rounded-full text-[#424242] mt-6 font-bold  lg:text-2xl flex lg:gap-4 items-center justify-center'>
                        <Image fill src="/javascript.webp" alt=""  className='!relative !w-6 !h-6 lg:!w-10 lg:!h-10' />
                        JavaScript
                    </p>

                    <p   className='p-2 lg:p-2 bg-white rounded-full text-[#424242] mt-6 font-bold lg:text-2xl flex lg:gap-4 items-center justify-center'>
                        <Image fill src="/jquery.webp" alt=""  className='!relative !w-6 !h-6 lg:!w-10 lg:!h-10' />
                        JQuery
                    </p>

                    <p    className='lg:p-2 bg-white rounded-full text-[#424242] mt-6 font-bold lg:text-2xl flex lg:gap-4 items-center justify-center'>
                        <Image fill src="/sass.webp" alt=""  className='!relative !w-6 !h-6 lg:!w-10 lg:!h-10' />
                        SCSS
                    </p>

                    <p    className='lg:p-2 bg-white rounded-full text-[#424242] mt-6 font-bold lg:text-2xl flex lg:gap-4 items-center justify-center'>
                        <Image fill src="/bootstrap.webp" alt=""  className='!relative !w-6 !h-6 lg:!w-10 lg:!h-10' />
                        Bootstrap
                    </p>

                    <p  className='p-1 px-2 bg-white rounded-full text-[#424242] font-bold text-2xl flex items-center justify-center gap-4 col-span-2 lg:ml-44 '>
                        <Image fill src="/react.svg" alt="" className='!relative !w-10 !h-10' />
                        ReactJS
                    </p>

                    <p   className='p-1 px-2 bg-white rounded-full text-[#424242] font-bold text-2xl flex items-center justify-center lg:gap-4'>
                        <Image fill src="/redux.webp" alt="" className='!relative !w-10 !h-10' />
                        Redux
                    </p>

                    <p className='p-1 lg:px-2 bg-white rounded-full text-[#424242] font-bold text-lg lg:text-2xl flex items-center justify-center lg:gap-4'>
                        <Image fill src="/firebase.webp" alt="" className='!relative !w-10 !h-10' />
                        Firebase
                    </p>

                    <p   className='p-1 px-2 bg-white rounded-full text-[#424242] font-bold text-lg lg:text-2xl flex items-center justify-center gap-2 lg:gap-4 lg:col-span-2 lg:mr-44'>
                        <Image fill src="/next-js.svg" alt="" className='!relative !w-10 !h-10' />
                        NextJS
                    </p>

                    <p   className='p-1 px-2 bg-white rounded-full text-[#424242] font-bold text-lg lg:text-2xl flex items-center justify-center gap-2 lg:gap-4 lg:col-span-2 lg:mx-20'>
                        <Image fill src="/node-js.webp" alt="" className='!relative !w-10 !h-10' />
                        NodeJS
                    </p>

                    <p   className='p-1 px-2 bg-white rounded-full text-[#424242] font-bold  text-2xl flex items-center justify-center gap-4 mx-6 col-span-2 lg:mx-16'>
                        <Image fill src="/Tailwind.webp" alt="" className='!relative !w-10 !h-10' />
                        TailwindCSS
                    </p>

                    <p  className='p-1 px-2 bg-white rounded-full text-[#424242] font-bold text-xl lg:text-2xl flex items-center justify-center gap-2 lg:gap-4 lg:col-span-2 lg:mx-24  '>
                        <Image fill src="/authjs.webp" alt="" className='!relative !w-10 !h-10' />
                        AuthJS
                    </p>

                    <p  className='p-1 px-2 bg-white rounded-full text-[#424242] font-bold text-2xl flex items-center justify-center gap-4 col-span-3 mx-4 ml-12 lg:mr-52'>
                        <Image fill src="/aos.webp" alt="" className='!relative !w-10 !h-10 !rounded-full' />
                        Animation On Scroll
                    </p>

                    <p   className='p-1 px-2 bg-white rounded-full text-[#424242] font-bold text-2xl flex items-center justify-center gap-4 col-span-3 mx-4 lg:ml-52'>
                        <Image fill src="/framer.webp" alt="" className='!relative !w-10 !h-10' />
                        Framer Motion
                    </p>

                    <p   className='p-1 px-2 bg-white rounded-full text-[#424242] font-bold lg:text-2xl flex items-center justify-center lg:gap-4'>
                        <Image fill src="/supabase.webp" alt="" className='!relative !w-10 !h-10' />
                        Supabase
                    </p>

                    <p   className='p-1 px-2 bg-white rounded-full text-[#424242] font-bold  lg:text-2xl flex items-center justify-center lg:gap-4'>
                        <Image fill src="/express-js.webp" alt="" className='!relative !w-10 !h-10 !rounded-full' />
                        ExpressJS
                    </p>

                    <p  className='p-1 px-2 bg-white rounded-full text-[#424242] font-bold lg:text-2xl flex items-center justify-center lg:gap-4'>
                        <Image fill src="/mongodb.webp" alt="" className='!relative !w-10 !h-10' />
                        MongoDB
                    </p>

                    <p  className='p-1 px-2 bg-white rounded-full text-[#424242] font-bold text-xl lg:text-2xl flex items-center justify-center lg:gap-4 col-span-2 lg:mx-10'>
                        <Image fill src="/nail.webp" alt="" className='!relative !w-10 !h-10' />
                        Styled Components
                    </p>

                    <p    className='p-1 px-2 bg-white rounded-full text-[#424242] font-bold lg:text-2xl flex items-center justify-center lg:gap-4'>
                        <Image fill src="/git.webp" alt="" className='!relative !w-10 !h-10' />
                        Git VCS
                    </p>
 
                    <p    className='p-1 px-2 bg-white rounded-full text-[#424242] font-bold text-2xl flex items-center justify-center gap-4 col-span-2'>
                        <Image fill src="/preline.webp" alt="" className='!relative !w-10 !h-10 !rounded-full' />
                        Preline UI
                    </p>

                    <p    className='p-1 px-2 bg-white rounded-full text-[#424242] font-bold text-2xl flex items-center justify-center gap-4 col-span-3 mx-20 '>
                        <Image fill src="/github.webp" alt="" className='!relative !w-10 !h-10' />
                        GitHub
                    </p>

                    <p    className='p-1 px-2 bg-white rounded-full text-[#424242] font-bold text-2xl flex items-center justify-center col-span-2 gap-4'>
                        <Image fill src="/postman.webp" alt="" className='!relative !w-10 !h-10' />
                        Postman
                    </p>

                </div>
                
                <button className='mx-auto mt-5 text-black font-bold border-yellow-500 border px-4 text-xl bg-yellow-800 flex gap-2 rounded-full p-2 pb-2 text-center'>
                <Image fill src="/download.webp" alt="" className='!relative !w-8 !h-8' />
                Resume</button>
            </div>

        </section>
    )
}
