import Image  from 'next/image'
import React from 'react'

export default function CannectWithMe() {
    return (
        <section className='max-w-screen-xl mx-auto text-white'>
            <h5 className='text-4xl lg:text-5xl font-bold text-center relative text-[#EFAE02] my-10'><span className='outline-border font-bold absolute text-[38px] lg:text-[50px]'  >Cannect With ME</span>Cannect With ME</h5>

            <div className='p-2 lg:p-10 lg:px-40 grid grid-cols-3 lg:grid-cols-3 gap-2 lg:gap-4 space-y-6 items-center justify-center '>
                <p className='lg:mr-6 p-2 lg:py-3 bg-white rounded-full text-[#0a66c2] mt-6 font-bold  lg:text-3xl flex lg:gap-4 items-center justify-center  '>
                    <Image fill src="/linkedin.webp" alt="" className='!relative !w-6 !h-6 lg:!w-12 lg:!h-12' />
                    Linkedin
                </p>

                <p
                    className='p-2 lg:py-3 bg-white rounded-full text-[#b23392] mt-6 font-bold  lg:text-3xl flex lg:gap-4 items-center justify-center'>
                    <Image fill src="/instagram.webp" alt="" className='!relative !w-6 !h-6 lg:!w-12 lg:!h-12' />
                    Instagram
                </p>

                <p className='p-2 lg:py-3 lg:ml-6 bg-white rounded-full text-[#305397] mt-6 font-bold  lg:text-3xl flex lg:gap-4 items-center justify-center'>
                    <Image fill src="/facebook.webp" alt="" className='!relative !w-6 !h-6 lg:!w-12 lg:!h-12' />
                    Facebook
                </p>

                <p className='p-2 py-3 lg:ml-16 lg:p-2 bg-white rounded-full text-[#41b4e6] mt-6 font-bold lg:text-3xl flex lg:gap-4 items-center justify-center'>
                    <Image fill src="/telegram.webp" alt="" className='!relative !w-6 !h-6 lg:!w-12 lg:!h-12' />
                    Telegram
                </p>
                <p className='p-2 py-3 lg:mx-3 lg:p-2 bg-white rounded-full text-[#0c0c0c] mt-6 font-bold lg:text-3xl flex lg:gap-4 items-center justify-center'>
                    <Image fill src="/twitter.webp" alt="" className='!relative !w-6 !h-6 lg:!w-12 lg:!h-12' />
                    Twitter
                </p>
                <p className='p-2 py-3 lg:mr-16 lg:p-2 bg-white rounded-full text-[#0084dd] mt-6 font-bold lg:text-3xl flex lg:gap-4 items-center justify-center'>
                    <Image fill src="/skype.webp" alt="" className='!relative !w-6 !h-6 lg:!w-12 lg:!h-12' />
                    Skype
                </p>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vinitsaini28092@gmail.com&su=Subject&body=Message%20body" target="_blank" className='p-2 py-3 lg:mx-52  lg:p-2 bg-white rounded-full text-[#33a854] mt-6 font-bold lg:text-3xl flex lg:gap-4 items-center justify-center col-span-3 '>
                     
                        <Image fill src="/gmail.webp" alt="" className='!relative !w-6 !h-6 lg:!w-12 lg:!h-12' />
                        vinitsaini28092@gmail.com
                    
                </a>
            </div>
          
                <Image fill src="/man2.png" alt="" className='!relative lg:!w-96 lg:!h-80 !mx-auto' />
          

        </section>
    )
}
