import Image from 'next/image' 

function ContactMe() {
    return (
        <section className='max-w-screen-xl mx-auto px-2 lg:p-10' >

            <div className='bg-white p-1 py-4 lg:p-4  rounded-2xl'>
                <h5 className='text-4xl lg:text-5xl font-bold text-center relative text-black my-5 lg:my-10'><span className='outline-border font-bold absolute text-[38px] lg:text-[50px] tracking-wider -ml-6'  >Contact Me</span>Contact Me</h5>
                <form action="">
                    <div className='grid grid-cols-2 gap-4  lg:gap-3 lg:p-3 '>
                        <input type="text" placeholder='🧔🏻 Full Name *' className=" p-1 border w-full lg:p-3 text-sm lg:text-lg rounded-3xl lg:pl-6 bg-gray-100  focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                        <input type="text" placeholder='✉  Email *' className=" p-1 border w-full lg:p-3 text-sm lg:text-lg rounded-3xl lg:pl-6 bg-gray-100  focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                        <input type="text" placeholder='📱 Mobile No. *' className=" p-1 border w-full lg:p-3 text-sm lg:text-lg rounded-3xl lg:pl-6 bg-gray-100  focus:outline-none focus:ring-2 focus:ring-yellow-400" />

                        <input type="text" placeholder='ℹ️ Subject *  ' className=" p-1 border w-full lg:p-3 text-sm lg:text-lg rounded-3xl lg:pl-6 bg-gray-100  focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                        <textarea name="massage" id="" placeholder='💭 Massage *' className=" p-1 border w-full lg:p-3 text-sm lg:text-lg rounded-3xl lg:pl-6 bg-gray-100  focus:outline-none focus:ring-2 focus:ring-yellow-400 col-span-2" ></textarea>
               
               
               
                    </div>
                        <button className='bg-yellow-400 px-6  py-2 text-xl font-bold rounded-xl ml-4 mt-2'>Send ➢</button>
                </form>
            </div>
            <Image src={"/man3.png"} alt='' fill className='!w-36 !h-32 lg:!w-56 lg:!h-52 !relative mt-[-70px] lg:mt-[-120px] mr-4 float-end' />

        </section>
    )
}

export default ContactMe
