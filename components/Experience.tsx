"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles

function Experience() {
    useEffect(() => {
        AOS.init();
      }, []);

    return (
        <section className='max-w-screen-xl mx-auto text-white lg:px-20  space-y-8  '   >
            <h1 className='text-5xl font-bold text-center relative text-[#EFAE02] mb-16'><span className='outline-border font-bold absolute text-6xl'  >Experince</span>Experience</h1>

            <div data-aos="flip-left"  className=' py-4 p-2 lg:p-4 bg-white/70  rounded-3xl bg-gradient-to-r from-white via-yellow-200/40  to-white '>
                <div className='flex justify-between lg:gap-20'>
                    <div className='bg-black border border-[#EFAE02] max-sm:text-sm lg:text-xl  text-[#EFAE02] font-bold flex items-center  justify-center lg:gap-3 rounded-full pr-4 '>
                        <Image fill src="/arinfo.webp" alt="" className=' !relative !w-10 !h-10 lg:!w-20 lg:!h-20 bg-black rounded-full' />
                        <div className='ml-2 py-1' >  AR Info Solution
                            <span className=' -ml-1 text-white max-sm:text-xs text-sm font-thin flex  items-center  lg:gap-3 rounded-full '>
                                <Image fill src="/placeholder.webp" alt="" className=' !relative !w-4 !h-4 bg-zinc-200 rounded-full' />
                                Jaipur, Rajasthan, India
                            </span>
                        </div>

                    </div>
                    <span className='bg-[#FCEFCC] text-black max-sm:text-sm font-bold flex lg:my-3 items-center gap-1 lg:gap-3 rounded-full p-2 lg:px-4'>
                        <Image fill src="/calendar.webp" alt="" className=' !relative !w-6 !h-6 ' />
                        June 2024- Present
                    </span>
                </div>
                <h2 className='text-2xl text-black font-bold p-2 flex items-center gap-4 mt-3'>
                    <Image fill src="/man.webp" alt="" className=' !relative !w-14 !h-14' />
                    Full Stack Development
                </h2>
                <div className='text-black p-3 space-y-3  ' >

                    <p className='text-black'>➤ Developed and maintained web applications using React, Next.js, and TypeScript, ensuring performance and responsiveness across devices.</p>

                    <p>
                        ➤   Led the development of a full-stack web application using Next.js with server-side rendering (SSR) and Node.js for backend API integration.
                    </p>
                    <p>
                        ➤   Built dynamic, reusable components and pages, adhering to modern JavaScript (ES6+) practices and best coding standards.
                    </p>
                    <p>
                        ➤  Integrated Node.js backend services, handling REST API calls and connecting with MongoDB for efficient data management and retrieval.
                    </p>

                    <p>
                        ➤  Explored and learned Lit, gaining experience in developing lightweight, fast web components and integrating them within larger projects.
                    </p>
                </div>

            </div>
            {/* ...... */}

            <div data-aos="flip-right" className=' py-4 p-2 lg:p-4 bg-white rounded-3xl '>
                <div className='flex justify-between lg:gap-20'>
                    <div className='bg-black border border-[#EFAE02] max-sm:text-sm lg:text-xl  text-[#EFAE02] font-bold flex items-center  justify-center lg:gap-3 rounded-full max-sm:!w-52 pr-2  lg:pr-4 '>
                        <Image fill src="/freelance-work.webp" alt="" className=' !relative !w-10 !h-10 lg:!w-20 lg:!h-20 bg-white rounded-full' />
                        <div className='lg:ml-2 py-1 pl-1' >Freelancer Developer
                        <span className=' -ml-1 text-white max-sm:text-xs text-sm font-thin flex  items-center  lg:gap-3 rounded-full '>
                                <Image fill src="/placeholder.webp" alt="" className=' !relative !w-4 !h-4 bg-zinc-200 rounded-full' />
                                Jaipur, Rajasthan, India
                            </span>
                        </div>

                    </div>
                    <span className='bg-[#FCEFCC] text-black font-bold max-sm:text-xs flex lg:my-3 items-center lg:gap-3 rounded-full p-2 lg:px-4'>
                        <Image fill src="/calendar.webp" alt="" className=' !relative !w-4 !h-4 lg:!w-6 lg:!h-6 ' />
                        June 2023-May 2024
                    </span>
                </div>
                <h2 className='text-2xl text-black font-bold p-2 flex items-center gap-4 mt-3'>
                    <Image fill src="/man.webp" alt="" className=' !relative !w-14 !h-14' />
                    Web Development
                </h2>
                <div className='text-black p-3 space-y-3  ' >
                    <p> ➤ Built and deployed responsive and dynamic web applications using ReactJS, HTML, CSS, and JavaScript, ensuring cross-browser compatibility and optimal performance.</p>
                    <p> ➤  Utilized Redux for efficient state management in complex React applications, improving maintainability and scalability. </p>
                    <p> ➤ Designed modern, responsive UIs with Bootstrap and Tailwind CSS, providing seamless user experiences across various devices.</p>
                    <p> ➤ Developed custom websites and web apps using jQuery, improving user interactivity and front-end performance.</p>
                    <p> ➤ Integrated MongoDB as the database for back-end operations, optimizing data queries and ensuring smooth data handling for applications.</p>
                    <p> ➤ Built RESTful APIs with Express.js and Node.js, providing robust server-side functionality for web applications.</p>
                    <p> ➤ Ensured seamless communication between front-end and back-end using Express.js for smooth, scalable web application architecture.</p>
                    <p> ➤ Employed JavaScript (ES6+) techniques for interactive, feature-rich applications, enhancing user engagement and interactivity.</p>
                    <p> ➤ Handled full-stack development, from creating front-end components to managing server-side logic, offering end-to-end project solutions.</p>
                    <p> ➤ Continuously optimized web applications for performance, focusing on fast load times, security, and best development practices.</p>
                </div>

            </div>

        </section>
    )
}

export default Experience
