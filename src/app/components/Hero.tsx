import Image from "next/image"
import Link from "next/link"
const Hero = () => {
  return (
    <div className="bg-slate-800 text-white h-screen md:h-screen">
        <h2 className=" p-2 font-bold ml-8 pt-8 pl-16 text-lg"><Link href={"/founder"}>Growth School</Link> </h2>
        <div className="flex md:flex-row justify-around md:pr-2 md:mt-16 p-4 md:p-2 flex-col">
            <div className="md:max-w-[50%]">
            <h1 className="text-lg ml-2 pl-2 font-bold">Discover a Consultant&#39;s <br /> Approach to  Problem <br /> Solving</h1>
            <p className="text-sm m-2 p-2">Learn the proven approach used by top strategy consultants to tackle <br /> complex business challenges effectively. Solve an MBB case study LIVE with Ashwin to understand the concepts hands-on.</p>
            <div className="flex justify-between mb-4 bg-slate-600">
                <div className="bg-slate-500 m-2 p-2">3rd March</div>
                <div className="bg-slate-500 m-2 p-2">1PM Onwards</div>
                <div className="bg-slate-500 m-2 p-2">2.5 Hours</div>
            </div>
            <div className="text-center p-2 bg-slate-600 mt-2 w-full object-contain bg-red-50"><a href="/timer" className="inline-block p-2   bg-yellow-400 w-full text-slate-800">Register Now at 499</a></div>
            <p className="text-center m-2 p-2 md:bg-slate-600 "><Link href={'/offer'} className="underline underline-offset-4 ...">click here to get team discount</Link></p>
            </div>
            <div className="profile bg-slate-600 ">
            <p className="p-2 m-2">Welcome to Growth School</p>
            <Link href={'/becoming'}> 
            <Image  src={'https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=240&t=st=1707725172~exp=1707725772~hmac=78b2a596ade79a604948d0f2799daf0bfbb3a50b0bcb96153f1b1f83b56acb4a'} alt="dog" width={200} height={200}/>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero