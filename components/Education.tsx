import Image from 'next/image'
import React from 'react'

function Education() {
    return (
        <section className='max- !relative !w-sc!reen-xl mx-auto  text-white py-6 lg:py-10' >

            <h1 className='text-5xl font-bold text-center relative text-[#EFAE02] my-4'><span className='outline-border font-bold absolute text-6xl'  >Education</span>Education</h1>
            <div className='lg:flex gap-8 max-lg:space-y-6 p-2 lg:p-20'>

                <div   className='p-4 bg-white/70 basis-1/2 rounded-3xl bg-gradient-to-r from-white via-yellow-200/50  to-white '>
                    <div className='flex justify-between lg:gap-20'>
                        <span className='bg-black border border-[#EFAE02] text-[#EFAE02] font-bold flex p-2 items-center gap-3 rounded-full px-4'>
                            <Image fill src="/calendar.webp" alt="" className=' !relative !w-6 !h-6 !bg-black' />
                            2022-2025
                        </span>
                        <span className='bg-white text-black font-bold flex p-2 items-center gap-3 rounded-full px-4'>
                            <Image fill src="/graduation-hat.webp" alt="" className=' !relative !w-6 !h-6 ' />
                            Graduation
                        </span>
                    </div>
                    <p className='bg-white text-black font-bold p-2 mt-4 rounded-full inline-block'>Bachelor&apos;s Degree  </p>
                    <p className='bg-white text-black font-bold p-2 px-3 mt-4 rounded-full inline-block ml-3'>BCA  </p>
                    <h2 className='text-xl text-black font-bold p-2'>Bachlor of Computer Applications</h2>
                    <p className=' text-black  flex p-2 items-center gap-3 rounded-full px-4'>
                        <Image fill src="/fort.webp" alt="" className=' !relative !w-10 !h-10 bg-white !p-1 !rounded-full' />
                        Suresh Gyan Vihar Unversity
                    </p>
                    <p className=' text-black  flex p-2 items-center gap-3 rounded-full px-4'>
                        <Image fill src="/placeholder.webp" alt="" className=' !relative !w-10 !h-10 bg-white p-1 rounded-full' />
                        Jaipur, Rajasthan, India
                    </p>
                </div>
                <div  className='p-4 bg-white/70 basis-1/2 rounded-3xl bg-gradient-to-r from-white via-yellow-200/50  to-white '>
                    <div className='flex justify-between lg:gap-20'>
                        <span className='bg-black border border-[#EFAE02] text-[#EFAE02] font-bold flex p-2 items-center gap-3 rounded-full px-4'>
                            <Image fill src="/calendar.webp" alt="" className=' !relative !w-6 !h-6 bg-black' />
                            2023
                        </span>
                        <span className='bg-white text-black font-bold flex p-2 items-center gap-3 rounded-full px-4'>
                            <Image fill src="/graduation-hat.webp" alt="" className=' !relative !w-6 !h-6 ' />
                            Course
                        </span>
                    </div>
                    <p className='bg-white text-black font-bold p-2 mt-4 rounded-full inline-block'>Certification Course</p>
                    {/* <p className='bg-white text-black font-bold p-2 px-3 mt-4 rounded-full inline-block ml-3'>BCA  </p> */}
                    <h2 className='text-xl text-black font-bold p-2'>MERN Stack Development</h2>
                    <p className=' text-black  flex p-2 items-center gap-3 rounded-full px-4'>
                        <Image fill src="/fort.webp" alt="" className=' !relative !w-10 !h-10 !bg-white !p-1 !rounded-full' />
                        WS Cube Tech
                    </p>
                    <p className=' text-black  flex p-2 items-center gap-3 rounded-full px-4'>
                        <Image fill src="/placeholder.webp" alt="" className=' !relative !w-10 !h-10 !bg-white !p-1 !rounded-full' />
                        Jaipur, Rajasthan, India
                    </p>
                </div>
            </div>

        </section>

    )
}

export default Education
