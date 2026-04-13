import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-xl bg-[#cf814d] text-black flex items-center justify-center shadow-[0_0_20px_rgba(207,129,77,0.4)] hover:bg-[#e6a45f] hover:shadow-[0_0_30px_rgba(207,129,77,0.6)] transition-all duration-300 cursor-pointer"
      aria-label="Back to top"
    >
      <FiArrowUp size={18} />
    </button>
  );
};

export default BackToTop;
