import Image from "next/image"
import Link from "next/link"
const Hero = () => {
  return (
    <div className="flex flex-col  bg-slate-800 text-white h-screen md:h-screen pr-3 overflow-auto ">
        <h2 className=" p-2 font-bold text-center ml-0 pt-8 pl-16 text-3xl pr-10"><Link href={"/founder"}>Growth School</Link> </h2>
        <div className="flex md:flex-row justify-around md:pr-2 md:mt-16 p-4 md:p-2 flex-col">
            <div className="md:max-w-[50%]">
            <h1 className="text-xl ml-2 pl-2 font-bold">Discover a Consultant&#39;s <br /> Approach to  Problem <br /> Solving</h1>
            <p className="text-lg m-2 p-2 font-serif">Learn the proven approach used by top strategy consultants to tackle <br /> complex business challenges effectively. Solve an MBB case study LIVE with Ashwin to understand the concepts hands-on.</p>
            
            <div className="flex justify-between mb-4 bg-slate-500 ml-3.5 ">
                <div className="bg-slate-800 m-2 p-2 font-bold rounded-sm">3rd March</div>
                <div className="bg-slate-800 m-2 p-2 font-bold rounded-sm">1PM Onwards</div>
                <div className="bg-slate-800 m-2 p-2 font-bold rounded-sm">2.5 Hours</div>
            </div>

            <div className="text-center p-2  bg-slate-700 mt-2 w-full object-contain bg-red-50 ml-3.5"><a href="/timer" className="inline-block p-2   bg-green-500 w-full text-slate-800 font-bold">Register Now at 499</a></div>
            <div className=" inline-block p-2 text-center text-base m-3 p-2 pl-0  md:bg-slate-500 ml-3.5 w-full font-bold">
              <Link className="" href={'/offer'}>Click here to get team discount%</Link>
                </div>
            </div>

            <div className="profile p-2 m-3 mt-0 translate-y-16 bg-slate-600 mb-20">
              <p className="p-1 m-1 font-serif">Welcome to Growth School</p>
              <Link href={'/becoming'}> 
              <Image className="pl-4 pr-0 rounded-sm h-60 "  src={'https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=240&t=st=1707725172~exp=1707725772~hmac=78b2a596ade79a604948d0f2799daf0bfbb3a50b0bcb96153f1b1f83b56acb4a'} alt="dog" width={200} height={200}/>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero