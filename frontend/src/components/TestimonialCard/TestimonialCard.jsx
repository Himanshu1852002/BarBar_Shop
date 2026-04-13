import { FaQuoteLeft, FaStar } from "react-icons/fa";

const TestimonialCard = ({ message, name, img, role = "Valued Client" }) => {
  return (
    <div className="group bg-[#111] border border-white/5 hover:border-[#cf814d]/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(207,129,77,0.1)] flex flex-col h-full">
      {/* Quote icon + Stars */}
      <div className="flex items-center justify-between mb-4">
        <div className="w-9 h-9 rounded-xl bg-[#cf814d]/10 border border-[#cf814d]/20 flex items-center justify-center">
          <FaQuoteLeft size={14} className="text-[#cf814d]" />
        </div>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} size={12} className="text-[#cf814d]" />
          ))}
        </div>
      </div>

      {/* Message */}
      <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-5">"{message}"</p>

      {/* Divider */}
      <div className="h-[1px] bg-white/5 mb-4" />

      {/* Author */}
      <div className="flex items-center gap-3">
        <img src={img} alt={name} className="w-10 h-10 rounded-full object-cover border-2 border-[#cf814d]/40" />
        <div>
          <p className="text-white font-semibold text-sm">{name}</p>
          <p className="text-[#cf814d] text-xs">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
