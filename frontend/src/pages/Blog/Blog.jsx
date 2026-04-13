import blogBanner from "../../assets/blog.jpg";
import blog1 from '../../assets/blog_1.jpg';
import blog2 from '../../assets/blog_2.jpg';
import blog3 from '../../assets/blog_3.jpg';
import { FiArrowRight, FiClock, FiUser, FiX } from 'react-icons/fi';
import { GiScissors } from 'react-icons/gi';
import { useState } from 'react';

const blogs = [
  {
    id: 1,
    title: "5 Best Hair Care Tips",
    image: "https://i.pinimg.com/1200x/3b/f0/1c/3bf01c6f7513750b27a24581f1868ba3.jpg",
    desc: "Discover the best hair care tips to keep your hair shiny, healthy, and full of life every single day.",
    category: "Hair Care",
    author: "Steven Porreca",
    readTime: "4 min read",
    date: "Jan 12, 2025",
  },
  {
    id: 2,
    title: "Latest Salon Trends 2025",
    image: "https://i.pinimg.com/736x/29/0a/c7/290ac762ec5a357619898c316119c470.jpg",
    desc: "Stay ahead with the most stylish and modern salon trends dominating this season.",
    category: "Trends",
    author: "Huey Apicella",
    readTime: "5 min read",
    date: "Feb 3, 2025",
  },
  {
    id: 3,
    title: "How to Maintain Your Beard",
    image: "https://i.pinimg.com/1200x/1c/59/6e/1c596ebd5c4d2e990897274ff982c5bb.jpg",
    desc: "Tips from experts on grooming and maintaining a sharp, classy beard look all year round.",
    category: "Grooming",
    author: "Harry Riecke",
    readTime: "3 min read",
    date: "Mar 18, 2025",
  },
];

const blogDetails = {
  1: `Taking care of your hair doesn't have to be complicated. Start with the right shampoo for your hair type — whether oily, dry, or normal. Always condition after shampooing to lock in moisture. Avoid excessive heat styling; if you must, use a heat protectant spray. Trim your hair every 6–8 weeks to prevent split ends. Finally, eat a balanced diet rich in proteins and vitamins to promote healthy hair growth from within.`,
  2: `2025 is all about bold, expressive styles. Textured crops with skin fades are dominating barbershops worldwide. The modern mullet is making a strong comeback with a refined twist. Curtain bangs paired with mid-length cuts are trending for a vintage-modern look. Bleached tips and color accents are popular among younger clients. Ask your barber about what suits your face shape best before committing to a new trend.`,
  3: `A well-maintained beard starts with regular washing using a dedicated beard shampoo. Apply beard oil daily to keep the skin underneath moisturized and prevent itchiness. Use a boar bristle brush to train your beard hairs in the right direction. Trim the neckline every 1–2 weeks to keep it sharp. Visit your barber monthly for a professional shape-up. Patience is key — let it grow for at least 4 weeks before deciding on a style.`,
};

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  return (
    <>
      {/* Blog Detail Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-[#111] border border-white/5 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="relative h-56 overflow-hidden rounded-t-2xl">
              <img src={selectedBlog.image} alt={selectedBlog.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <button onClick={() => setSelectedBlog(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-[#cf814d] hover:text-black transition-all cursor-pointer">
                <FiX size={14} />
              </button>
              <span className="absolute bottom-4 left-4 text-xs bg-[#cf814d] text-black font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {selectedBlog.category}
              </span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-extrabold text-white uppercase tracking-wide mb-2">{selectedBlog.title}</h2>
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                <span className="flex items-center gap-1"><FiUser size={11} /> {selectedBlog.author}</span>
                <span className="flex items-center gap-1"><FiClock size={11} /> {selectedBlog.readTime}</span>
                <span>{selectedBlog.date}</span>
              </div>
              <div className="h-[1px] bg-white/5 mb-4" />
              <p className="text-gray-400 text-sm leading-relaxed">{blogDetails[selectedBlog.id]}</p>
              <button onClick={() => setSelectedBlog(null)}
                className="mt-6 px-6 py-2.5 rounded-xl bg-[#cf814d] text-black text-sm font-semibold hover:bg-[#e6a45f] transition-all cursor-pointer">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero */}}
      <section className="relative w-full h-[55vh] min-h-[320px] flex flex-col justify-end items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${blogBanner})` }}>
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
        </div>
        <div className="relative z-10 text-center pb-12 px-4">
          <p className="text-[#cf814d] text-xs tracking-[0.4em] uppercase mb-3 font-medium">Insights & Tips</p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-widest uppercase mb-3">
            Our Blog
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-300 text-xs sm:text-sm">
            <span>Home</span>
            <span className="text-[#cf814d]">/</span>
            <span className="text-[#cf814d]">Blog</span>
          </div>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="bg-[#0a0a0a] py-20 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-14">
            <p className="text-[#cf814d] text-xs tracking-[0.4em] uppercase mb-3 font-medium">Latest Posts</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white uppercase tracking-widest">
              Grooming Stories
            </h2>
            <div className="flex items-center justify-center mt-5">
              <div className="h-[1px] w-16 bg-[#cf814d]/40" />
              <GiScissors className="text-[#cf814d] mx-3" size={18} />
              <div className="h-[1px] w-16 bg-[#cf814d]/40" />
            </div>
          </div>

          {/* Featured Post */}
          <div onClick={() => setSelectedBlog(blogs[0])} className="group relative overflow-hidden rounded-2xl mb-8 cursor-pointer">
            <div className="h-72 sm:h-96 overflow-hidden">
              <img
                src={blogs[0].image}
                alt={blogs[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute inset-0 border border-[#cf814d]/0 group-hover:border-[#cf814d]/40 rounded-2xl transition-all duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <span className="text-xs bg-[#cf814d] text-black font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
                {blogs[0].category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-wide mb-2">
                {blogs[0].title}
              </h2>
              <p className="text-gray-300 text-sm mb-4 max-w-xl">{blogs[0].desc}</p>
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1"><FiUser size={11} /> {blogs[0].author}</span>
                  <span className="flex items-center gap-1"><FiClock size={11} /> {blogs[0].readTime}</span>
                  <span>{blogs[0].date}</span>
                </div>
                <button onClick={(e) => { e.stopPropagation(); setSelectedBlog(blogs[0]); }} className="flex items-center gap-2 text-[#cf814d] text-sm font-semibold hover:gap-3 transition-all duration-200 cursor-pointer">
                  Read More <FiArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Other Posts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {blogs.slice(1).map((blog) => (
              <div key={blog.id} onClick={() => setSelectedBlog(blog)} className="group bg-[#111] border border-white/5 hover:border-[#cf814d]/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(207,129,77,0.1)] cursor-pointer">
                {/* Image */}
                <div className="h-52 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Content */}
                <div className="p-5">
                  <span className="text-xs bg-[#cf814d]/10 border border-[#cf814d]/20 text-[#cf814d] font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
                    {blog.category}
                  </span>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wide mb-2 group-hover:text-[#cf814d] transition-colors duration-300">
                    {blog.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{blog.desc}</p>
                  <div className="flex items-center justify-between border-t border-white/5 pt-4">
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1"><FiUser size={11} /> {blog.author}</span>
                      <span className="flex items-center gap-1"><FiClock size={11} /> {blog.readTime}</span>
                    </div>
                    <button onClick={(e) => { e.stopPropagation(); setSelectedBlog(blog); }} className="flex items-center gap-1 text-[#cf814d] text-xs font-semibold hover:gap-2 transition-all duration-200 cursor-pointer">
                      Read More <FiArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Blog;
