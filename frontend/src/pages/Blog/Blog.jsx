// Blog.jsx
import blogBanner from "../../assets/blog.jpg";
import img_1 from '../../assets/blog_1.jpg';

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "5 Best Hair Care Tips",
      image:"https://i.pinimg.com/1200x/3b/f0/1c/3bf01c6f7513750b27a24581f1868ba3.jpg",
      desc: "Discover the best hair care tips to keep your hair shiny, healthy, and full of life.",
    },
    {
      id: 2,
      title: "Latest Salon Trends 2025",
      image:
        "https://i.pinimg.com/736x/29/0a/c7/290ac762ec5a357619898c316119c470.jpg",
      desc: "Stay ahead with the most stylish and modern salon trends this season.",
    },
    {
      id: 3,
      title: "How to Maintain Your Beard",
      image:
        "https://i.pinimg.com/1200x/1c/59/6e/1c596ebd5c4d2e990897274ff982c5bb.jpg",
      desc: "Tips from experts on grooming and maintaining a sharp, classy beard look.",
    },
  ];

  return (
    <>
      <section className="relative w-full min-h-[60vh] flex flex-col justify-center items-center overflow-hidden pt-28 md:pt-32">
        <div
          className="absolute top-0 left-0 w-full h-full -z-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${blogBanner})` }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black/70" />
        </div>

        <div className="text-center text-white mt-10 z-10 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-widest uppercase">
            Our Blog
          </h2>
          <div className="flex items-center justify-center mt-4">
            <div className="w-2 md:w-3 h-2 md:h-3 bg-[#cf814d] rotate-45" />
            <div className="h-[2px] w-20 sm:w-36 md:w-44 bg-[#cf814d]" />
            <div className="w-2 md:w-3 h-2 md:h-3 bg-[#cf814d] rotate-45" />
          </div>
          <p className="mt-6 max-w-2xl mx-auto text-gray-300 text-base md:text-lg">
            Read the latest updates, grooming tips and modern trends from our salon experts.
          </p>
        </div>
      </section>
      <section className="bg-black py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="relative bg-[#111] border border-[#cf814d]/40 rounded-xl overflow-hidden shadow-md hover:shadow-[0_0_25px_#cf814d] transition"
            >
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-60 object-cover transform hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6 text-left">
                <h2 className="text-lg md:text-xl font-semibold text-white mb-3">
                  {blog.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">{blog.desc}</p>
                <button className="mt-5 inline-block px-6 py-2 text-sm font-medium text-[#cf814d] border border-[#cf814d] rounded-lg hover:bg-[#cf814d] hover:text-black transition duration-300">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
