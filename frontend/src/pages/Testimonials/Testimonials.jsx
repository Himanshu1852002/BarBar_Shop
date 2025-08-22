import chair_img from '../../assets/chair.jpg'
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";
import testi_1 from '../../assets/testi_1.jpg';
import testi_2 from '../../assets/testi_2.jpg';
import testi_3 from '../../assets/testi_3.jpg';

const testimonials = [
    {
        name: "Elliot Richbourg",
        message:
            "I had an amazing experience at the barbershop! The atmosphere was friendly and inviting, and the staff was very professional...",
        img: testi_1,
    },
    {
        name: "Stefan Whilby",
        message:
            "I've been going to this barbershop for years, and I wouldn't trust anyone else with my hair. Highly recommended!",
        img: testi_2,
    },
    {
        name: "Jerri Poydras",
        message:
            "I'm so glad I found this barbershop! As someone with curly hair, finding a barber who knows how to handle it properly is not easy.",
        img: testi_3,
    },
    {
        name: "Sammie Maedche",
        message:
            "I brought my son to this barbershop for his first haircut, and they made it such a memorable experience for him!",
        img: testi_1,
    },
    {
        name: "Anonymous",
        message:
            "This barbershop has the best customer service I've ever experienced. The barbers are incredibly talented and attentive.",
        img: testi_2,
    },
    {
        name: "Returning Client",
        message:
            "I've been going to this barbershop for a long time, and I can confidently say it's the best in town. Never had to wait too long!",
        img: testi_3,
    },
];

const Testimonials = () => {
    return (
        <>
            <section className="relative w-full min-h-[70vh] flex flex-col justify-center items-center overflow-hidden pt-28 md:pt-32">
                <div
                    className="absolute top-0 left-0 w-full h-full -z-10 bg-cover bg-center"
                    style={{ backgroundImage: `url(${chair_img})` }}
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
                </div>

                <div className="text-center text-white z-10 px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-widest uppercase">
                        testimonials
                    </h2>
                    <div className="flex items-center justify-center mt-4">
                        <div className="w-2 md:w-3 h-2 md:h-3 bg-[#cf814d] rotate-45" />
                        <div className="h-[2px] w-20 sm:w-36 md:w-44 bg-[#cf814d]" />
                        <div className="w-2 md:w-3 h-2 md:h-3 bg-[#cf814d] rotate-45" />
                    </div>
                </div>
            </section>
            <section className="bg-black px-4 py-20">
                <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="transform transition duration-300 hover:-translate-y-2"
                        >
                            <TestimonialCard
                                name={item.name}
                                message={item.message}
                                img={item.img}
                            />
                        </div>
                    ))}
                </div>
                <div className="flex justify-center items-center mt-14">
                    <button className="bg-[#cf814d] cursor-pointer text-white font-semibold py-3 px-10 rounded-sm tracking-widest uppercase transition duration-300 hover:shadow-[0_0_25px_#cf814d]">
                        load more testimonials
                    </button>
                </div>
            </section>
        </>
    )
}

export default Testimonials;
