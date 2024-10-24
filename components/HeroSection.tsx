import Image from 'next/image'
import React from 'react'

function HeroSection() {
  return (
    <div className="-mt-[70px]  bg-[url(/homebg.jpg)] bg-center bg-cover lg:pt-40 lg:pb-16 relative ">
      <div className="absolute inset-0 bg-black/75  " />

      <section className="relative  bg-contain   bg-right bg-no-repeat  text-white">
        <div className="relative mx-auto max-w-screen-xl pt-20 lg:py-32 sm:px-6 lg:flex lg:h-screen lg:items-center justify-center lg:px-8">

          <div className=''>
            <h1 className='text-5xl font-bold text-center   '> <p className='inline' >
              <Image fill src="/bijli.webp" alt="" className='!relative !w-6 !h-6 !ml-6 !mt-6 vibration ' />
              <Image fill src="/hand.webp" alt="" className='!relative !w-14 !h-14 !inline zooming ' />
            </p> Hello I&apos;m <span className='text-yellow-500' > Vinit Saini </span></h1>
            <h2 className='text-3xl text-center font-bold py-3'>  Full Stack <span className='text-yellow-500' >Developer</span> | Web Designer</h2>
            <h3 className='text-2xl text-center' >With <span className=' border px-3 mx-2 pb-1  font-bold text-yellow-500 bg-[#242424]/65 rounded-full' >1.8+years</span>Experience</h3>
            <div className='flex gap-4 text-center items-center justify-center pt-8'>
              <button className='text-yellow-500 border-yellow-500 border px-4 text-xl bg-yellow-500/20 flex gap-2 rounded-full p-2 pb-2'>
                <Image fill src="/download.webp" alt="" className='!relative !w-6 !h-6' />
                Resume</button>
              <button className='text-black font-medium border-yellow-500 border px-6 text-xl bg-yellow-500 flex gap-2 rounded-full p-2 pb-2'>
                Hire Me</button>
            </div>
            {/* ----------- */}
            <Image fill src="/phone.webp" alt="" className='!relative !block lg:!hidden !py-10' />

            <div className='relative hidden lg:block'>
              <span className='absolute rotate-12 ' >
                <button className='text-black font-medium border-yellow-500 border px-4 text-xl bg-white flex gap-2 rounded-full p-2 pb-2'>
                  <Image fill src="/figma.webp" alt="" className='!relative !w-8 !h-8' />
                  Figma
                </button>
              </span>
              <span className='absolute  top-8 left-[70%] -rotate-12 ' >
                <button className='text-black font-medium border-yellow-500 border px-4 text-xl bg-white flex gap-2 rounded-full p-2 pb-2'>
                  <Image fill src="/next-js.svg" alt="" className='!relative !w-8 !h-8' />
                  Next js
                </button>
              </span>
              <span className='absolute bottom-16 left-[-60px] ' >
                <button className='text-black font-medium border-yellow-500 border px-4 text-xl bg-white flex gap-2 rounded-full p-2 pb-2'>
                  <Image fill src="/react.svg" alt="" className='!relative !w-8 !h-8' />
                  React js
                </button>
              </span>
              <span className='absolute left-[-70px]  top-[120px]' >
                <button className='text-black font-medium border-yellow-500 border px-4 text-xl bg-white flex gap-2 rounded-full p-2 pb-2'>
                  <Image fill src="/node-js.webp" alt="" className='!relative !w-8 !h-8' />
                  Node js
                </button>
              </span>
              <span className='absolute right-[-90px] top-36 ' >
                <button className='text-black font-medium border-yellow-500 border px-4 text-xl bg-white flex gap-2 rounded-full p-2 pb-2'>
                  <Image fill src="/tailwind.webp" alt="" className='!relative !w-8 !h-8' />
                  Tailwind css
                </button>
              </span>
              <span className='absolute right-[-80px] bottom-[45px] ' >
                <button className='text-black font-medium border-yellow-500 border px-4 text-xl bg-white flex gap-2 rounded-full p-2 pb-2'>
                  <Image fill src="/express-js.webp" alt="" className='!relative !w-8 !h-8' />
                  Express js
                </button>
              </span>
              <span className='absolute  left-[36%] top-[-70px] ' >
                <button className='text-black font-medium border-yellow-500 border px-4 text-xl bg-white flex gap-2 rounded-full p-2 pb-2'>
                  <Image fill src="/javascript.webp" alt="" className='!relative !w-8 !h-8' />
                  Javascript
                </button>
              </span>

              <Image fill src="/1.webp" alt="" className='!relative !mt-48' />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection
