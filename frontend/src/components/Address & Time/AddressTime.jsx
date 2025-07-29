import wallImg from '../../assets/wall2.jpg';

const AddressTime = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center py-10 justify-center overflow-hidden">
            <div
                className="absolute top-0 left-0 w-full h-full -z-10 bg-cover bg-center"
                style={{ backgroundImage: `url(${wallImg})` }}
            >
                <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
            </div>
            <div className="flex flex-col md:flex-row justify-center w-full px-4 sm:px-6 md:px-15 lg:px-35 gap-8 lg:gap-16">
                <div className="relative border border-[#cf814d] w-full md:w-1/2 p-6 sm:p-8">
                    <div className="border border-[#cf814d] w-full h-full absolute top-2 left-2 -z-10" />
                    <div className="text-center mb-8">
                        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest uppercase">
                            WE'RE OPEN
                        </h2>
                        <div className="flex items-center justify-center mt-4">
                            <div className="w-2 h-2 bg-[#cf814d] rotate-45" />
                            <div className="h-[2px] w-28 sm:w-36 md:w-44 bg-[#cf814d]" />
                            <div className="w-2 h-2 bg-[#cf814d] rotate-45" />
                        </div>
                    </div>
                    {[
                        { day: "Mon-Tue", time: "7:30AM - 6:30PM" },
                        { day: "Friday", time: "8:30AM - 8:30PM" },
                        { day: "Sat-Sun", time: "9:30AM - 5:30PM" },
                    ].map(({ day, time }) => (
                        <div key={day} className="flex flex-col justify-center items-center border-b py-4 border-[#cf814d]">
                            <h4 className="text-white text-xl tracking-widest">{day}</h4>
                            <h3 className="text-[#cf814d] text-2xl font-semibold tracking-widest">{time}</h3>
                        </div>
                    ))}
                </div>
                <div className="relative border border-[#cf814d] w-full md:w-1/2 p-6 sm:p-8">
                    <div className="border border-[#cf814d] w-full h-full absolute top-2 left-2 -z-10" />
                    <div className="text-center mb-8">
                        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest uppercase">
                            LOCATION
                        </h2>
                        <div className="flex items-center justify-center mt-4">
                            <div className="w-2 h-2 bg-[#cf814d] rotate-45" />
                            <div className="h-[2px] w-28 sm:w-36 md:w-44 bg-[#cf814d]" />
                            <div className="w-2 h-2 bg-[#cf814d] rotate-45" />
                        </div>
                    </div>
                    {[
                        { label: "Address", value: "100 MAINSTREET CENTER, MY" },
                        { label: "Phone", value: "+91 22 2222 6666 6" },
                        { label: "Email", value: "CONTACT@BLUXCUT.COM" },
                    ].map(({ label, value }) => (
                        <div key={label} className="flex flex-col justify-center items-center border-b py-4 border-[#cf814d]">
                            <h4 className="text-white text-base lg:text-xl tracking-widest">{label}</h4>
                            <h3 className="text-[#cf814d] text-xl text-center lg:text-2xl font-semibold tracking-widest">{value}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AddressTime;
