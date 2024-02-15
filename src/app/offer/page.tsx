import { Button } from "@/components/ui/button";

const Offer = () => {
  return (
    <div className="flex md:items-center md:flex-row flex-col   justify-between m-2 p-2 h-screen bg-blue-800">
      <div className="bg-slate-800 max-h-[50%] text-white p-8 m-2"><h2>Crash course Launch Offer (Save INR 1799)</h2>
      <ul className="list-disc list-inside p-2 ">
        <li>Learn the toolkit of the professionals in just 3 hours</li>
        <li>Enjoy the discounted price of 299</li>
        <li>The launch offer expires soon, grab your seat NOW!</li>
      </ul>
      </div>
      <div className="max-h-[80%] min-w-[30%] pt-8 bg-slate-800 text-white p-2 m-2"><h2>Price of the Program</h2>
      499 <span className="line-through">1999</span>
      <div className="p-2 m-2">
      <Button>Register Now</Button>

      </div>
      </div>
    </div>
  );
};

export default Offer;
