import ourteam_img from '../../assets/ourteam.jpg'
import team1 from '../../assets/team1.jpg'
import team2 from '../../assets/team2.jpg'
import team3 from '../../assets/team3.jpg'
import team4 from '../../assets/team4.jpg'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const teamMembers = [
    {
        name: "Steven Porreca",
        img: team1,
        desc: "With a razor-sharp eye for detail and a passion for creating stylish looks, Steven is the heart and soul of our barbershop. With over 10 years of experience, he transforms haircuts into works of art.",
    },
    {
        name: "Huey Apicella",
        img: team2,
        desc: "Huey blends creativity and precision, ensuring every client walks out with confidence. His mastery of modern and classic styles makes him a client favorite.",
    },
    {
        name: "Harry Riecke",
        img: team3,
        desc: "Harry’s dedication to his craft shows in every cut. Known for his sharp fades and attention to detail, he’s been shaping styles for over a decade.",
    },
    {
        name: "Merilyn Axe",
        img: team4,
        desc: "Merilyn brings elegance and finesse to the team. With an artistic touch, she creates styles that are both timeless and trendsetting.",
    },
];

const Team = () => {
    return (
        <>
            <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden pt-24 md:pt-28">
                <div
                    className="absolute inset-0 -z-10 bg-cover bg-center"
                    style={{ backgroundImage: `url(${ourteam_img})` }}
                >
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="text-center text-white z-10 px-4">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-widest uppercase">
                        Our Team
                    </h2>
                    <div className="flex items-center justify-center mt-4">
                        <div className="w-3 h-3 rotate-45 bg-[#cf814d]" />
                        <div className="h-[2px] w-24 sm:w-36 md:w-48 bg-[#cf814d]" />
                        <div className="w-3 h-3 rotate-45 bg-[#cf814d]" />
                    </div>
                </div>
            </section>

            {teamMembers.map((member, index) => (
                <section key={index} className="bg-black text-white py-20 px-6">
                    <div
                        className={`max-w-7xl mx-auto flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                            } items-center gap-12`}
                    >
                        <div className="relative w-full max-w-sm mx-auto group overflow-hidden rounded-lg shadow-lg">
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4 w-full h-full border border-[#cf814d] -z-10" />
                        </div>
                        <div className="text-center lg:text-left">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-widest mb-6 uppercase">
                                {member.name}
                            </h2>
                            <p className="text-gray-300 text-base md:text-lg tracking-widest max-w-xl mb-6 leading-relaxed">
                                {member.desc}
                            </p>
                            <div className="flex gap-4 justify-center lg:justify-start">
                                <a
                                    href="#"
                                    className="text-[#cf814d] bg-[#1e1e1e] p-3 rounded-sm hover:text-white hover:bg-[#cf814d] transition"
                                >
                                    <FaFacebookF />
                                </a>
                                <a
                                    href="#"
                                    className="text-[#cf814d] bg-[#1e1e1e] p-3 rounded-sm hover:text-white hover:bg-[#cf814d] transition"
                                >
                                    <FaTwitter />
                                </a>
                                <a
                                    href="#"
                                    className="text-[#cf814d] bg-[#1e1e1e] p-3 rounded-sm hover:text-white hover:bg-[#cf814d] transition"
                                >
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
};

export default Team;
