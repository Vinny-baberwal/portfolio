import Image from 'next/image'
import React from 'react';

function AboutMe() {
  
  return (
    <section className='bg-black' >

      <div className='max-w-screen-xl mx-auto py-9'>

        <h1 className='text-2xl lg:text-5xl font-bold text-center relative text-[#EFAE02]'><span className='outline-border font-bold absolute text-3xl lg:text-6xl'  >ABOUT ME</span>ABOUT ME</h1>

        <div  className='p-2 lg:p-5 lg:flex text-white justify-between py-16' >
          <div className=''>
            <div className='p-4 flex items-center '>
              <Image fill src="/me.webp" alt="" className='!relative !w-20 !h-20 !rounded-full !border !p-1 !border-yellow-400' />
              <p className='text-2xl  lg:text-4xl lg:basis-0 basis-1/2 font-bold text-center relative text-[#EFAE02]'><span className='outline-border font-bold absolute text-3xl lg:text-5xl'  >I LOVE</span>I LOVE</p>

            </div>


            <div className='p-1 lg:p-4 grid  grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-4'>
              <p className='p-2 bg-white rounded-full text-blue-800 font-bold lg:text-2xl flex gap-4 lg:col-span-2 lg:mx-14 tracking-widest pl-4 '>
                <Image fill src="/headphones.webp" alt="" className='!relative !w-8 h!-8' />
                Listeing to Music
              </p>

              <p className='p-1 px-2 bg-white rounded-full text-[#424242] font-bold lg:text-2xl flex gap-4 items-center'>
                <Image fill src="/trave-lift.webp" alt="" className='!relative !w-10 !h-10' />
                Travelling
              </p>

              <p className='p-2 items-center bg-white rounded-full text-[#6EC17D] font-bold lg:text-2xl flex gap-4 mr-4 '>
                <Image fill src="/mountains.webp" alt="" className='!relative !w-12 !h-10' />
                Mountains
              </p>

              <p className='p-2 pl-4 bg-white rounded-full text-[#06A048] font-bold lg:text-2xl flex items-center gap-4'>
                <Image fill src="/money.webp" alt="" className='!relative !w-10 !h-10' />
                Money
              </p>




            </div>

          </div>

          {/* - */}

          <div className='flex gap-3 lg:gap-8 p-1 lg:p-3 '>
            <p className='text-xl lg:text-3xl bg-[#121212] p-8 rounded-[50px] text-center font-bold  !w-52 !'>
              <span className='text-yellow-400 text-3xl lg:text-5xl gradient-text' > 1.8+</span> <br />
              Years Experience
            </p>

            <p className='text-xl lg:text-3xl bg-[#121212] p-6 rounded-[50px] text-center font-bold  !w-52 !'>
              <span className='text-yellow-400 text-3xl lg:text-5xl gradient-text' > 13+</span> <br />
              Projects Compeleted
            </p>

          </div>
        </div>
        {/* -- */}

        <div  className='p-2 lg:p-4'>
          <p className='p-4 lg:p-10 bg-[#191919] text-zinc-200 rounded-3xl text-justify lg:leading-8 lg:text-lg '>
            I&apos; a highly driven <b className='text-[#EFAE02]/80' > Full Stack Developer</b> with over <b>1.8 years</b> of experience in both frontend and backend technologies, dedicated to creating seamless and efficient web solutions. On the frontend, I excel in building responsive, high-performing applications using <b>React.js,<b className='text-[#EFAE02]/80' >Next.js</b>, and Redux.</b> I have a strong eye for design and user experience, leveraging <b className='text-[#EFAE02]/80' >Tailwind CSS</b> and <b>Bootstrap</b> to craft visually appealing, intuitive, and responsive interfaces that adapt seamlessly to all devices.

            On the backend, I have extensive experience with <b className='text-[#EFAE02]/80' >Node.js</b> and Express.js, where I develop secure and scalable RESTful APIs, ensuring smooth data handling and integration. I am proficient in managing authentication and real-time data using <b>Auth.js,<b className='text-[#EFAE02]/80' >Supabase</b>, and Firebase</b>, creating reliable, user-friendly systems. My expertise in core technologies like JavaScript, HTML5, and CSS allows me to bridge the gap between design and functionality, bringing innovative ideas to life while ensuring robust performance.

            I&apos;m passionate about staying updated with the latest trends and technologies in the web development ecosystem, continuously improving my skill set to deliver <b className='text-[#EFAE02]/80' >cutting-edge</b> solutions. Whether it&apos;s building from scratch or enhancing existing applications, I strive to create projects that are not only functional but also engaging and future-ready.
          </p>
        </div>
        <a href="https://wa.me/+918824531010">
        <button className=' mt-3 text-yellow-500 mx-auto border-yellow-500 border px-4 text-xl bg-yellow-500/20 flex gap-2 rounded-full p-2 pb-2'>
          <Image fill src="/download.webp" alt="" className='!relative !w-8 !h-8' />
          Contact Me</button></a>

      </div>
    </section>
  )
}

export default AboutMe
