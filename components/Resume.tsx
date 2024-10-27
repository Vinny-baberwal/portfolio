import Image from 'next/image'
import React from 'react'

export default function Resume() {
    return (
        <section className='max-w-screen-xl text-white mx-auto' >
            <h5 className='text-4xl lg:text-5xl font-bold text-center relative text-[#EFAE02] my-10'><span className='outline-border font-bold absolute text-[38px] lg:text-[50px]'  >Checkout <br />My Resume</span>Checkout <br />My Resume</h5>


            <div className='bg-[#191919] p-4 lg:p-10 m-4 rounded-2xl' >
                <Image fill src="/me.webp" alt="" className='!relative !w-48 !h-48 !p-2 !border-yellow-500 !border !rounded-full !mx-auto' />
                <h5 className='text-4xl font-bold text-center my-4 text-[#EFAE02] tracking-widest'>Vinit Saini</h5>
                <p className='text-center font-medium' >⚛Front End Developer / Back End Developer / Web Designer⚛</p>
                <div className='flex gap-4 text-center items-center justify-center pt-8'>
                <a href="/VINIT-SAINI.jpg" download="vinitsaini.jpg" type='image' >
                    <button className='text-yellow-500 border-yellow-500 border px-4 text-xl bg-yellow-500/20 flex gap-2 rounded-full p-2 pb-2'>
                        <Image fill src="/download.webp" alt="" className='!relative !w-8 !h-8' />
                        Resume</button></a>
                    {/* <button className='text-black font-medium border-yellow-500 border lg:px-6 text-xl bg-yellow-500 flex gap-2 rounded-full p-1 pb-2'>
                        Discuss Projects</button> */}
                </div>

            </div>
        </section>
    )
}
