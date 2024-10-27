import Image from "next/image";

const Header = async () => {
    
    return (
        <>
            <header className="sticky top-4  inset-x-0  flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm max-sm:bg-[#121212] ">
                <nav
                    className="relative max-w-[85rem] w-full bg-zinc-800 border border-gray-700 rounded-[25px] mx-2  px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto "
                   
                >
                    <div className="flex justify-between items-center w-full md:flex-nowrap md:space-x-3 text-white text-3xl" >
                 <Image src={"/logo.webp"} alt=""  fill className="!relative !w-52 zooming2" />
                    </div>
              
                </nav>
            </header>
        </>
    );
}

export default Header;