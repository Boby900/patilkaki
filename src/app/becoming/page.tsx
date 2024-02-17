import { FaAmazon } from "react-icons/fa";
import { FaBaseballBall } from "react-icons/fa";
import { FaBiking } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaCcApplePay } from "react-icons/fa";

const Becoming = () => {
  return (
    <div className="mx-auto">
      <div className="text-gray-500">
        <h1 className="text-center font-bold text-2xl p-4 sm:p-8">
          <span>But,</span>
          <br />
          Why should you become a Mindful Marketer?
        </h1>
      </div>
      <div className="flex flex-wrap justify-around p-2 m-2">

        <section className="w-full lg:w-1/3 xl:w-1/3 flex flex-col items-center my-4">
          <FaAmazon size={164} />
          <p className="text-gray-500 mt-2 text-center">Learn to look at the challenges through a different lens</p>
        </section>
        <section className="w-full lg:w-1/3 xl:w-1/3 flex flex-col items-center my-4">
          <FaBaseballBall size={164} />
          <p className="text-gray-500 mt-2 text-center">Develop a deep understanding of modern marketing</p>
        </section>
        <section className="w-full lg:w-1/3 xl:w-1/3 flex flex-col items-center my-4">
          <FaBiking size={164} />
          <p className="text-gray-500 mt-2 text-center">Understand time-tested principles</p>
        </section>

        <section className="w-full lg:w-1/2 xl:w-1/2 flex flex-col items-center my-4">
          <FaBookOpen size={164} />
          <p className="text-gray-500 mt-2 text-center">Become a strategic thinker without trend-surfing</p>
        </section>
        <section className="w-full lg:w-1/2 xl:w-1/2 flex flex-col items-center my-4">
          <FaCcApplePay size={164} />
          <p className="text-gray-500 mt-2 text-center">Incorporate a creative & innovative thought process</p>
        </section>

      </div>
    </div>
  );
};

export default Becoming;
