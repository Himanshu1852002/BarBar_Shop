import { GiScissors, GiRazor, GiSoap } from 'react-icons/gi';
import { FiPackage } from 'react-icons/fi';

const Prices = () => {
  const data = [
    {
      title: "Haircut",
      icon: <GiScissors size={22} />,
      services: [
        { name: "Regular Haircut", price: "$37" },
        { name: "Scissors Haircut", price: "$40" },
        { name: "Kids Haircut", price: "$30" },
      ],
    },
    {
      title: "Shave",
      icon: <GiRazor size={22} />,
      services: [
        { name: "Head Shave", price: "$27" },
        { name: "Royal Shave", price: "$33" },
        { name: "Royal Head Shave", price: "$33" },
        { name: "Beard Trim No Shave", price: "$35" },
        { name: "Beard Trim Shave", price: "$35" },
        { name: "Beard Shape Up", price: "$30" },
      ],
    },
    {
      title: "Facial",
      icon: <GiSoap size={22} />,
      services: [
        { name: "Deep Pore Cleansing", price: "$50" },
        { name: "Aromatherapy Facial", price: "$45" },
        { name: "Acne Problem Facial", price: "$60" },
        { name: "European Facial", price: "$50" },
        { name: "Glycolic Peel Facial", price: "$35" },
      ],
    },
    {
      title: "Package",
      icon: <FiPackage size={22} />,
      services: [
        { name: "Haircut + Shave", price: "$50" },
        { name: "Haircut + Beard Trim", price: "$50" },
        { name: "Haircut + Beard Trim Shave", price: "$55" },
        { name: "Haircut + Beard Shape Up", price: "$60" },
      ],
    },
  ];

  return (
    <section className="bg-[#0a0a0a] text-white py-20 px-4">
      <div className="text-center mb-14">
        <p className="text-[#cf814d] text-xs tracking-[0.4em] uppercase mb-3 font-medium">Transparent Pricing</p>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-widest uppercase">
          Services & Prices
        </h2>
        <div className="flex items-center justify-center mt-5">
          <div className="h-[1px] w-16 bg-[#cf814d]/40" />
          <div className="w-2 h-2 bg-[#cf814d] rotate-45 mx-2" />
          <div className="h-[1px] w-16 bg-[#cf814d]/40" />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {data.map((category, idx) => (
          <div
            key={idx}
            className="bg-[#111] border border-white/5 hover:border-[#cf814d]/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(207,129,77,0.1)] group"
          >
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/5">
              <span className="text-[#cf814d]">{category.icon}</span>
              <h3 className="text-lg font-bold tracking-widest uppercase text-white group-hover:text-[#cf814d] transition-colors duration-300">
                {category.title}
              </h3>
            </div>
            <ul className="space-y-3">
              {category.services.map((service, i) => (
                <li key={i} className="flex justify-between items-center gap-2">
                  <span className="text-gray-400 text-sm">{service.name}</span>
                  <span className="text-[#cf814d] font-bold text-sm whitespace-nowrap">{service.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Prices;
