import { FaAmazon } from "react-icons/fa";
import { FaBaseballBall } from "react-icons/fa";
import { FaBiking } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaCcApplePay } from "react-icons/fa";
const Becoming = () => {
  return (
    <div>
      <div className="text-gray-500">
        <h1 className="text-center font-bold text-2xl p-1 m-1">
          <span>But,</span><br /> Why should you become a Mindful Marketer?
        </h1>
      </div>
      <div className="flex justify-around p-2 m-2">
        <section>
          <FaAmazon size={164} />
          <p className="text-gray-500" >Learn to look at the challenges <br /> through a different lens</p>
        </section>
        <section>
          <FaBaseballBall  size={164} />
          <p className="text-gray-500">Develop a deep understanding <br /> of modern marketing</p>
        </section>
        <section>
          <FaBiking  size={164} />
          <p className="text-gray-500">Understand time-tested <br /> principles</p>
        </section>
      </div>
      <div className="flex justify-around p-2 m-2">
        <section>
          <FaBookOpen size={164} />
          <p className="text-gray-500">Become a strategic thinker <br />without trend-surfing</p>
        </section>
        <section>
          <FaCcApplePay size={164} />
          <p className="text-gray-500">Incorporate a creative & <br /> innovative thought process</p>
        </section>
      </div>
    </div>
  );
};

export default Becoming;
