const Prices = () => {
    const data = [
        {
            title: "HAIRCUT",
            services: [
                { name: "Regular Haircut", price: "$37" },
                { name: "Scissors Haircut", price: "$40" },
                { name: "Kids Haircut", price: "$30" },
            ],
        },
        {
            title: "SHAVE",
            services: [
                { name: "Head Shave", price: "$27" },
                { name: "Royal Shave", price: "$33" },
                { name: "Royal Head Shave", price: "$33" },
                { name: "Beard Trim No Shave", price: "$35" },
                { name: "Beard Trim Shave", price: "$35" },
                { name: "Beard Shave Up", price: "$30" },
            ],
        },
        {
            title: "FACIAL",
            services: [
                { name: "Deep Pore Cleansing", price: "$50" },
                { name: "Aromatherapy Facial", price: "$45" },
                { name: "Acne Problem Facial", price: "$60" },
                { name: "European Facial", price: "$50" },
                { name: "Glycolic Peel Facial", price: "$35" },
            ],
        },
        {
            title: "PACKAGE",
            services: [
                { name: "Haircut + Shave", price: "$50" },
                { name: "Haircut + Beard Trim", price: "$50" },
                { name: "Haircut + Beard Trim Shave", price: "$55" },
                { name: "Haircut + Beard Shape Up", price: "$60" },
            ],
        },
    ];

    return (
        <section className="bg-black text-white py-20 px-4">
             <div className="text-center text-white z-10 mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-center tracking-widest">
                OUR SERVICES & PRICES
            </h1>
          <div className="flex items-center justify-center mt-4 ">
            <div className="w-2 md:w-3 h-2 md:h-3 bg-[#cf814d] rotate-45" />
            <div className="h-[2px] w-20 sm:w-36 md:w-44 bg-[#cf814d]" />
            <div className="w-2 md:w-3 h-2 md:h-3 bg-[#cf814d] rotate-45" />
          </div>
        </div>
          
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
                {data.map((category, idx) => (
                    <div
                        key={idx}
                        className="border border-[#cf814d] rounded-xl p-6 shadow-lg hover:shadow-[#cf814d]/40 transition duration-300"
                    >
                        <h2 className="text-xl md:text-2xl font-bold mb-4 tracking-widest border-b border-gray-600 pb-2">
                            {category.title}
                        </h2>
                        <ul className="space-y-3">
                            {category.services.map((service, i) => (
                                <li
                                    key={i}
                                    className="flex justify-between text-base md:text-lg font-light tracking-widest"
                                >
                                    <span>{service.name}</span>
                                    <span className="text-[#cf814d] font-semibold">{service.price}</span>
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
