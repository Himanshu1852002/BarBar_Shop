import { FaQuoteRight } from "react-icons/fa";

const TestimonialCard = ({ message, name, img }) => {
  return (
    <div className="relative border border-[#cf814d] text-white p-6 bg-black flex flex-col justify-between">
      <FaQuoteRight className="absolute text-[#cf814d] text-5xl bottom-4 right-4 opacity-20" />
      <p className="text-base leading-relaxed mb-6">{message}</p>
      <div className="flex items-center gap-3 mt-auto">
        <img src={img} alt={name} className="w-10 h-10 rounded-full object-cover" />
        <span className="font-semibold">{name}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
